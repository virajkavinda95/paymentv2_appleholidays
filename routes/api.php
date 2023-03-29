<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Payment\PaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('/create_new_pay_link', [PaymentController::class, 'createNewPaymentLink']);
Route::get('/payment_checkout/payment_session/{id}/{version}/{pid}', [PaymentController::class, 'getPaymentPage']);
Route::get('/get_pay_response/{id}', [PaymentController::class, 'getPaymentResponseFull']);
Route::get('/get_payment_details', [PaymentController::class, 'getPaymentsDetails']);
Route::get('/get_count', [PaymentController::class, 'getCount']);
Route::post('/print_reciept', [PaymentController::class, 'printPdf']);
Route::post('/get_payment_details_by_id', [PaymentController::class, 'getPaymentsDetailsById']);
Route::post('/auth_user', [AuthController::class, 'getAuthUser']);



// Route::group(['middleware' => 'api'], function () {
// });
