export type VehicleStatus = 'active' | 'inactive' | 'in_repair'
export type DriverStatus = 'available' | 'on_trip' | 'off_duty'
export type TripStatus = 'in_progress' | 'completed' | 'cancelled'

export interface Vehicle {
    id: number
    plate: string
    model: string
    year: number
    status: VehicleStatus
    driver?: Driver | null
    created_at: string
    updated_at: string
}

export interface Driver {
    id: number
    name: string
    license_number: string
    status: DriverStatus
    assigned_vehicle_id: number | null
    vehicle?: Vehicle | null
    created_at: string
    updated_at: string
}

export interface Trip {
    id: number
    vehicle_id: number
    driver_id: number
    start_time: string
    end_time: string | null
    start_location: string
    end_location: string
    distance_km: number
    status: TripStatus
    vehicle?: Vehicle
    driver?: Driver
    created_at: string
    updated_at: string
}