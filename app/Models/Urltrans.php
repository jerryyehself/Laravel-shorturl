<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Urltrans extends Model
{
    use HasFactory;

    protected $table = 'urltrans';

    public $timestamps = false;

    protected $pre_id;
    protected $new_id;
    protected $url_title;
    protected $number_of_inseret_times;
    protected $url_host;
    protected $ins_time;
    protected $usage_number;
    protected $url_update_time;
}
