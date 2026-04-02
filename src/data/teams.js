export const PRODUCT_GROUPS = [
  {
    id: 'growth',
    label: 'Growth & Customer Lifecycle',
    teams: [
      { name: 'Acquisition & Performance Marketing', slug: 'acquisition-performance-marketing', icon: 'Acquisition & Performance Marketing.png' },
      { name: 'Customer Lifecycle', slug: 'customer-lifecycle', icon: 'Customer Lifecycle.png' },
      { name: 'Extranet (Partner Central)', slug: 'extranet-partner-central', icon: 'Extranet (Partner Central).png' },
    ],
  },
  {
    id: 'online-cx',
    label: 'Online CX',
    teams: [
      { name: 'Engagement & Conversion', slug: 'engagement-conversion', icon: 'Engagement & Conversion.png' },
      { name: 'Trip Planner', slug: 'trip-planner', icon: 'Trip Planner.png' },
      { name: 'LERE', slug: 'lere', icon: 'LERE.png' },
      { name: 'Loyalty', slug: 'loyalty', icon: 'Loyalty.png' },
      { name: 'Localisation', slug: 'localisation', icon: 'Localisation.png' },
      { name: 'Business Traveller', slug: 'business-traveller', icon: 'Business Traveller.png' },
      { name: 'Customer Payments', slug: 'customer-payments', icon: 'Customer Payments.png' },
      { name: 'On-Site Search', slug: 'on-site-search', icon: 'On-Site Search.png' },
      { name: 'Mobile App', slug: 'mobile-app', icon: 'Mobile App.png' },
    ],
  },
  {
    id: 'supply',
    label: 'Supply',
    teams: [
      { name: 'Accommodation', slug: 'accommodation', icon: 'Accommodation.png' },
      { name: 'Tours', slug: 'tours', icon: 'Tours.png' },
      { name: 'Cruises', slug: 'cruises', icon: 'Cruises.png' },
      { name: 'Flights', slug: 'flights', icon: 'Flights.png' },
      { name: 'Experiences', slug: 'experiences', icon: 'Experiences.png' },
      { name: 'Ancillaries', slug: 'ancillaries', icon: 'Ancillaries.png' },
      { name: 'Commercial Ops / Extranet', slug: 'commercial-ops-extranet', icon: 'Extranet.png' },
      { name: 'Special Projects', slug: 'special-projects', icon: 'Special Projects.png' },
    ],
  },
  {
    id: 'distribution',
    label: 'Distribution & Partnerships',
    teams: [
      { name: 'Agent Hub', slug: 'agent-hub', icon: 'Agent Hub.png' },
      { name: 'White Labels', slug: 'white-labels', icon: 'White Labels.png' },
      { name: 'Distribution APIs', slug: 'distribution-apis', icon: 'Distribution APIs.png' },
    ],
  },
  {
    id: 'csx',
    label: 'Customer Service & Sales Experience',
    teams: [
      { name: 'Self Service', slug: 'self-service', icon: 'Self Service.png' },
      { name: 'Voice AI', slug: 'voice-ai', icon: 'Voice AI.png' },
      { name: 'Agent Experience', slug: 'agent-experience', icon: 'Agent Experience.png' },
    ],
  },
  {
    id: 'commercial-platforms',
    label: 'Commercial Platforms',
    teams: [
      { name: 'Extranet (Partner Central)', slug: 'commercial-platforms-extranet', icon: 'Extranet (Partner Central).png' },
    ],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    teams: [
      { name: 'Data & Finance', slug: 'data-finance', icon: 'Data & Finance.png' },
    ],
  },
  {
    id: 'engx',
    label: 'Engineering Excellency & Infrastructure',
    teams: [
      { name: 'EngX', slug: 'engx', icon: 'EngX.png' },
    ],
  },
]

export function getAllTeams() {
  return PRODUCT_GROUPS.flatMap(g => g.teams.map(t => ({ ...t, productGroup: g.label })))
}

export function getTeamBySlug(slug) {
  return getAllTeams().find(t => t.slug === slug)
}
