import React, { useState } from 'react'
import { mockLocations, Location } from './data/mock-locations'

export default function App() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Location | null>(null)

  const results = query.length > 0
    ? mockLocations.filter(l =>
        l.name.toLowerCase().includes(query.toLowerCase()) ||
        l.country.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 80 }}>
      <div style={{ width: '100%', maxWidth: 640, padding: '0 24px' }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 24, textAlign: 'center' }}>
          Search Location
        </h1>

        {/* Search input */}
        <input
          aria-label="Search for a city"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a city..."
          style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: '2px solid #e2e8f0', borderRadius: 10,
                   outline: 'none', boxSizing: 'border-box', background: 'white', color: '#0f172a' }}
          autoFocus
        />

        {/* Results */}
        {results.length > 0 && (
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {results.map(loc => (
              <div key={loc.id}
                role="button"
                aria-label={`Select ${loc.name}, ${loc.country}`}
                onClick={() => setSelected(loc)}
                style={{ background: 'white', borderRadius: 10, padding: '16px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                         display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
                         border: selected?.id === loc.id ? '2px solid #2563eb' : '2px solid transparent' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>{loc.name}, {loc.country}</div>
                  <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>{loc.lat.toFixed(4)}°, {loc.lon.toFixed(4)}°</div>
                </div>
                <button
                  aria-label={`Select ${loc.name}`}
                  style={{ padding: '8px 18px', background: '#2563eb', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
                  Select
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {query.length > 0 && results.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: 48, color: '#94a3b8' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ fontWeight: 600, color: '#64748b' }}>No results for "{query}"</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>Try a different city name.</div>
          </div>
        )}

        {/* Selected confirmation */}
        {selected && (
          <div style={{ marginTop: 16, padding: '12px 16px', background: '#eff6ff', borderRadius: 8, borderLeft: '4px solid #2563eb', color: '#1e40af', fontSize: 14 }}>
            ✓ Selected: <strong>{selected.name}, {selected.country}</strong>
          </div>
        )}
      </div>
    </div>
  )
}
