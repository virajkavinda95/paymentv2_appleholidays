<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Laravel\Sanctum\HasApiTokens;

class Transaction extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'transactions';

    protected $fillable = [
        'payment_id',
        'auth_token',
        'trans_token',
        'auth_status',
        'result',
        'payment_status',
        'user_ip',
    ];

    
}
