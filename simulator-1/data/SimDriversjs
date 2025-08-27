export const enrichedDrivers = driverData.map(driver => {
  const visual = drivers.find(d => parseInt(d.car) === driver.carNumber);
  
  return {
    id: driver.id,
    name: `${driver.firstname} ${driver.lastname}`,
    shortName: driver.shortName,
    carNumber: driver.carNumber,
    team: driver.team,
    nationality: driver.nationality,
    stats: {
      skill: driver.coreSkill,
      experience: driver.coreExperience,
      wetWeather: driver.wetWeather,
      tyreManagement: driver.tyreManagement,
      reliability: driver.reliability
    },
    visual: visual ? {
      colour: visual.colour,
      badge: visual.badge
    } : {
      colour: '#888888',
      badge: '#cccccc'
    }
  };
});
