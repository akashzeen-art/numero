import { useEffect, useState, useCallback } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import ClickTable from '../components/ClickTable'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'
const REFRESH_INTERVAL = 30000

export default function Dashboard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [countdown, setCountdown] = useState(30)

  const fetchData = useCallback(() => {
    setLoading(true)
    fetch(`${API_BASE}/api/clicks/hourly`)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then(d => { setData(d); setError(null); setLastUpdated(new Date()); setCountdown(30) })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [fetchData])

  // countdown timer
  useEffect(() => {
    const t = setInterval(() => setCountdown(c => (c <= 1 ? 30 : c - 1)), 1000)
    return () => clearInterval(t)
  }, [lastUpdated])

  const total = data.reduce((s, r) => s + r.count, 0)
  const peakHour = data.reduce((best, r) => r.count > (best?.count ?? -1) ? r : best, null)

  return (
    <div style={{ minHeight: '100vh', background: '#FAF5FF', fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: '#1e1b4b', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: '#fff', margin: 0, fontSize: 20, fontWeight: 700 }}>Numero Info — Click Tracker</h1>
          <p style={{ color: 'rgba(199,210,254,0.6)', margin: '4px 0 0', fontSize: 13 }}>disaster-recovery-services</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {lastUpdated && (
            <span style={{ color: 'rgba(199,210,254,0.6)', fontSize: 12 }}>
              Updated {lastUpdated.toLocaleTimeString()} · refresh in {countdown}s
            </span>
          )}
          <button onClick={fetchData} style={{ background: '#9333ea', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
            ↻ Refresh
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>
        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }}>
          {[
            { label: 'Total Clicks Today', value: total, color: '#7e22ce' },
            { label: 'Peak Hour', value: peakHour ? peakHour.hourRange : '—', color: '#db2777' },
            { label: 'Peak Count', value: peakHour ? peakHour.count : 0, color: '#4338ca' },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ background: '#fff', borderRadius: 16, padding: '24px 28px', boxShadow: '0 4px 20px rgba(91,33,182,0.07)', borderTop: `4px solid ${color}` }}>
              <div style={{ fontSize: 32, fontWeight: 700, color }}>{value}</div>
              <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 12, padding: '16px 20px', color: '#dc2626', marginBottom: 24, fontSize: 14 }}>
            ⚠ Failed to load data: {error}. Is the backend running on {API_BASE}?
          </div>
        )}

        {/* Bar Chart */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '28px 24px', boxShadow: '0 4px 20px rgba(91,33,182,0.07)', marginBottom: 28 }}>
          <h2 style={{ margin: '0 0 24px', fontSize: 16, fontWeight: 700, color: '#1e1b4b' }}>Hourly Click Distribution</h2>
          {loading ? (
            <div style={{ height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>Loading...</div>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3e8ff" />
                <XAxis dataKey="hourRange" tick={{ fontSize: 11, fill: '#6b7280' }} interval={1} />
                <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 10, border: '1px solid #e9d5ff', fontSize: 13 }}
                  formatter={v => [v, 'Clicks']}
                />
                <Bar dataKey="count" fill="#9333ea" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Table */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 20px rgba(91,33,182,0.07)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #f3e8ff' }}>
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1e1b4b' }}>Hour-wise Breakdown</h2>
          </div>
          {loading ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
          ) : (
            <ClickTable data={data} />
          )}
        </div>
      </div>
    </div>
  )
}
