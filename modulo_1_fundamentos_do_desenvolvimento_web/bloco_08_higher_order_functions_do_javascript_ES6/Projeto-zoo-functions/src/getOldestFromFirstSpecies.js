const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((element) => element.id === id).responsibleFor[0];
  const animal = species.find((element) => element.id === animalId);
  const { residents } = animal;
  const oldAnimal = residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldAnimal;
  const result = [name, sex, age];
  return result;
}

module.exports = getOldestFromFirstSpecies;
