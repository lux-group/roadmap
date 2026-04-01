// Themes for 2026 — white background, 3×2 grid
const THEMES = [
  { title: 'AI as an Efficiency Driver' },
  { title: 'Increase Supply & Improve Margin' },
  { title: 'Loyalty & Continued Engagement' },
  { title: 'Platform, AI Tools & Infrastructure for Scale' },
  { title: 'AI as an International Growth Driver' },
  { title: 'AI as a Growth Driver' },
]

const DESCRIPTION = 'Descriptions to be updated by content owners.'

export default function ThemesSection() {
  return (
    <section className="flex justify-center py-16 px-6 bg-white">
      <div className="w-full max-w-[1040px] flex flex-col gap-10">
        <h2 className="text-section text-dark" style={{ fontFamily: 'var(--font-heading)' }}>
          Themes for 2026
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {THEMES.map((theme, i) => (
            <div key={i} className="flex flex-col gap-5">
              {/* Image placeholder */}
              <div
                className="rounded-card shrink-0 w-full"
                style={{ height: '211px', background: '#e7e8ea' }}
              />
              {/* Text */}
              <div className="flex flex-col gap-2">
                <p
                  className="text-dark font-medium leading-7"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '24px' }}
                >
                  {theme.title}
                </p>
                <p
                  className="text-dark leading-5"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}
                >
                  {DESCRIPTION}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
