import { drivers } from './data/driver-data.js'

export function renderSim2(driverId) {
  const driver = drivers.find(d => d.id === driverId)
  const panel = document.getElementById('sim2-panel')
  panel.innerHTML = `
    <h3>${driver.firstname} ${driver.driver}</h3>
    <p>Team: ${driver.team}</p>
    <p>Skill: ${driver.coreSkill}</p>
    <p>Experience: ${driver.coreExperience}</p>
    <p>Wet Weather: ${driver.wetWeather}</p>
    <p>Tyre Management: ${driver.tyreManagement}</p>
    <p>Reliability: ${driver.reliability}</p>
  `
}
