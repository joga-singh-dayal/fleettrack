<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller {
    public function index() {
        return response()->json(
            Vehicle::with('driver')->orderBy('id')->get()
        );
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'plate'  => 'required|string|max:20|unique:vehicles',
            'model'  => 'required|string|max:100',
            'year'   => 'required|integer|min:2000|max:2030',
            'status' => 'required|in:active,inactive,in_repair',
        ]);

        $vehicle = Vehicle::create($validated);
        return response()->json($vehicle, 201);
    }

    public function update(Request $request, Vehicle $vehicle) {
        $validated = $request->validate([
            'plate'  => 'sometimes|string|max:20|unique:vehicles,plate,' . $vehicle->id,
            'model'  => 'sometimes|string|max:100',
            'year'   => 'sometimes|integer|min:2000|max:2030',
            'status' => 'sometimes|in:active,inactive,in_repair',
        ]);

        $vehicle->update($validated);
        return response()->json($vehicle);
    }

    public function destroy(Vehicle $vehicle) {
        $vehicle->delete();
        return response()->json(['message' => 'Vehicle deleted']);
    }
}
