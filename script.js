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

McLaren           [91, 91, 90, 90, 90, 89, 89, 89, 88, 88, 87, 87, 87, 86, 86, 86, 85, 85, 85, 84, 84, 84, 83, 83]
Red Bull          [88, 88, 87, 87, 86, 86, 85, 85, 84, 84, 83, 83, 82, 82, 82, 81, 81, 80, 80, 79, 79, 78, 78, 77]
Mercedes          [85, 84, 84, 83, 83, 82, 82, 81, 81, 80, 79, 79, 78, 78, 77, 77, 76, 76, 75, 74, 74, 73, 73, 72]
Ferrari           [80, 79, 79, 78, 77, 77, 76, 75, 74, 74, 73, 72, 72, 71, 70, 70, 69, 68, 67, 67, 66, 65, 65, 64]   
Williams          [82, 81, 81, 80, 79, 79, 78, 78, 77, 76, 76, 75, 74, 74, 73, 72, 72, 71, 70, 70, 69, 69, 68, 67]
Aston Martin      [79, 78, 78, 77, 76, 75, 75, 74, 73, 73, 72, 71, 70, 70, 69, 68, 67, 67, 66, 65, 65, 64, 63, 62]
Alpine            [77, 76, 75, 75, 74, 73, 72, 72, 71, 70, 69, 69, 68, 67, 66, 65, 65, 64, 63, 62, 62, 61, 60, 59]
Haas              [75, 74, 73, 73, 72, 71, 70, 69, 68, 68, 67, 66, 65, 64, 64, 63, 62, 61, 60, 60, 59, 58, 57, 56]
Sauber            [76, 75, 74, 74, 73, 72, 71, 70, 70, 69, 68, 67, 66, 66, 65, 64, 63, 63, 62, 61, 60, 59, 59, 58]     
Racing Bulls      [74, 73, 72, 71, 71, 70, 69, 68, 67, 66, 66, 65, 64, 63, 62, 61, 61, 60, 59, 58, 57, 56, 56, 55] 

Performance simulation over the season taking into account - finance, fatigue, development

McLaren: Consistent high-level execution, barely flinching under fatigue. That 91 → 83 curve screams championship contenders built on precision and polish.

Red Bull: Aggressive spend, high return — but visible fatigue from Round 16 onward. They sprint, but don’t stroll.

Mercedes: A stable fade. No surprises, just reliability slowly eroded by wear.

Ferrari: The prancing horse gradually becomes a trotting mare. Budget discipline didn’t hold up.

Williams & Sauber: Midfield rhythm with budget headroom — they’re the stealth strategists.

Alpine & Aston: Operational fragility. They're not collapsing, but they’re certainly not climbing.

Haas & Racing Bulls: Survivalists. The curves suggest low-risk, low-reward consistency — the kind of form that earns points by showing up.

*/