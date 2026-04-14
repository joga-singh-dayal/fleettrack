<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model {
    protected $fillable = [
        'plate',
        'model',
        'year',
        'status',
    ];

    public function driver() {
        return $this->hasOne(Driver::class, 'assigned_vehicle_id');
    }

    public function trips() {
        return $this->hasMany(Trip::class);
    }
}
