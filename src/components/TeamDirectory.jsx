// Team Directory section on homepage — beige bg, product groups with team cards
import { Link } from 'react-router-dom'
import { PRODUCT_GROUPS } from '../data/teams'

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function TeamCard({ team }) {
  return (
    <Link
      to={`/product/${team.slug}`}
      className="flex items-center gap-3 bg-white rounded-card px-5 py-3 hover:shadow-md transition-shadow"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Circular photo placeholder */}
      <div
        className="rounded-full shrink-0 bg-[#e7e8ea]"
        style={{ width: '70px', height: '70px' }}
      />
      {/* Name */}
      <span
        className="flex-1 min-w-0 font-semibold text-dark text-sm leading-5"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {team.name}
      </span>
      {/* Arrow */}
      <span className="shrink-0 text-dark opacity-40">
        <ArrowRightIcon />
      </span>
    </Link>
  )
}

export default function TeamDirectory() {
  return (
    <section
      className="py-16 px-6"
      style={{ background: 'var(--color-beige)' }}
    >
      <div className="max-w-[1040px] mx-auto flex flex-col gap-16">
        {PRODUCT_GROUPS.map(group => (
          <div key={group.id} id={group.id} className="flex flex-col gap-6">
            <h2 className="text-section text-dark" style={{ fontFamily: 'var(--font-heading)' }}>
              {group.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {group.teams.map(team => (
                <TeamCard key={team.slug} team={team} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
