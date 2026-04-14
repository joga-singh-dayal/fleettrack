<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller {
    public function index() {
        return response()->json(
            Driver::with('vehicle')->orderBy('id')->get()
        );
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name'                => 'required|string|max:100',
            'license_number'      => 'required|string|max:50|unique:drivers',
            'status'              => 'required|in:available,on_trip,off_duty',
            'assigned_vehicle_id' => 'nullable|exists:vehicles,id',
        ]);

        $driver = Driver::create($validated);
        return response()->json($driver, 201);
    }

    public function update(Request $request, Driver $driver) {
        $validated = $request->validate([
            'name'                => 'sometimes|string|max:100',
            'license_number'      => 'sometimes|string|max:50|unique:drivers,license_number,' . $driver->id,
            'status'              => 'sometimes|in:available,on_trip,off_duty',
            'assigned_vehicle_id' => 'nullable|exists:vehicles,id',
        ]);

        $driver->update($validated);
        return response()->json($driver);
    }

    public function destroy(Driver $driver)  {
        $driver->delete();
        return response()->json(['message' => 'Driver deleted']);
    }
}
