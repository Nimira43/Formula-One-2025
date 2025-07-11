import { driverData } from './js/driver-data.js'
import { calendarData } from './js/calendar-data.js'
import { teamData } from './js/team-data.js'
import { evaluateAllTeamsByRound, financialPerformanceEngine } from './js/analysis/seasonFinancials.js'
import { generateSeasonPulse } from './js/analysis/seasonPulseChart.js'
import { grandPrixPoints, sprintRacePoints, fastestLapPoint, tyreCompounds } from './js/utilities.js'

console.log(driverData)
console.log(calendarData)
console.log(teamData)
console.log(grandPrixPoints)
console.log(sprintRacePoints)
console.log(fastestLapPoint)
console.log(tyreCompounds)



// McLaren at Round 12
console.log(financialPerformanceEngine(teamData[0], 12))
/*
{teamName: 'McLaren', performanceScore: 87, penaltyTriggered: false, remainingBudget: 7}
penaltyTriggered : false
performanceScore : 87
remainingBudget : 7
teamName : "McLaren"

Performance Score: 87
This means McLaren are still operating near their peak efficiency despite mid-season fatigue.
Their high budgetEfficiency (91) and solid techUpgradeRate (89) are keeping performance smooth.
The formula factors in how well they're converting money into race-day output — and McLaren’s doing it well.
Remaining Budget: $7M
With only $7M left from their $165M cap, they’ve spent 96% — aggressive but not reckless.
This suggests most major upgrades or developments are already in play.
You can simulate tight strategy choices from here — maybe one final upgrade, or resource-saving tactics in later rounds.
*/



// Red Bull at Round 19
console.log(financialPerformanceEngine(teamData[1], 19))
/* 
Team: Red Bull
Round: 19 of 24
Performance Score: 80
Remaining Budget: $2M
Penalty Triggered: false
What It Means
Performance Score of 80: That’s a drop from their early-season highs — they’re still elite, but the wear and tear is starting to bite. Fatigue + near-maxed budget + slightly lower efficiency (88) all factor in. They’re operating at ~80% of their optimal budget-to-performance output.
Remaining Budget $2M: Practically fumes. They've spent 99% of their cap — likely completed their final upgrade phase. From here, it's resource management mode: preserving parts, limiting damage, and hoping nothing implodes under stress.
Penalty Triggered = false: Lucky break. With a budgetPenaltyRisk of 0.03 and high budgetUsage, Round 19 was a dicey moment. No aero restrictions, no fines — Red Bull keep full access to tools and talent.
*/



console.log(evaluateAllTeamsByRound(23))
/*
Round 23
Team	            Performance Score	  Remaining Budget (M)	  Penalty Triggered
McLaren	          83	                7	                      False
Red Bull	        78	                2	                      False
Mercedes	        73	                5	                      False
Ferrari	          65	                3	                      False
Williams	        68	                15	                    False
Aston Martin	    63	                10	                    False
Alpine	          60	                12	                    False
Haas	            57	                18	                    False
Sauber	          59	                17                      False
Racing Bulls	    56	                13	                    False
*/



console.log(generateSeasonPulse())
/*
Season Performance








*/