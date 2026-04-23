import { useQuery } from '@tanstack/react-query'
import { Route } from 'lucide-react'
import { getTrips } from '../api/trips'
import StatusBadge from '../components/StatusBadge'

export default function Trips() {
    const { data: trips = [], isLoading } = useQuery({
        queryKey: ['trips'],
        queryFn: getTrips,
    })

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return <span className="text-slate-600 italic">—</span>
        return new Date(dateStr).toLocaleString('de-DE', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-100 font-mono tracking-wide">Trips</h1>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                    <Route size={16} />
                    <span>{trips.length} total</span>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                {isLoading ? (
                    <div className="p-8 text-center text-slate-500 font-mono">Loading...</div>
                    ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="border-b border-slate-800">
                                <tr>
                                    {['ID', 'Vehicle', 'Driver', 'From', 'To', 'Distance', 'Start', 'End', 'Status'].map(h => (
                                        <th key={h} className="text-left text-xs text-slate-500 font-mono uppercase tracking-widest px-4 py-4 whitespace-nowrap">
                                        {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {trips.map(trip => (
                                    <tr key={trip.id} className="hover:bg-slate-800/50 transition-colors">
                                        <td className="px-4 py-4 font-mono text-slate-500">#{trip.id}</td>
                                        <td className="px-4 py-4 font-mono text-amber-400 font-bold">{trip.vehicle?.plate}</td>
                                        <td className="px-4 py-4 text-slate-300">{trip.driver?.name}</td>
                                        <td className="px-4 py-4 text-slate-400 whitespace-nowrap">{trip.start_location}</td>
                                        <td className="px-4 py-4 text-slate-400 whitespace-nowrap">{trip.end_location}</td>
                                        <td className="px-4 py-4 font-mono text-slate-300 whitespace-nowrap">{trip.distance_km} km</td>
                                        <td className="px-4 py-4 font-mono text-slate-400 whitespace-nowrap">{formatDate(trip.start_time)}</td>
                                        <td className="px-4 py-4 font-mono text-slate-400 whitespace-nowrap">{formatDate(trip.end_time)}</td>
                                        <td className="px-4 py-4"><StatusBadge status={trip.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}