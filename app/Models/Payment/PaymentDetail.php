<?php

namespace App\Models\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class PaymentDetail extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'payment_details';

    protected $fillable = [
        'payment_id',
        'customer_email',
        'bank_name',
        'tour_id',
        'PNR',
        'remarks',
        'payment_type',
        'created_by'
    ];

    //create new payment details
    public function createNewPaymentDetail($payId, $cusemail, $bankname, $tourid, $pnr, $remarks, $paytype, $user)
    {
        try {

            PaymentDetail::create([
                'payment_id' => $payId,
                'customer_email' => $cusemail,
                'bank_name' => $bankname,
                'tour_id' => $tourid,
                'PNR' => $pnr,
                'remarks' => $remarks,
                'payment_type' => $paytype,
                'created_by' => $user
            ]);

            return response('success', 200);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
}
