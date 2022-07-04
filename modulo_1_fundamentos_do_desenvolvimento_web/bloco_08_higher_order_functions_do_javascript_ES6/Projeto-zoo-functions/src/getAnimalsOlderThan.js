const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = species.filter((element) => element.name === animal)[0];
  const { residents } = specie;
  const ages = residents.filter((element) => element.age >= age);
  if (ages.length === residents.length) {
    return true;
  }
  return false;
}

module.exports = getAnimalsOlderThan;
console.log(getAnimalsOlderThan('lions', 6));
