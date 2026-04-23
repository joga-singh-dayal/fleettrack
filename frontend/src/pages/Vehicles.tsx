import { useQuery } from '@tanstack/react-query'
import { Truck } from 'lucide-react'
import { getVehicles } from '../api/vehicles'
import StatusBadge from '../components/StatusBadge'

export default function Vehicles() {
    const { data: vehicles = [], isLoading } = useQuery({
        queryKey: ['vehicles'],
        queryFn: getVehicles,
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-100 font-mono tracking-wide">Vehicles</h1>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                    <Truck size={16} />
                    <span>{vehicles.length} total</span>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                {isLoading ? (
                    <div className="p-8 text-center text-slate-500 font-mono">Loading...</div>
                    ) : (
                    <table className="w-full text-sm">
                        <thead className="border-b border-slate-800">
                            <tr>
                                {['ID', 'Plate', 'Model', 'Year', 'Status', 'Assigned Driver'].map(h => (
                                    <th key={h} className="text-left text-xs text-slate-500 font-mono uppercase tracking-widest px-6 py-4">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {vehicles.map(vehicle => (
                                <tr key={vehicle.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-slate-500">#{vehicle.id}</td>
                                    <td className="px-6 py-4 font-mono text-amber-400 font-bold">{vehicle.plate}</td>
                                    <td className="px-6 py-4 text-slate-300">{vehicle.model}</td>
                                    <td className="px-6 py-4 font-mono text-slate-400">{vehicle.year}</td>
                                    <td className="px-6 py-4"><StatusBadge status={vehicle.status} /></td>
                                    <td className="px-6 py-4 text-slate-400">
                                        {vehicle.driver ? vehicle.driver.name : <span className="text-slate-600 italic">Unassigned</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}