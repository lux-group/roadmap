// Horizontal Gantt chart — 9 month columns (Jan–Sep 2026), initiative bars
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
const YEAR = 2026
const NUM_MONTHS = 9

function monthIndex(dateStr) {
  const d = new Date(dateStr)
  const m = d.getFullYear() === YEAR ? d.getMonth() : d.getFullYear() < YEAR ? 0 : NUM_MONTHS - 1
  return Math.max(0, Math.min(NUM_MONTHS - 1, m))
}

function monthFraction(dateStr, isEnd) {
  const d = new Date(dateStr)
  if (d.getFullYear() !== YEAR) return isEnd ? 1 : 0
  const days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  return d.getDate() / days
}

export default function GanttChart({ title, items }) {
  if (!items || items.length === 0) return null

  return (
    <section className="px-10" style={{ background: '#fff', paddingTop: '60px', paddingBottom: '60px' }}>
      {title && (
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '42px',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.42px',
            color: '#363a45',
            marginBottom: '48px',
          }}
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
                style={{
                  textAlign: 'center',
                  paddingTop: '24px',
                  paddingBottom: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#363a45',
                  borderRight: i < NUM_MONTHS - 1 ? '1px solid #d4d5d8' : 'none',
                }}
              >
                {month}
              </div>
            ))}
          </div>

          {/* Initiative rows */}
          <div className="flex flex-col">
            {items.slice(0, 6).map((item, rowIdx) => {
              const startCol = monthIndex(item.start_date)
              const endCol = monthIndex(item.end_date)
              const startFrac = monthFraction(item.start_date, false)
              const endFrac = monthFraction(item.end_date, true)

              const leftPct = ((startCol + startFrac) / NUM_MONTHS) * 100
              const rightPct = ((endCol + endFrac) / NUM_MONTHS) * 100
              const widthPct = Math.max(rightPct - leftPct, 100 / NUM_MONTHS)

              return (
                <div
                  key={rowIdx}
                  className="relative"
                  style={{ height: '47px' }}
                >
                  {/* Column borders */}
                  <div
                    className="absolute inset-0 grid pointer-events-none"
                    style={{ gridTemplateColumns: `repeat(${NUM_MONTHS}, 1fr)` }}
                  >
                    {MONTHS.map((_, i) => (
                      <div
                        key={i}
                        style={{
                          borderRight: i < NUM_MONTHS - 1 ? '1px solid #d4d5d8' : 'none',
                        }}
                      />
                    ))}
                  </div>

                  {/* Initiative pill */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 flex items-center overflow-hidden"
                    style={{
                      left: `${leftPct}%`,
                      width: `${widthPct}%`,
                      height: '40px',
                      background: '#caffeb',
                      borderRadius: '1000px',
                      paddingLeft: '14px',
                      paddingRight: '14px',
                      minWidth: '80px',
                    }}
                  >
                    <span
                      className="truncate"
                      style={{
                        color: '#001235',
                        fontSize: '12px',
                        fontWeight: 600,
                        fontFamily: 'var(--font-body)',
                        lineHeight: '16px',
                      }}
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
