import { useParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
import matter from 'gray-matter'
import GanttChart from '../components/GanttChart'
import GoalCard from '../components/GoalCard'

// Load all team markdown files at build time
const RAW_FILES = import.meta.glob('../content/teams/*.md', { query: '?raw', import: 'default', eager: true })

function parseTeams() {
  const teams = {}
  for (const [path, raw] of Object.entries(RAW_FILES)) {
    const { data } = matter(raw)
    if (data.slug) {
      teams[data.slug] = data
    }
  }
  return teams
}

// Placeholder hero image (Namibia landscape)
const HERO_PLACEHOLDER = 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&auto=format&fit=crop&q=80'

function ProductHero({ title, heroImage }) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '248px' }}
    >
      <img
        src={heroImage || HERO_PLACEHOLDER}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div
        className="relative bg-white px-12 py-7 text-center"
        style={{ borderRadius: '24px', boxShadow: '0px 4px 24px rgba(0,0,0,0.16)', minWidth: '260px', maxWidth: '80%' }}
      >
        <h1
          className="text-dark"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', lineHeight: '1.1', letterSpacing: '-0.4px' }}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

function TeamSection({ sectionTitle, members }) {
  if (!members || members.length === 0) return null
  return (
    <section className="px-10 py-12 bg-white" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
      <h2
        className="text-dark font-semibold text-2xl mb-6"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {sectionTitle || 'Team'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {members.map((member, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white rounded-card px-4 py-2"
            style={{ boxShadow: 'var(--shadow-card)', minHeight: '72px' }}
          >
            <div
              className="rounded-full shrink-0 bg-[#e7e8ea]"
              style={{ width: '48px', height: '48px' }}
            />
            <div>
              <p
                className="font-semibold text-dark text-sm leading-5"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {member.name}
              </p>
              <p
                className="text-xs opacity-60 text-dark leading-4 mt-0.5"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {member.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function GoalsSection({ sectionTitle, goals }) {
  if (!goals || goals.length === 0) return null
  return (
    <section className="px-10 py-12 bg-white" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
      <h2
        className="text-section text-dark mb-8"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {sectionTitle || 'Goals'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {goals.slice(0, 8).map((goal, i) => (
          <GoalCard key={i} goal={goal} />
        ))}
      </div>
    </section>
  )
}

function InitiativesSection({ sectionTitle, initiatives }) {
  if (!initiatives || initiatives.length === 0) return null
  return (
    <section className="flex flex-col" style={{ background: '#fff' }}>
      {initiatives.slice(0, 3).map((initiative, i) => (
        <div
          key={i}
          className="px-10 py-10"
          style={{ borderTop: i > 0 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}
        >
          {i === 0 && sectionTitle && (
            <h2
              className="text-section text-dark mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {sectionTitle}
            </h2>
          )}
          <h3
            className="text-dark font-medium mb-4"
            style={{ fontFamily: 'var(--font-body)', fontSize: '24px', lineHeight: '1.3' }}
          >
            {initiative.heading}
          </h3>
          <p
            className="text-dark leading-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)', fontSize: '15px' }}
          >
            {initiative.description}
          </p>
        </div>
      ))}
    </section>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const teams = useMemo(() => parseTeams(), [])
  const team = teams[slug]

  if (!team) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center">
        <h1
          className="text-section text-dark"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Team not found
        </h1>
        <p
          className="text-dark opacity-60 text-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          No content file exists yet for <code>{slug}</code>.
        </p>
        <Link
          to="/"
          className="mt-4 text-dark underline text-sm hover:opacity-60 transition-opacity"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-beige)' }}>
      {/* Hero */}
      <ProductHero title={team.title} heroImage={team.hero_image} />

      {/* Product group label */}
      <div
        className="px-10 py-4 bg-white"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
      >
        <p
          className="text-dark opacity-50 text-xs font-semibold uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}
        >
          {team.product_group}
        </p>
      </div>

      {/* Team members */}
      <TeamSection members={team.team_members} />

      {/* Gantt */}
      {team.gantt_items && team.gantt_items.length > 0 && (
        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <GanttChart title={team.gantt_section_title} items={team.gantt_items} />
        </div>
      )}

      {/* Goals */}
      <GoalsSection sectionTitle={team.goals_section_title} goals={team.goals} />

      {/* Key initiatives */}
      <InitiativesSection
        sectionTitle={team.initiatives_section_title}
        initiatives={team.key_initiatives}
      />
    </div>
  )
}
