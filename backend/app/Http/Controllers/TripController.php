<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller {
    public function index() {
        return response()->json(
            Trip::with(['vehicle', 'driver'])
                ->orderBy('start_time', 'desc')
                ->get()
        );
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'vehicle_id'     => 'required|exists:vehicles,id',
            'driver_id'      => 'required|exists:drivers,id',
            'start_time'     => 'required|date',
            'end_time'       => 'nullable|date|after:start_time',
            'start_location' => 'required|string|max:200',
            'end_location'   => 'required|string|max:200',
            'distance_km'    => 'required|numeric|min:0',
            'status'         => 'required|in:in_progress,completed,cancelled',
        ]);

        $trip = Trip::create($validated);
        return response()->json($trip, 201);
    }

    public function update(Request $request, Trip $trip) {
        $validated = $request->validate([
            'vehicle_id'     => 'sometimes|exists:vehicles,id',
            'driver_id'      => 'sometimes|exists:drivers,id',
            'start_time'     => 'sometimes|date',
            'end_time'       => 'nullable|date',
            'start_location' => 'sometimes|string|max:200',
            'end_location'   => 'sometimes|string|max:200',
            'distance_km'    => 'sometimes|numeric|min:0',
            'status'         => 'sometimes|in:in_progress,completed,cancelled',
        ]);

        $trip->update($validated);
        return response()->json($trip);
    }

    public function destroy(Trip $trip) {
        $trip->delete();
        return response()->json(['message' => 'Trip deleted']);
    }
}
