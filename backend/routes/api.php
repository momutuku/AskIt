<?php

use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\InquiryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\DependencyInjection\RegisterControllerArgumentLocatorsPass;

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



Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('inquries', [InquiryController::class, 'getAll']);
    Route::post('inquries/add', [InquiryController::class, 'store']);
    Route::get('inquries/{id}', [InquiryController::class, 'getByID']);
    Route::put('inquiries/update/{id}', [InquiryController::class, 'update']);
});
