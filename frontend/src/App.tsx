import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Vehicles from './pages/Vehicles'
import Drivers from './pages/Drivers'
import Trips from './pages/Trips'

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/"         element={<Dashboard />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/drivers"  element={<Drivers />} />
                <Route path="/trips"    element={<Trips />} />
            </Routes>
        </Layout>
    )
}