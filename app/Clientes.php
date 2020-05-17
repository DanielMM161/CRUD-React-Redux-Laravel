<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    protected $fillable = ['id', 'name', 'phone', 'lastName', 'email', 'address', 'register'];
}
