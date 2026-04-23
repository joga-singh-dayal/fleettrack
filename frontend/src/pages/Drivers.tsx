import { useQuery } from '@tanstack/react-query'
import { Users } from 'lucide-react'
import { getDrivers } from '../api/drivers'
import StatusBadge from '../components/StatusBadge'

export default function Drivers() {
    const { data: drivers = [], isLoading } = useQuery({
        queryKey: ['drivers'],
        queryFn: getDrivers,
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-100 font-mono tracking-wide">Drivers</h1>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                    <Users size={16} />
                    <span>{drivers.length} total</span>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                {isLoading ? (
                    <div className="p-8 text-center text-slate-500 font-mono">Loading...</div>
                    ) : (
                    <table className="w-full text-sm">
                        <thead className="border-b border-slate-800">
                            <tr>
                                {['ID', 'Name', 'License', 'Status', 'Assigned Vehicle'].map(h => (
                                <th key={h} className="text-left text-xs text-slate-500 font-mono uppercase tracking-widest px-6 py-4">
                                    {h}
                                </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {drivers.map(driver => (
                                <tr key={driver.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-slate-500">#{driver.id}</td>
                                    <td className="px-6 py-4 text-slate-300 font-medium">{driver.name}</td>
                                    <td className="px-6 py-4 font-mono text-slate-400">{driver.license_number}</td>
                                    <td className="px-6 py-4"><StatusBadge status={driver.status} /></td>
                                    <td className="px-6 py-4 font-mono text-amber-400">
                                        {driver.vehicle ? driver.vehicle.plate : <span className="text-slate-600 italic font-sans">Unassigned</span>}
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