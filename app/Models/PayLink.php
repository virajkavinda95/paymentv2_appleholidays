<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class PayLink extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'pay_links';

    protected $fillable = [
        'pay_id',
        'pay_link',
    ];

    public $timestamps = false;

    //create payment link row
    public function createPayLinkRow($payid, $paylink)
    {
        try {
            PayLink::create([
                'pay_id' => $payid,
                'pay_link' => $paylink,
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
