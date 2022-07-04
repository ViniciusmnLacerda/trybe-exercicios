const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach((element) => { result[`${element.name}`] = element.residents.length; });
    return result;
  } if (!animal.sex) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  const specie = species.find((element) => element.name === animal.specie);
  const { residents } = specie;
  return residents.filter((element) => element.sex === animal.sex).length;
}

module.exports = countAnimals;
