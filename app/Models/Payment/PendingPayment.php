<?php

namespace App\Models\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class PendingPayment extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'pending_payments';

    protected $fillable = [
        'payment_id',
        'total_amount',
        'payment_amount',
        'balance_amount'
    ];

    public function createPendingPayment($payId, $totAmount, $payAmount, $balAmount)
    {
        try {

            PendingPayment::create([
                'payment_id' => $payId,
                'total_amount' => $totAmount,
                'payment_amount' => $payAmount,
                'balance_amount' => $balAmount
            ]);

            return response('success', 200);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
}
