<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VehicleSeeder extends Seeder
{
    public function run(): void
    {
        $vehicles = [
            ['plate' => 'FT-1042', 'model' => 'Volvo FH16',         'year' => 2022, 'status' => 'active'],
            ['plate' => 'FT-2087', 'model' => 'Scania R500',        'year' => 2021, 'status' => 'active'],
            ['plate' => 'FT-3015', 'model' => 'MAN TGX',            'year' => 2023, 'status' => 'in_repair'],
            ['plate' => 'FT-4091', 'model' => 'DAF XF',             'year' => 2020, 'status' => 'active'],
            ['plate' => 'FT-5033', 'model' => 'Mercedes Actros',    'year' => 2022, 'status' => 'inactive'],
            ['plate' => 'FT-6078', 'model' => 'Iveco S-Way',        'year' => 2023, 'status' => 'active'],
            ['plate' => 'FT-7012', 'model' => 'Renault T High',     'year' => 2021, 'status' => 'active'],
            ['plate' => 'FT-8056', 'model' => 'Volvo FM',           'year' => 2019, 'status' => 'in_repair'],
            ['plate' => 'FT-9024', 'model' => 'Scania S730',        'year' => 2023, 'status' => 'active'],
            ['plate' => 'FT-1098', 'model' => 'MAN TGS',            'year' => 2020, 'status' => 'inactive'],
        ];

        DB::table('vehicles')->insert($vehicles);
    }
}
