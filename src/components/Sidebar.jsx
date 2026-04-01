import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { PRODUCT_GROUPS } from '../data/teams'

// Luxury Escapes circular mark (inline SVG)
function LELogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Luxury Escapes">
      <circle cx="16" cy="16" r="16" fill="#363a45"/>
      <text x="16" y="20" textAnchor="middle" fill="white" fontSize="10" fontFamily="'Suisse Intl', sans-serif" fontWeight="700" letterSpacing="0.5">LE</text>
    </svg>
  )
}

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

export default function Sidebar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  function navHref(group) {
    if (isHome) return `#${group.id}`
    return `/#${group.id}`
  }

  const navContent = (
    <nav
      className="flex flex-col h-full bg-white"
      style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-2 px-8 py-7 shrink-0"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
      >
        <LELogo />
        <span
          className="text-dark font-body font-semibold text-base leading-6 whitespace-nowrap"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          2026 Roadmap
        </span>
      </div>

      {/* Nav links */}
      <div className="flex flex-col gap-4 px-8 pt-6 pb-8" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        {PRODUCT_GROUPS.map(group => (
          <a
            key={group.id}
            href={navHref(group)}
            onClick={() => setMobileOpen(false)}
            className="text-dark font-semibold leading-4 hover:opacity-60 transition-opacity"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--color-dark)',
            }}
          >
            {group.label}
          </a>
        ))}
      </div>

      {/* Directory link */}
      <div className="px-8 pt-5">
        <Link
          to="/directory"
          onClick={() => setMobileOpen(false)}
          className="text-dark font-semibold hover:opacity-60 transition-opacity"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--color-dark)',
          }}
        >
          Full Directory →
        </Link>
      </div>
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col sticky top-0 h-screen shrink-0 overflow-y-auto"
        style={{ width: 'var(--sidebar-width)' }}
      >
        {navContent}
      </aside>

      {/* Mobile top bar */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
      >
        <div className="flex items-center gap-2">
          <LELogo />
          <span
            className="font-semibold text-dark text-base"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            2026 Roadmap
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
          className="p-1"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="w-64 h-full bg-white overflow-y-auto pt-16 shadow-xl"
            style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }}
          >
            {/* Nav links */}
            <div className="flex flex-col gap-4 px-8 pt-6 pb-8" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
              {PRODUCT_GROUPS.map(group => (
                <a
                  key={group.id}
                  href={navHref(group)}
                  onClick={() => setMobileOpen(false)}
                  className="text-dark font-semibold hover:opacity-60 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-dark)' }}
                >
                  {group.label}
                </a>
              ))}
            </div>
            <div className="px-8 pt-5">
              <Link
                to="/directory"
                onClick={() => setMobileOpen(false)}
                className="text-dark font-semibold hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-dark)' }}
              >
                Full Directory →
              </Link>
            </div>
          </div>
          {/* Backdrop */}
          <div className="flex-1 bg-black/30" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  )
}
