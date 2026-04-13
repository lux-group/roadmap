// Horizontal Gantt chart — dynamic month range derived from items
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function buildMonthRange(items) {
  let minYear, minMonth, maxYear, maxMonth
  items.forEach(item => {
    const s = new Date(item.start_date)
    const e = new Date(item.end_date)
    const sy = s.getFullYear(), sm = s.getMonth()
    const ey = e.getFullYear(), em = e.getMonth()
    if (minYear === undefined || sy < minYear || (sy === minYear && sm < minMonth)) {
      minYear = sy; minMonth = sm
    }
    if (maxYear === undefined || ey > maxYear || (ey === maxYear && em > maxMonth)) {
      maxYear = ey; maxMonth = em
    }
  })
  const months = []
  let y = minYear, m = minMonth
  while (y < maxYear || (y === maxYear && m <= maxMonth)) {
    months.push({ label: MONTH_NAMES[m], year: y, month: m })
    m++
    if (m === 12) { m = 0; y++ }
  }
  return months
}

function getPosition(months, dateStr) {
  const d = new Date(dateStr)
  const year = d.getFullYear()
  const month = d.getMonth()
  const idx = months.findIndex(mo => mo.year === year && mo.month === month)
  const clampedIdx = idx === -1 ? 0 : idx
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return clampedIdx + d.getDate() / daysInMonth
}

export default function GanttChart({ title, items }) {
  if (!items || items.length === 0) return null

  const months = buildMonthRange(items)
  const NUM_MONTHS = months.length

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
            {months.map(({ label }, i) => (
              <div
                key={i}
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
                {label}
              </div>
            ))}
          </div>

          {/* Initiative rows */}
          <div className="flex flex-col">
            {items.map((item, rowIdx) => {
              const startPos = getPosition(months, item.start_date)
              const endPos = getPosition(months, item.end_date)

              const leftPct = (startPos / NUM_MONTHS) * 100
              const rightPct = (endPos / NUM_MONTHS) * 100
              const widthPct = Math.min(Math.max(rightPct - leftPct, 100 / NUM_MONTHS), 100 - leftPct)

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
                    {months.map((_, i) => (
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
