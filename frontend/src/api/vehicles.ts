import client from './client'
import type { Vehicle } from '../types'

export const getVehicles = async (): Promise<Vehicle[]> => {
    const { data } = await client.get('/vehicles')
    return data
}

export const createVehicle = async (vehicle: Omit<Vehicle, 'id' | 'driver' | 'created_at' | 'updated_at'>) => {
    const { data } = await client.post('/vehicles', vehicle)
    return data
}

export const updateVehicle = async (id: number, vehicle: Partial<Vehicle>) => {
    const { data } = await client.put(`/vehicles/${id}`, vehicle)
    return data
}

export const deleteVehicle = async (id: number) => {
    const { data } = await client.delete(`/vehicles/${id}`)
    return data
}