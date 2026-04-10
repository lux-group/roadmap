// Hero banner — full-width 424px tall with background image + centered white card
const MALDIVES_URL = 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&auto=format&fit=crop&q=80'

const WATCH_URL =
  'https://luxgroupau-my.sharepoint.com/:v:/r/personal/shay_hamama_luxuryescapes_com/Documents/Recordings/Product%20Roadmap%20Keynote%202026-20260410_150015-Meeting%20Recording.mp4?csf=1&web=1&e=SS6k1V&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4.5L16 10L6 15.5V4.5Z" fill="currentColor" />
    </svg>
  )
}

function LEWordmark() {
  return (
    <img
      src="/roadmap/images/logos/LE-Logo.png"
      alt="Luxury Escapes"
      style={{ height: '32px', width: 'auto' }}
    />
  )
}

export default function HeroBanner() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '424px' }}
    >
      {/* Background image */}
      <img
        src={MALDIVES_URL}
        alt="Luxury resort over turquoise water"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      {/* Subtle dark overlay to ensure card legibility */}
      <div className="absolute inset-0 bg-black/10" />

      {/* White card */}
      <div
        className="relative flex flex-col items-center gap-6 bg-white px-14 py-10 text-center"
        style={{
          borderRadius: '40px',
          boxShadow: '0px 4px 24px rgba(0,0,0,0.18)',
          minWidth: '340px',
        }}
      >
        <div className="flex flex-col items-center gap-5">
          <LEWordmark />
          <h1 className="text-hero text-dark" style={{ fontFamily: 'var(--font-heading)' }}>
            2026 Roadmap
          </h1>
        </div>

        {/* Watch presentation button */}
        <a
          href={WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full border text-dark transition-opacity hover:opacity-70"
          style={{
            borderColor: 'var(--color-dark)',
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        >
          <PlayIcon />
          Watch presentation
        </a>
      </div>
    </section>
  )
}
