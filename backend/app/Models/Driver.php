<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Driver extends Model  {
    protected $fillable = [
        'name',
        'license_number',
        'status',
        'assigned_vehicle_id',
    ];

    public function vehicle()  {
        return $this->belongsTo(Vehicle::class, 'assigned_vehicle_id');
    }

    public function trips() {
        return $this->hasMany(Trip::class);
    }
}
