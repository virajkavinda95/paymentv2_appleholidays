<?php

namespace App\Models\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class PaymentAmount extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'payment_amounts';

    protected $fillable = [
        'payment_id',
        'net_amount',
        'with_charge',
        'charge'
    ];

    //create a new payment amount
    public function createPaymentAmount($payId, $netAmount, $withCharge, $charge)
    {
        try {

            PaymentAmount::create([
                'payment_id' => $payId,
                'net_amount' => $netAmount,
                'with_charge' => $withCharge,
                'charge' => $charge
            ]);

            return response('success', 200);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
}
