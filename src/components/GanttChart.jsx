// Horizontal Gantt chart — 9 month columns (Jan–Sep 2026), initiative bars
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
const YEAR = 2026
const NUM_MONTHS = 9

// Palette for initiative bars (cycles by index)
const BAR_COLORS = [
  { bg: '#d4e8f0', text: '#1a4d63' },
  { bg: '#d4ead8', text: '#1a4d2a' },
  { bg: '#f0e2cc', text: '#5c3a10' },
  { bg: '#e2d4f0', text: '#3a1a5c' },
  { bg: '#f0d4d4', text: '#5c1a1a' },
  { bg: '#d4f0e8', text: '#1a5c3a' },
]

function monthIndex(dateStr) {
  // Returns 0-based month index clamped to 0..NUM_MONTHS-1
  const d = new Date(dateStr)
  const m = d.getFullYear() === YEAR ? d.getMonth() : d.getFullYear() < YEAR ? 0 : NUM_MONTHS - 1
  return Math.max(0, Math.min(NUM_MONTHS - 1, m))
}

function monthFraction(dateStr, isEnd) {
  // Returns fractional offset within a month (0..1)
  const d = new Date(dateStr)
  if (d.getFullYear() !== YEAR) return isEnd ? 1 : 0
  const days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  return d.getDate() / days
}

export default function GanttChart({ title, items }) {
  if (!items || items.length === 0) return null

  return (
    <section className="px-10 py-12" style={{ background: '#fff' }}>
      {title && (
        <h2
          className="text-section text-dark mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
      )}

      <div className="overflow-x-auto">
        <div style={{ minWidth: '600px' }}>
          {/* Month header row */}
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${NUM_MONTHS}, 1fr)` }}
          >
            {MONTHS.map((month, i) => (
              <div
                key={month}
                className="text-center py-2 text-xs font-semibold text-dark"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: i % 2 === 0 ? '#fff' : '#f9f9f9',
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                  borderRight: i < NUM_MONTHS - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
              >
                {month}
              </div>
            ))}
          </div>

          {/* Initiative rows */}
          <div className="flex flex-col gap-0">
            {items.slice(0, 6).map((item, rowIdx) => {
              const startCol = monthIndex(item.start_date)
              const endCol = monthIndex(item.end_date)
              const startFrac = monthFraction(item.start_date, false)
              const endFrac = monthFraction(item.end_date, true)

              const color = BAR_COLORS[rowIdx % BAR_COLORS.length]

              // Calculate left/right as percentages of total grid
              const totalCols = NUM_MONTHS
              const leftPct = ((startCol + startFrac) / totalCols) * 100
              const rightPct = ((endCol + endFrac) / totalCols) * 100
              const widthPct = Math.max(rightPct - leftPct, 100 / totalCols)

              return (
                <div
                  key={rowIdx}
                  className="relative"
                  style={{
                    height: '48px',
                    background: rowIdx % 2 === 0 ? '#fff' : '#fafafa',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Column backgrounds */}
                  <div
                    className="absolute inset-0 grid pointer-events-none"
                    style={{ gridTemplateColumns: `repeat(${NUM_MONTHS}, 1fr)` }}
                  >
                    {MONTHS.map((_, i) => (
                      <div
                        key={i}
                        style={{
                          background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)',
                          borderRight: i < NUM_MONTHS - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                        }}
                      />
                    ))}
                  </div>

                  {/* Initiative bar */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 flex items-center px-3 rounded-full overflow-hidden"
                    style={{
                      left: `${leftPct}%`,
                      width: `${widthPct}%`,
                      height: '32px',
                      background: color.bg,
                      minWidth: '60px',
                    }}
                  >
                    <span
                      className="text-xs font-medium truncate"
                      style={{ color: color.text, fontFamily: 'var(--font-body)' }}
                    >
                      {item.title}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
