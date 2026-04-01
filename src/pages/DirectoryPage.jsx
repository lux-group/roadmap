import { Link } from 'react-router-dom'
import { PRODUCT_GROUPS } from '../data/teams'

export default function DirectoryPage() {
  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{ background: 'var(--color-beige)' }}
    >
      <div className="max-w-[800px] mx-auto">
        <h1
          className="text-section text-dark mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Team Directory
        </h1>

        <div className="flex flex-col gap-10">
          {PRODUCT_GROUPS.map(group => (
            <div key={group.id} id={group.id}>
              <h2
                className="text-dark font-semibold text-sm mb-3 uppercase tracking-widest opacity-60"
                style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}
              >
                {group.label}
              </h2>
              <div
                className="bg-white rounded-card overflow-hidden"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                {group.teams.map((team, idx) => (
                  <Link
                    key={team.slug}
                    to={`/product/${team.slug}`}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#f9f8f5] transition-colors text-dark"
                    style={{
                      borderTop: idx > 0 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <span className="text-sm font-medium">{team.name}</span>
                    <span className="text-dark opacity-40 text-base">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
