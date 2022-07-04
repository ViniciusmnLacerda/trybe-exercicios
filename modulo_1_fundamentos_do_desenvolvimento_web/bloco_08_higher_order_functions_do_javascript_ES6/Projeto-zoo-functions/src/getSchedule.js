const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = species.map((element) => element.name);

function noParameters() {
  const result = {};
  const openingHours = Object.entries(hours);
  openingHours.forEach((element) => {
    const assistant = {};
    const arrayAssistant = [];
    assistant.officeHour = `Open from ${element[1].open}am until ${element[1].close}pm`;
    species.filter((filter) => filter.availability.includes(element[0])).forEach((animal) =>
      arrayAssistant.push(animal.name));
    assistant.exhibition = arrayAssistant;
    result[`${element[0]}`] = assistant;
    if (element[0] === 'Monday') {
      assistant.officeHour = 'CLOSED';
      assistant.exhibition = 'The zoo will be closed!';
      return result;
    }
  });
  return result;
}

function anAnimal(scheduleTarget) {
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

function aDay(scheduleTarget) {
  const result = {};
  const schedule = noParameters();
  const scheduleDay = schedule[scheduleTarget];
  result[scheduleTarget] = scheduleDay;
  return result;
}

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) return anAnimal(scheduleTarget);
  if (days.includes(scheduleTarget)) return aDay(scheduleTarget);
  return noParameters();
}

module.exports = getSchedule;
