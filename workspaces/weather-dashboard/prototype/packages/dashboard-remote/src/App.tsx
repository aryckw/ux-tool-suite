import React, { useState } from 'react'
import { mockWeather } from './data/mock-weather'

type ViewState = 'loading' | 'error' | 'empty' | 'success'

export default function App() {
  const [state, setState] = useState<ViewState>('success')
  const w = mockWeather

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      {/* State switcher for smoke testing */}
      <div style={{ background: '#e2e8f0', padding: '8px 24px', display: 'flex', gap: '8px', fontSize: '12px' }}>
        <span style={{ color: '#64748b', marginRight: 8 }}>State:</span>
        {(['loading', 'error', 'empty', 'success'] as ViewState[]).map(s => (
          <button key={s} onClick={() => setState(s)}
            style={{ padding: '2px 10px', borderRadius: 4, border: 'none', cursor: 'pointer',
                     background: state === s ? '#2563eb' : '#cbd5e1', color: state === s ? 'white' : '#334155' }}>
            {s}
          </button>
        ))}
      </div>

      {state === 'loading' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
          <div style={{ textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
            <div>Loading weather data...</div>
          </div>
        </div>
      )}

      {state === 'error' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
          <div style={{ textAlign: 'center', color: '#dc2626', padding: 24, background: '#fef2f2', borderRadius: 12 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Failed to load weather</div>
            <div style={{ color: '#64748b', fontSize: 14 }}>Check your connection and try again.</div>
            <button onClick={() => setState('success')}
              style={{ marginTop: 16, padding: '8px 20px', background: '#2563eb', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
              Retry
            </button>
          </div>
        </div>
      )}

      {state === 'empty' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
          <div style={{ textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontWeight: 600 }}>No location selected</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>Search for a city to see the forecast.</div>
          </div>
        </div>
      )}

      {state === 'success' && (
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 24px' }}>
          {/* Location header */}
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#0f172a', margin: 0 }}>
              {w.location.name}, {w.location.country}
            </h1>
            <p style={{ color: '#64748b', margin: '4px 0 0', fontSize: 14 }}>
              {w.location.lat.toFixed(4)}°N, {Math.abs(w.location.lon).toFixed(4)}°W
            </p>
          </div>

          {/* Current conditions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
            {/* Main temp card */}
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: 64, fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>{w.current.temp}°</div>
              <div style={{ color: '#64748b', marginTop: 8 }}>{w.current.condition}</div>
              <div style={{ color: '#94a3b8', fontSize: 14, marginTop: 4 }}>
                Feels like {w.current.feelsLike}° · H:{w.current.high}° L:{w.current.low}°
              </div>
            </div>
            {/* Stats card */}
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              {[
                { label: 'Humidity', value: `${w.current.humidity}%` },
                { label: 'Wind', value: `${w.current.windSpeed} mph` },
                { label: 'UV Index', value: String(w.current.uvIndex) },
              ].map(stat => (
                <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ color: '#64748b', fontSize: 14 }}>{stat.label}</span>
                  <span style={{ color: '#0f172a', fontWeight: 600 }}>{stat.value}</span>
                </div>
              ))}
            </div>
            {/* Chart placeholder card */}
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 32 }}>📊</div>
              <div style={{ fontSize: 14 }}>Precipitation chart</div>
              <div style={{ fontSize: 12, color: '#cbd5e1' }}>ChartPlaceholder</div>
            </div>
          </div>

          {/* Hourly forecast */}
          <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: 24 }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 600, color: '#0f172a' }}>Hourly Forecast</h2>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
              {w.hourly.map(h => (
                <div key={h.time} style={{ minWidth: 60, textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{h.time}</div>
                  <div style={{ fontSize: 14 }}>{h.condition === 'Sunny' ? '☀️' : h.condition === 'Clear' ? '🌙' : '⛅'}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', marginTop: 4 }}>{h.temp}°</div>
                </div>
              ))}
            </div>
          </div>

          {/* 7-day forecast */}
          <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 600, color: '#0f172a' }}>7-Day Forecast</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 12 }}>
              {w.daily.map(d => (
                <div key={d.day} style={{ textAlign: 'center', padding: '12px 8px', borderRadius: 8, background: '#f8fafc' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>{d.day}</div>
                  <div style={{ fontSize: 24, margin: '8px 0' }}>{d.emoji}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{d.high}°</div>
                  <div style={{ fontSize: 13, color: '#94a3b8' }}>{d.low}°</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
