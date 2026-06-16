import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const DashboardApp = React.lazy(() => import('dashboard-remote/App'))
const LocationSearchApp = React.lazy(() => import('location-search-remote/App'))

function Nav() {
  return (
    <nav style={{ padding: '12px 24px', background: '#1e293b', display: 'flex', gap: '16px', alignItems: 'center' }}>
      <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '18px' }}>WeatherApp</span>
      <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/search" style={{ color: '#94a3b8', textDecoration: 'none' }}>Search Location</Link>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<div style={{ padding: '24px', color: '#64748b' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DashboardApp />} />
          <Route path="/search" element={<LocationSearchApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
