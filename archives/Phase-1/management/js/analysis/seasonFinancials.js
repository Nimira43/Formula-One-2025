import { teamData } from '../team-data.js'

export function financialPerformanceEngine(team, currentRound = 1) {
  const {
    budgetCapAdjusted,
    budgetUsage,
    budgetPenaltyRisk,
    budgetEfficiency
  } = team

  const spent = budgetCapAdjusted * budgetUsage
  const remainingBudget = budgetCapAdjusted - spent

  const fatigueFactor = (currentRound - 1) / 23
  const penaltyTriggered = Math.random() < budgetPenaltyRisk * fatigueFactor

  const efficiencyMod = budgetEfficiency / 100
  const strainMod = 1 - (fatigueFactor * (1 - efficiencyMod))
  const performanceScore = Math.round(efficiencyMod * strainMod * 100)

  return {
    teamName: team.teamName,
    performanceScore,
    penaltyTriggered,
    remainingBudget: Math.round(remainingBudget)
  }
}

export function evaluateAllTeamsByRound(currentRound = 1) {
  return teamData.map(team => financialPerformanceEngine(team, currentRound))
}
