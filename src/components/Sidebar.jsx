import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { PRODUCT_GROUPS } from '../data/teams'


function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="4" width="22" height="2" rx="1" fill="#363a45"/>
      <rect y="10" width="22" height="2" rx="1" fill="#363a45"/>
      <rect y="16" width="22" height="2" rx="1" fill="#363a45"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2" y1="2" x2="20" y2="20" stroke="#363a45" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="2" x2="2" y2="20" stroke="#363a45" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 15L12 9L18 15" stroke="#868993" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="#868993" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function NavContent({ onClose, hideLogo = false }) {
  const location = useLocation()

  const [expanded, setExpanded] = useState(() =>
    Object.fromEntries(PRODUCT_GROUPS.map(g => [g.id, false]))
  )
  const [archiveExpanded, setArchiveExpanded] = useState(false)

  function toggleSection(id) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <nav className="flex flex-col h-full bg-white">
      {/* Logo — hidden in mobile drawer since the top bar already shows it */}
      {!hideLogo && (
        <Link
          to="/"
          className="flex items-center px-8 py-7 shrink-0"
          style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
          onClick={onClose}
        >
          <img
            src="/roadmap/images/logos/Logo_Roadmap2026.png"
            alt="2026 Roadmap"
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>
      )}

      {/* Collapsible sections */}
      <div className="flex-1 overflow-y-auto" style={{ paddingTop: '8px' }}>
        {PRODUCT_GROUPS.map(group => {
          const isExpanded = expanded[group.id]
          return (
            <div
              key={group.id}
              style={{ borderBottom: '0.5px solid #d4d5d8' }}
            >
              {/* Section header — toggle button */}
              <button
                onClick={() => toggleSection(group.id)}
                className="flex items-center gap-2 w-full px-3 rounded-lg"
                style={{ height: '44px', paddingTop: 0, paddingBottom: 0 }}
              >
                <span
                  className="flex-1 text-left uppercase tracking-[0.7px]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#868993',
                    lineHeight: '14px',
                  }}
                >
                  {group.label}
                </span>
                {isExpanded ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* Team items */}
              {isExpanded && (
                <div className="pb-2">
                  {group.teams.map(team => {
                    const isActive = location.pathname === `/product/${team.slug}`
                    return (
                      <Link
                        key={team.slug}
                        to={`/product/${team.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-2 w-full px-3 rounded-lg transition-colors"
                        style={{
                          height: '40px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '12px',
                          fontWeight: 400,
                          color: '#363a45',
                          lineHeight: '16px',
                          backgroundColor: isActive ? '#f3f3f4' : undefined,
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = '#f3f3f4' }}
                        onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = '' }}
                      >
                        {team.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}

      </div>

      {/* Archive section — anchored to bottom */}
      <div style={{ borderTop: '0.5px solid #d4d5d8' }}>
        <button
          onClick={() => setArchiveExpanded(v => !v)}
          className="flex items-center gap-2 w-full px-3 rounded-lg"
          style={{ height: '44px', paddingTop: 0, paddingBottom: 0 }}
        >
          <span
            className="flex-1 text-left uppercase tracking-[0.7px]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              color: '#868993',
              lineHeight: '14px',
            }}
          >
            Archive
          </span>
          {archiveExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>

        {archiveExpanded && (
          <div className="pb-2">
            <a
              href="https://pic-visa-53969332.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full px-3 rounded-lg transition-colors"
              style={{
                height: '40px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 400,
                color: '#363a45',
                lineHeight: '16px',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f3f3f4' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '' }}
            >
              2025
            </a>
          </div>
        )}
      </div>

    </nav>
  )
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col sticky top-0 h-screen shrink-0 overflow-y-auto"
        style={{
          width: 'var(--sidebar-width)',
          borderRight: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <NavContent onClose={() => {}} />
      </aside>

      {/* Mobile/tablet top bar */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
      >
        <Link to="/">
          <img
            src="/roadmap/images/logos/Logo_Roadmap2026.png"
            alt="2026 Roadmap"
            style={{ height: '28px', width: 'auto' }}
          />
        </Link>
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
          className="p-1"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile/tablet drawer — logo hidden, nav items only */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="w-80 h-full bg-white overflow-y-auto shadow-xl"
            style={{ paddingTop: '57px' }}
          >
            <NavContent onClose={() => setMobileOpen(false)} hideLogo />
          </div>
          <div className="flex-1 bg-black/30" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  )
}
