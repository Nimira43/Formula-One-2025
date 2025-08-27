import { teamData } from './js/team-data.js'
import { financialPerformanceEngine, evaluateAllTeamsByRound } from './js/seasonFinancials.js'
import { generateSeasonPulse } from './js/seasonPulseChart.js'

console.log(financialPerformanceEngine(teamData[0], 12))
console.log(financialPerformanceEngine(teamData[1], 19))
console.log(evaluateAllTeamsByRound(23))
console.log(generateSeasonPulse())


teamData.forEach(team => {
  const result = financialPerformanceEngine(team, 15)
  console.log(`🏁 ${team.teamName} - R15 Score: ${result.performanceScore.toFixed(2)} | Budget Left: ${result.remainingBudget.toFixed(2)}`)
})

const roundResults = evaluateAllTeamsByRound(20)
roundResults.forEach(({ teamName, penaltyTriggered }) => {
  if (penaltyTriggered) console.warn(`⚠️ ${teamName} breached budget cap in Round 20`)
})

