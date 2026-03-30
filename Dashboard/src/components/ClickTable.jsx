export default function ClickTable({ data }) {
  const total = data.reduce((s, r) => s + r.count, 0)
  const max = Math.max(...data.map(r => r.count), 1)

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#1e1b4b', color: '#fff' }}>
            <th style={th}>Hour Range</th>
            <th style={{ ...th, textAlign: 'right' }}>Clicks</th>
            <th style={th}>Distribution</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.hourRange} style={{ background: i % 2 === 0 ? '#faf5ff' : '#fff', borderBottom: '1px solid #f3e8ff' }}>
              <td style={td}>{row.hourRange}</td>
              <td style={{ ...td, textAlign: 'right', fontWeight: 700, color: '#7e22ce' }}>{row.count}</td>
              <td style={{ ...td, width: '45%' }}>
                <div style={{ background: '#f3e8ff', borderRadius: 9999, height: 8, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 9999, background: row.count > 0 ? '#9333ea' : 'transparent', width: `${(row.count / max) * 100}%`, transition: 'width 0.4s ease' }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ background: '#1e1b4b', color: '#fff', fontWeight: 700 }}>
            <td style={td}>Total</td>
            <td style={{ ...td, textAlign: 'right' }}>{total}</td>
            <td style={td} />
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const th = { padding: '12px 20px', textAlign: 'left', fontWeight: 600, fontSize: 13 }
const td = { padding: '10px 20px' }
