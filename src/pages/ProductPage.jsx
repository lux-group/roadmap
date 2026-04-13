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
    const slug = path.split('/').pop().replace('.md', '')
    teams[slug] = { ...data, slug }
  }
  return teams
}

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
        className="relative bg-white px-14 py-10 text-center"
        style={{
          borderRadius: '40px',
          boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
          minWidth: '260px',
          maxWidth: '80%',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '42px',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.42px',
            color: '#363a45',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

function TeamSection({ members }) {
  if (!members || members.length === 0) return null
  return (
    <section className="px-10" style={{ background: '#f3f1ea', paddingTop: '60px', paddingBottom: '60px' }}>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '42px',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.42px',
          color: '#363a45',
          marginBottom: '24px',
        }}
      >
        Meet the team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
        {members.filter(member => member.photo).map((member, i) => (
          <div
            key={i}
            className="flex items-center bg-white"
            style={{
              gap: '12px',
              borderRadius: '8px',
              padding: '12px',
            }}
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="shrink-0 object-cover object-top"
                style={{ width: '48px', height: '48px', borderRadius: '8px' }}
              />
            ) : (
              <div
                className="shrink-0 bg-[#e7e8ea]"
                style={{ width: '48px', height: '48px', borderRadius: '8px' }}
              />
            )}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '24px',
                  color: '#000',
                }}
              >
                {member.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(0,0,0,0.55)',
                }}
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
    <section className="px-10" style={{ background: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '42px',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.42px',
          color: '#363a45',
          marginBottom: '40px',
        }}
      >
        {sectionTitle || 'Goals'}
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ columnGap: '32px', rowGap: '32px' }}
      >
        {goals.map((goal, i) => (
          <GoalCard key={i} goal={goal} />
        ))}
      </div>
    </section>
  )
}

function InitiativesSection({ initiatives }) {
  if (!initiatives || initiatives.length === 0) return null
  return (
    <section style={{ background: '#fff' }}>
      {initiatives.map((initiative, i) => (
        <div
          key={i}
          className="px-8"
          style={{
            paddingTop: '56px',
            paddingBottom: '56px',
            borderTop: '1px solid rgba(0,0,0,0.07)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start" style={{ gap: '32px' }}>
            {/* Left: label + heading */}
            <div className="flex-1 md:max-w-[50%]">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 600,
                  lineHeight: '22px',
                  color: '#b7410e',
                  marginBottom: '4px',
                }}
              >
                Key Initiative {i + 1}
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '42px',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.42px',
                  color: '#363a45',
                }}
              >
                {initiative.heading}
              </h2>
            </div>
            {/* Right: description */}
            <div className="flex-1">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#505460',
                }}
              >
                {initiative.description}
              </p>
            </div>
          </div>
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
      <ProductHero title={team.title} heroImage={team.hero_image} />

      <TeamSection members={team.team_members} />

      {team.gantt_items && team.gantt_items.length > 0 && (
        <GanttChart title={team.gantt_section_title} items={team.gantt_items} />
      )}

      <GoalsSection sectionTitle={team.goals_section_title} goals={team.goals} />

      <InitiativesSection initiatives={team.key_initiatives} />
    </div>
  )
}
