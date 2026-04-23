import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Truck, Users, Route } from 'lucide-react'

const navItems = [
    { to: '/',         label: 'Dashboard', icon: LayoutDashboard },
    { to: '/vehicles', label: 'Vehicles',  icon: Truck },
    { to: '/drivers',  label: 'Drivers',   icon: Users },
    { to: '/trips',    label: 'Trips',     icon: Route },
]

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-950 text-slate-100">

            {/* Sidebar */}
            <aside className="w-60 bg-slate-900 border-r border-slate-800 flex flex-col">

                {/* Logo */}
                <div className="px-6 py-5 border-b border-slate-800">
                    <span className="text-amber-400 font-mono font-bold text-xl tracking-widest">
                        FLEET<span className="text-slate-100">TRACK</span>
                    </span>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 py-4 space-y-1">
                    {navItems.map(({ to, label, icon: Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                isActive
                                    ? 'bg-amber-400/10 text-amber-400'
                                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                                }`
                            }
                        >
                            <Icon size={18} />
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-800">
                    <p className="text-xs text-slate-500 font-mono">v1.0.0</p>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>

        </div>
    )
}