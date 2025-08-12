export function calculateWetRaceSkillFromDriver(driver) {
  const skillWeight = 0.5
  const experienceWeight = 0.3
  const wetModWeight = 0.2

  return Math.round(
    driver.coreSkill * skillWeight +
    driver.coreExperience * experienceWeight +
    driver.wetWeather * wetModWeight
  )
}
