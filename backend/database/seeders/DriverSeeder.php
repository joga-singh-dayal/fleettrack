<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DriverSeeder extends Seeder
{
    public function run(): void
    {
        $drivers = [
            ['name' => 'Marcus Webb',    'license_number' => 'CDL-88421', 'status' => 'on_trip',  'assigned_vehicle_id' => 1],
            ['name' => 'Elena Rossi',    'license_number' => 'CDL-77209', 'status' => 'available','assigned_vehicle_id' => 2],
            ['name' => 'James Cole',     'license_number' => 'CDL-55312', 'status' => 'on_trip',  'assigned_vehicle_id' => 4],
            ['name' => 'Aisha Patel',    'license_number' => 'CDL-66108', 'status' => 'available','assigned_vehicle_id' => 6],
            ['name' => 'Tomas Lindgren', 'license_number' => 'CDL-44590', 'status' => 'on_trip',  'assigned_vehicle_id' => 7],
            ['name' => 'Sara Nilsson',   'license_number' => 'CDL-33872', 'status' => 'available','assigned_vehicle_id' => 9],
            ['name' => 'Raj Kumar',      'license_number' => 'CDL-22145', 'status' => 'off_duty', 'assigned_vehicle_id' => null],
            ['name' => 'Liam O\'Brien',  'license_number' => 'CDL-11763', 'status' => 'off_duty', 'assigned_vehicle_id' => null],
        ];

        DB::table('drivers')->insert($drivers);
    }
}
