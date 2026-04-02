import productGroupsData from '../content/product-groups.json'

export const PRODUCT_GROUPS = productGroupsData.groups

export function getAllTeams() {
  return PRODUCT_GROUPS.flatMap(g => g.teams.map(t => ({ ...t, productGroup: g.label })))
}

export function getTeamBySlug(slug) {
  return getAllTeams().find(t => t.slug === slug)
}
