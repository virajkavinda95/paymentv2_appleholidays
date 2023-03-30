<?php

namespace App\Models\Payment;

use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

class Payment extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'payments';

    protected $fillable = [
        'payment_for'
    ];

    public $payment_details;
    public $pending_payments;
    public $payment_amounts;
    public $transactions;

    public $APIUsername;
    public $APIPassword;
    public $MerchantId;

    public function __construct()
    {
        $this->payment_details = new PaymentDetail();
        $this->pending_payments = new PendingPayment();
        $this->payment_amounts = new PaymentAmount();
        $this->transactions = new Transaction();

        $this->APIUsername = 'merchant.TESTAPPLEHOLILKR';
        $this->APIPassword = '2647d21e46251c604f5acb25db01bb7a';
        $this->MerchantId = 'TESTAPPLEHOLILKR';
    }



    //create new payment
    public function createNewPayment($payfor, $cusemail, $tourid, $totamount, $pnr, $remarks, $bankname, $chargeprece, $payamount, $withchargeamount, $paytype, $balamount, $user)
    {
        try {

            $CheckoutArray = [];

            $NewPayment = Payment::create([
                'payment_for' => $payfor
            ]);


            $CheckoutArray['apiOperation'] = "INITIATE_CHECKOUT";
            $CheckoutArray['interaction']['merchant']['name'] = $this->MerchantId;
            $CheckoutArray['interaction']['operation'] = "PURCHASE";
            $CheckoutArray['interaction']['returnUrl'] = "https://paydev.appletechlabs.com/api/get_pay_response/" . $NewPayment->id;
            $CheckoutArray['interaction']['displayControl']['billingAddress'] = 'HIDE';
            $CheckoutArray['interaction']['displayControl']['customerEmail'] = "HIDE";
            $CheckoutArray['interaction']['displayControl']['shipping'] = "HIDE";
            $CheckoutArray['order']['amount'] = $withchargeamount;
            $CheckoutArray['order']['currency'] = "LKR";
            $CheckoutArray['order']['description'] = $remarks;
            $CheckoutArray['order']['id'] = $NewPayment->id;

            $API_Response = Http::withBasicAuth($this->APIUsername, $this->APIPassword)->post('https://cbcmpgs.gateway.mastercard.com/api/rest/version/67/merchant/' . $this->MerchantId . '/session', $CheckoutArray)->json();

            $this->payment_details->createNewPaymentDetail($NewPayment->id, $cusemail, $bankname, $tourid, $pnr, $remarks, $paytype, $user);
            $this->payment_amounts->createPaymentAmount($NewPayment->id, $totamount, $withchargeamount, $chargeprece);
            $this->pending_payments->createPendingPayment($NewPayment->id, $totamount, $payamount, $balamount);

            $sessionId = $API_Response['session']['id'];
            $version = $API_Response['session']['version'];

            $passingData = $this->getPaymentLinkData($NewPayment->id, $sessionId, $version);

            return $passingData;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    //getting created payment link data to payment box
    public function getPaymentLinkData($pid, $session_id, $version_id)
    {
        try {

            $SqlQuery = DB::table('payments')->where('payments.id', $pid)
                ->join('payment_details', 'payments.id', '=', 'payment_details.payment_id')
                ->join('payment_amounts', 'payments.id', '=', 'payment_amounts.payment_id')
                ->join('pending_payments', 'payments.id', '=', 'pending_payments.payment_id')
                ->get();

            return response([
                'status' => 200,
                'pid' => $pid,
                'session_id' => $session_id,
                'version' => $version_id,
                'data_set' => $SqlQuery
            ]);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    //get created payment response
    public function getPaymentResponse($id)
    {
        try {

            $Url = 'https://cbcmpgs.gateway.mastercard.com/api/rest/version/67/merchant/' . $this->MerchantId . '/order/' . $id;

            $API_response = Http::withBasicAuth($this->APIUsername, $this->APIPassword)->get($Url)->json();

            $AuthToken = $API_response['authentication']['3ds']['authenticationToken'];
            $TransToken = $API_response['authentication']['3ds']['transactionId'];
            $AuthStatus = $API_response['authenticationStatus'];
            $Result = $API_response['result'];
            $Status = $API_response['status'];
            $UserIp = $API_response['device']['ipAddress'];


            Transaction::create([
                'payment_id' => $id,
                'auth_token' => $AuthToken,
                'trans_token' => $TransToken,
                'auth_status' => $AuthStatus,
                'result' => $Result,
                'payment_status' => $Status,
                'user_ip' => $UserIp,
            ]);


            $SqlQuery = DB::table('payments')->where('payments.id', $id)
                ->join('payment_details', 'payments.id', '=', 'payment_details.payment_id')
                ->join('payment_amounts', 'payments.id', '=', 'payment_amounts.payment_id')
                ->join('pending_payments', 'payments.id', '=', 'pending_payments.payment_id')
                ->join('transactions', 'payments.id', '=', 'transactions.payment_id')
                ->first();


            if ($Status === 'CAPTURED') {
                return $SqlQuery;
            } else if ($Status === 'FAILED') {
                return $SqlQuery;
            } else {
                return response([
                    'status' => 400,
                    'data_response' => $API_response,
                    'data' => $SqlQuery
                ]);
            }
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    //get all the payment details
    public function fetchPaymentDetails()
    {
        try {

            $PaymentDetails = DB::table('payments')
                ->join('payment_details', 'payments.id', '=', 'payment_details.payment_id')
                ->join('payment_amounts', 'payments.id', '=', 'payment_amounts.payment_id')
                ->join('pending_payments', 'payments.id', '=', 'pending_payments.payment_id')
                ->join('transactions', 'payments.id', '=', 'transactions.payment_id')
                ->join('users', 'payment_details.created_by', '=', 'users.id')
                ->select('*', 'payments.id AS PaymentId', 'transactions.id AS TransactionId')
                ->groupBy('payments.id')
                ->get();


            return response([
                'status' => 200,
                'data_response' => $PaymentDetails
            ]);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    //get count of payments and transaction
    public function fetchCount()
    {
        try {

            $PaymentCount = DB::table('payments')->count();
            $TransactionCount = DB::table('transactions')->count();


            return response([
                'status' => 200,
                'payCount' => $PaymentCount,
                'transCount' => $TransactionCount
            ]);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    //get all the payment details
    public function fetchPaymentDetailsByPayId($id)
    {
        try {

            $PaymentDetails = DB::table('payments')->where('payments.id', $id)
                ->join('payment_details', 'payments.id', '=', 'payment_details.payment_id')
                ->join('payment_amounts', 'payments.id', '=', 'payment_amounts.payment_id')
                ->join('pending_payments', 'payments.id', '=', 'pending_payments.payment_id')
                ->join('transactions', 'payments.id', '=', 'transactions.payment_id')
                ->join('users', 'payment_details.created_by', '=', 'users.id')
                ->select('*', 'payments.id AS PaymentId', 'transactions.id AS TransactionId')
                ->groupBy('payments.id')
                ->first();


            return response([
                'status' => 200,
                'data_response' => $PaymentDetails
            ]);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
}
