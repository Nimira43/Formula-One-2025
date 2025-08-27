import { teamData } from './js/team-data.js'
import { financialPerformanceEngine, evaluateAllTeamsByRound } from './js/seasonFinancials.js'
import { generateSeasonPulse } from './js/seasonPulseChart.js'

console.log(financialPerformanceEngine(teamData[0], 12))
console.log(financialPerformanceEngine(teamData[1], 19))
console.log(evaluateAllTeamsByRound(23))
console.log(generateSeasonPulse())
