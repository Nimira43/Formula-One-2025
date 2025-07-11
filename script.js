import { driverData } from './js/driver-data.js'
import { calendarData } from './js/calendar-data.js'
import { teamData } from './js/team-data.js'
import { financialPerformanceEngine } from './js/finance/seasonFinancials.js'
import { grandPrixPoints, sprintRacePoints, fastestLapPoint, tyreCompounds } from './js/utilities.js'

console.log(driverData)
console.log(calendarData)
console.log(teamData)
console.log(grandPrixPoints)
console.log(sprintRacePoints)
console.log(fastestLapPoint)
console.log(tyreCompounds)


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