import { teamData } from './team-data.js'
import { financialPerformanceEngine } from './seasonFinancials.js'

// Generates performance scores for each team across the full season
export function generateSeasonPulse() {
  const seasonPulse = teamData.map(team => {
    const performanceTimeline = []

    for (let round = 1; round <= 24; round++) {
      const result = financialPerformanceEngine(team, round)
      performanceTimeline.push(result.performanceScore)
    }

    return {
      teamName: team.teamName,
      performanceTimeline // Array of 24 scores
    }
  })

  return seasonPulse
}
