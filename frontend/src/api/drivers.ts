import client from './client'
import type { Driver } from '../types'

export const getDrivers = async (): Promise<Driver[]> => {
    const { data } = await client.get('/drivers')
    return data
}

export const createDriver = async (driver: Omit<Driver, 'id' | 'vehicle' | 'created_at' | 'updated_at'>) => {
    const { data } = await client.post('/drivers', driver)
    return data
}

export const updateDriver = async (id: number, driver: Partial<Driver>) => {
    const { data } = await client.put(`/drivers/${id}`, driver)
    return data
}

export const deleteDriver = async (id: number) => {
    const { data } = await client.delete(`/drivers/${id}`)
    return data
}