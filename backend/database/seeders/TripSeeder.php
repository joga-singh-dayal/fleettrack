<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TripSeeder extends Seeder
{
    public function run(): void
    {
        $trips = [
            ['vehicle_id' => 1, 'driver_id' => 1, 'start_time' => '2026-04-14 06:00:00', 'end_time' => null,                  'start_location' => 'Stockholm Hub',      'end_location' => 'Gothenburg Depot',  'distance_km' => 472, 'status' => 'in_progress'],
            ['vehicle_id' => 2, 'driver_id' => 2, 'start_time' => '2026-04-13 08:15:00', 'end_time' => '2026-04-13 16:45:00', 'start_location' => 'Malmö Terminal',     'end_location' => 'Copenhagen Port',   'distance_km' => 312, 'status' => 'completed'],
            ['vehicle_id' => 4, 'driver_id' => 3, 'start_time' => '2026-04-14 05:30:00', 'end_time' => null,                  'start_location' => 'Oslo Warehouse',     'end_location' => 'Stockholm Hub',     'distance_km' => 528, 'status' => 'in_progress'],
            ['vehicle_id' => 6, 'driver_id' => 4, 'start_time' => '2026-04-12 07:00:00', 'end_time' => '2026-04-12 12:30:00', 'start_location' => 'Helsinki Yard',      'end_location' => 'Turku Depot',       'distance_km' => 168, 'status' => 'completed'],
            ['vehicle_id' => 7, 'driver_id' => 5, 'start_time' => '2026-04-14 04:45:00', 'end_time' => null,                  'start_location' => 'Gothenburg Depot',   'end_location' => 'Malmö Terminal',    'distance_km' => 275, 'status' => 'in_progress'],
            ['vehicle_id' => 9, 'driver_id' => 6, 'start_time' => '2026-04-11 09:00:00', 'end_time' => '2026-04-11 17:30:00', 'start_location' => 'Stockholm Hub',      'end_location' => 'Uppsala Center',    'distance_km' => 72,  'status' => 'completed'],
            ['vehicle_id' => 1, 'driver_id' => 1, 'start_time' => '2026-04-10 06:30:00', 'end_time' => '2026-04-10 18:00:00', 'start_location' => 'Gothenburg Depot',   'end_location' => 'Oslo Warehouse',    'distance_km' => 298, 'status' => 'completed'],
            ['vehicle_id' => 2, 'driver_id' => 2, 'start_time' => '2026-04-09 07:45:00', 'end_time' => '2026-04-09 14:15:00', 'start_location' => 'Copenhagen Port',    'end_location' => 'Hamburg Terminal',  'distance_km' => 310, 'status' => 'completed'],
            ['vehicle_id' => 4, 'driver_id' => 3, 'start_time' => '2026-04-08 05:00:00', 'end_time' => '2026-04-08 16:30:00', 'start_location' => 'Berlin Depot',       'end_location' => 'Stockholm Hub',     'distance_km' => 845, 'status' => 'completed'],
            ['vehicle_id' => 6, 'driver_id' => 4, 'start_time' => '2026-04-13 06:00:00', 'end_time' => '2026-04-13 10:30:00', 'start_location' => 'Turku Depot',        'end_location' => 'Helsinki Yard',     'distance_km' => 168, 'status' => 'completed'],
            ['vehicle_id' => 7, 'driver_id' => 5, 'start_time' => '2026-04-11 08:00:00', 'end_time' => '2026-04-11 19:00:00', 'start_location' => 'Malmö Terminal',     'end_location' => 'Gothenburg Depot',  'distance_km' => 275, 'status' => 'completed'],
            ['vehicle_id' => 9, 'driver_id' => 6, 'start_time' => '2026-04-10 10:00:00', 'end_time' => '2026-04-10 13:45:00', 'start_location' => 'Uppsala Center',     'end_location' => 'Stockholm Hub',     'distance_km' => 72,  'status' => 'completed'],
            ['vehicle_id' => 1, 'driver_id' => 1, 'start_time' => '2026-04-07 06:00:00', 'end_time' => '2026-04-07 11:30:00', 'start_location' => 'Stockholm Hub',      'end_location' => 'Norrköping Port',   'distance_km' => 162, 'status' => 'completed'],
            ['vehicle_id' => 2, 'driver_id' => 2, 'start_time' => '2026-04-12 05:30:00', 'end_time' => null,                  'start_location' => 'Hamburg Terminal',   'end_location' => 'Malmö Terminal',    'distance_km' => 310, 'status' => 'cancelled'],
            ['vehicle_id' => 4, 'driver_id' => 3, 'start_time' => '2026-04-06 07:00:00', 'end_time' => '2026-04-06 20:00:00', 'start_location' => 'Stockholm Hub',      'end_location' => 'Berlin Depot',      'distance_km' => 845, 'status' => 'completed'],
        ];

        DB::table('trips')->insert($trips);
    }
}
