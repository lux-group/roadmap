export const PRODUCT_GROUPS = [
  {
    id: 'growth',
    label: 'Growth & Customer Lifecycle',
    teams: [
      { name: 'Acquisition & Performance Marketing', slug: 'acquisition-performance-marketing' },
      { name: 'Customer Lifecycle', slug: 'customer-lifecycle' },
      { name: 'Extranet (Partner Central)', slug: 'extranet-partner-central' },
    ],
  },
  {
    id: 'online-cx',
    label: 'Online CX',
    teams: [
      { name: 'Engagement & Conversion', slug: 'engagement-conversion' },
      { name: 'Trip Planner', slug: 'trip-planner' },
      { name: 'LERE', slug: 'lere' },
      { name: 'Loyalty', slug: 'loyalty' },
      { name: 'Localisation', slug: 'localisation' },
      { name: 'Business Traveller', slug: 'business-traveller' },
      { name: 'Customer Payments', slug: 'customer-payments' },
      { name: 'On-Site Search', slug: 'on-site-search' },
      { name: 'Mobile App', slug: 'mobile-app' },
    ],
  },
  {
    id: 'supply',
    label: 'Supply',
    teams: [
      { name: 'Accommodation', slug: 'accommodation' },
      { name: 'Tours', slug: 'tours' },
      { name: 'Cruises', slug: 'cruises' },
      { name: 'Flights', slug: 'flights' },
      { name: 'Experiences', slug: 'experiences' },
      { name: 'Ancillaries', slug: 'ancillaries' },
      { name: 'Commercial Ops / Extranet', slug: 'commercial-ops-extranet' },
      { name: 'Special Projects', slug: 'special-projects' },
    ],
  },
  {
    id: 'distribution',
    label: 'Distribution & Partnerships',
    teams: [
      { name: 'Agent Hub', slug: 'agent-hub' },
      { name: 'White Labels', slug: 'white-labels' },
      { name: 'Distribution APIs', slug: 'distribution-apis' },
    ],
  },
  {
    id: 'csx',
    label: 'Customer Service & Sales Experience (CSX)',
    teams: [
      { name: 'Self Service', slug: 'self-service' },
      { name: 'Voice AI', slug: 'voice-ai' },
      { name: 'Agent Experience', slug: 'agent-experience' },
    ],
  },
  {
    id: 'commercial-platforms',
    label: 'Commercial Platforms',
    teams: [
      { name: 'Extranet (Partner Central)', slug: 'commercial-platforms-extranet' },
    ],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    teams: [
      { name: 'Data & Finance', slug: 'data-finance' },
    ],
  },
  {
    id: 'engx',
    label: 'Engineering Excellency & Infrastructure',
    teams: [
      { name: 'EngX', slug: 'engx' },
    ],
  },
]

export function getAllTeams() {
  return PRODUCT_GROUPS.flatMap(g => g.teams.map(t => ({ ...t, productGroup: g.label })))
}

export function getTeamBySlug(slug) {
  return getAllTeams().find(t => t.slug === slug)
}
