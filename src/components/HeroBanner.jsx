// Hero banner — full-width 424px tall with background image + centered white card
const MALDIVES_URL = 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&auto=format&fit=crop&q=80'

const WATCH_URL =
  'https://teams.microsoft.com/l/meetingrecap?driveId=b%21NHCtb_L8GUyVFTK7RLwbxen5Qbe7qyJMqlTRzn94hJMyd7qowttVS5RADaJo2YDs&driveItemId=01EQM64KBTFTJAZ7D2QFBIP4BJMKNPRVCO&sitePath=https%3A%2F%2Fluxgroupau-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fshay_hamama_luxuryescapes_com%2FETMs0gz8eoFCh_ApYpr41E4BGphNrKri4VBfzD_-vLRQRA&fileUrl=https%3A%2F%2Fluxgroupau-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fshay_hamama_luxuryescapes_com%2FETMs0gz8eoFCh_ApYpr41E4BGphNrKri4VBfzD_-vLRQRA&iCalUid=040000008200E00074C5B7101A82E00800000000138099A628E6DB01000000000000000010000000C948F8AABD48D344B97F5ED9AB987454&threadId=19%3Ameeting_M2E5OGU5M2MtNzdkZi00NWQyLTgzNzktMzVlOTc5ODYyOWQ5%40thread.v2&organizerId=7139c6a6-c124-4664-9000-a5b3be0a4bcc&tenantId=af01c23e-549d-4b2e-9ea4-4cf15e7040ca&callId=7b1b2342-37cf-4386-b0f9-d2fd0d19f55d&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapChiclet'

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4.5L16 10L6 15.5V4.5Z" fill="currentColor" />
    </svg>
  )
}

function LEWordmark() {
  return (
    <div className="flex items-center gap-2">
      {/* Circular mark */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#363a45"/>
        <text x="14" y="18" textAnchor="middle" fill="white" fontSize="9" fontFamily="'Suisse Intl', sans-serif" fontWeight="700" letterSpacing="0.5">LE</text>
      </svg>
      <span
        className="font-semibold text-dark tracking-widest text-sm"
        style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
      >
        Luxury Escapes
      </span>
    </div>
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
