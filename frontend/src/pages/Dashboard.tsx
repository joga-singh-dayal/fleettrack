import { useQuery } from '@tanstack/react-query'
import { Truck, Route, Users, Gauge } from 'lucide-react'
import { getVehicles } from '../api/vehicles'
import { getDrivers } from '../api/drivers'
import { getTrips } from '../api/trips'
import StatusBadge from '../components/StatusBadge'

export default function Dashboard() {
    const { data: vehicles = [] } = useQuery({ queryKey: ['vehicles'], queryFn: getVehicles })
    const { data: drivers  = [] } = useQuery({ queryKey: ['drivers'],  queryFn: getDrivers })
    const { data: trips    = [] } = useQuery({ queryKey: ['trips'],    queryFn: getTrips })

    const totalDistance = trips.reduce((sum, t) => sum + Number(t.distance_km), 0)
    const activeTrips   = trips.filter(t => t.status === 'in_progress').length

    const kpis = [
        { label: 'Total Vehicles',      value: vehicles.length,              icon: Truck },
        { label: 'Active Trips',        value: activeTrips,                  icon: Route },
        { label: 'Total Drivers',       value: drivers.length,               icon: Users },
        { label: 'Distance This Week',  value: `${totalDistance.toLocaleString()} km`, icon: Gauge },
    ]

    const recentTrips = trips.slice(0, 8)

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-slate-100 font-mono tracking-wide">
                Dashboard
            </h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">{label}</span>
                            <Icon size={16} className="text-amber-400" />
                        </div>
                        <div className="text-3xl font-bold font-mono text-slate-100">{value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Vehicle Status Summary */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h2 className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">
                        Vehicle Status
                    </h2>
                    <div className="space-y-4">
                        {(['active', 'inactive', 'in_repair'] as const).map(status => (
                            <div key={status} className="flex items-center justify-between">
                                <StatusBadge status={status} />
                                <span className="text-xl font-bold font-mono text-slate-100">
                                    {vehicles.filter(v => v.status === status).length}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Trips */}
                <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h2 className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">
                        Recent Trips
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-800">
                                {['Vehicle', 'Driver', 'From', 'To', 'Distance', 'Status'].map(h => (
                                    <th key={h} className="text-left text-xs text-slate-500 font-mono uppercase tracking-widest pb-3 pr-4">
                                    {h}
                                    </th>
                                ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {recentTrips.map(trip => (
                                    <tr key={trip.id} className="hover:bg-slate-800/50 transition-colors">
                                        <td className="py-3 pr-4 font-mono text-amber-400">{trip.vehicle?.plate}</td>
                                        <td className="py-3 pr-4 text-slate-300">{trip.driver?.name}</td>
                                        <td className="py-3 pr-4 text-slate-400">{trip.start_location}</td>
                                        <td className="py-3 pr-4 text-slate-400">{trip.end_location}</td>
                                        <td className="py-3 pr-4 font-mono text-slate-300">{trip.distance_km} km</td>
                                        <td className="py-3"><StatusBadge status={trip.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}