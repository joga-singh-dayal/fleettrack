type Status =
    | 'active' | 'inactive' | 'in_repair'
    | 'available' | 'on_trip' | 'off_duty'
    | 'in_progress' | 'completed' | 'cancelled'

const styles: Record<Status, string> = {
    active:      'bg-emerald-400/10 text-emerald-400',
    available:   'bg-emerald-400/10 text-emerald-400',
    completed:   'bg-emerald-400/10 text-emerald-400',
    inactive:    'bg-slate-400/10 text-slate-400',
    off_duty:    'bg-slate-400/10 text-slate-400',
    cancelled:   'bg-red-400/10 text-red-400',
    in_repair:   'bg-amber-400/10 text-amber-400',
    on_trip:     'bg-amber-400/10 text-amber-400',
    in_progress: 'bg-blue-400/10 text-blue-400',
}

const labels: Record<Status, string> = {
    active:      'Active',
    inactive:    'Inactive',
    in_repair:   'In Repair',
    available:   'Available',
    on_trip:     'On Trip',
    off_duty:    'Off Duty',
    in_progress: 'In Progress',
    completed:   'Completed',
    cancelled:   'Cancelled',
}

export default function StatusBadge({ status }: { status: Status }) {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono ${styles[status]}`}>
            {labels[status]}
        </span>
    )
}