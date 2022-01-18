<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Urlcon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Urlcon::class, 'turn_in']);

Route::get('/show_chart',function(){
    return view("/show_chart");});

Route::get('/{codee}', [Urlcon::class, 'turn_t']);
