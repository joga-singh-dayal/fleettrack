import client from './client'
import type { Trip } from '../types'

export const getTrips = async (): Promise<Trip[]> => {
    const { data } = await client.get('/trips')
    return data
}

export const createTrip = async (trip: Omit<Trip, 'id' | 'vehicle' | 'driver' | 'created_at' | 'updated_at'>) => {
    const { data } = await client.post('/trips', trip)
    return data
}

export const updateTrip = async (id: number, trip: Partial<Trip>) => {
    const { data } = await client.put(`/trips/${id}`, trip)
    return data
}

export const deleteTrip = async (id: number) => {
    const { data } = await client.delete(`/trips/${id}`)
    return data
}