<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Payment\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\File;


class PaymentController extends Controller
{
    public $payment;

    public function __construct()
    {
        $this->payment = new Payment();
    }

    /* create new payment link */
    public function createNewPaymentLink(Request $request)
    {
        try {

            $PaymentFor = $request['paymentfor'];
            $CustomerEmail = $request['cxemail'];
            $TourId = $request['tourid'];
            $TotalAmount = $request['totamount'];
            $PNR = $request['pnr'];
            $Remarks = $request['remarks'];
            $BankName = $request['bankname'];
            $ChargerPrecen = $request['chargeprec'];
            $PayAmount = $request['payamnt'];
            $WithChargeAmount = $request['withchargamnt'];
            $PayType = $request['paytype'];
            $CurrencyType = $request['currency_type'];
            $User = $request['user_id'];
            $BalanceAmount = (float)($request['totamount'] - $request['payamnt']);

            $response = $this->payment->createNewPayment($PaymentFor, $CustomerEmail, $TourId, $TotalAmount, $PNR, $Remarks, $BankName, $ChargerPrecen, $PayAmount, $WithChargeAmount, $PayType, $BalanceAmount, $User, $CurrencyType);

            return $response;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function getPaymentPage($session_id, $version, $pid)
    {
        try {
            $session = $session_id;
            $versionId = $version;
            $payId = $pid;

            $SqlQuery = DB::table('payments')->where('payments.id', $pid)
                ->join('payment_details', 'payments.id', '=', 'payment_details.payment_id')
                ->join('payment_amounts', 'payments.id', '=', 'payment_amounts.payment_id')
                ->join('pending_payments', 'payments.id', '=', 'pending_payments.payment_id')
                ->first();

            $data = ['session_id' => $session, 'version' => $versionId, 'pid' => $payId, 'dataset' => $SqlQuery];

            return view('PaymentCheckout', $data);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function getPaymentResponseFull($id, $currency_type)
    {
        $paymentId = $id;

        $response = $this->payment->getPaymentResponse($paymentId, $currency_type);

        return view('PaymentResponse', ['dataset' => $response, 'id' => $paymentId, 'currency' => $currency_type]);
        // return $data;
    }

    //get payment details
    public function getPaymentsDetails()
    {

        $response = $this->payment->fetchPaymentDetails();

        return $response;
    }

    //fetch payment details by id
    public function getPaymentsDetailsById(Request $request)
    {

        $response = $this->payment->fetchPaymentDetailsByPayId($request['payId']);

        return $response;
    }

    public function getCount()
    {

        $response = $this->payment->fetchCount();

        return $response;
    }

    //pdf generate
    public function printPdf()
    {
        try {

            $pdf = Pdf::loadView("PaymentResponse");
            $download = $pdf->download('Pay_Recipt.pdf');

            return $download;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function getPaymentRes($id, $currency_type)
    {
        $response = $this->payment->getPaymentResponse($id, $currency_type);

        return $response;
    }
}
