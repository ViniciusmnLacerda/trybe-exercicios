const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

function noParametersOrNames() {
  const result = {};
  locations.forEach((local) => {
    result[`${local}`] = species.filter((element) =>
      element.location === local).map((specie) => specie.name);
    return result;
  });
  return result;
}

function withNames() {
  const result = {};
  locations.forEach((local) => {
    const animals = species.filter((filter) => filter.location === local);
    const arrayPrimary = [];
    animals.forEach((animal) => {
      const assistant = {};
      const arrayOfnomes = [];
      const { residents } = animal;
      residents.forEach((index) => {
        arrayOfnomes.push(index.name);
      });
      assistant[`${animal.name}`] = arrayOfnomes;
      arrayPrimary.push(assistant);
    });
    animals.forEach((element) => { result[`${element.location}`] = arrayPrimary; });
  });
  return result;
}

function withNamesSorted() {
  const result = {};
  locations.forEach((local) => {
    const animals = species.filter((filter) => filter.location === local);
    const arrayPrimary = [];
    animals.forEach((animal) => {
      const assistant = {};
      const arrayOfnomes = [];
      const { residents } = animal;
      residents.forEach((index) => {
        arrayOfnomes.push(index.name);
      });
      assistant[`${animal.name}`] = arrayOfnomes.sort();
      arrayPrimary.push(assistant);
    });
    animals.forEach((element) => { result[`${element.location}`] = arrayPrimary; });
  });
  return result;
}

function withNamesAndSex(options) {
  const result = {};
  locations.forEach((local) => {
    const animals = species.filter((filter) => filter.location === local);
    const arrayPrimary = [];
    animals.forEach((animal) => {
      const assistant = {};
      const arrayOfnomes = [];
      const { residents } = animal;
      residents.filter((gender) => gender.sex === options.sex).forEach((index) => {
        arrayOfnomes.push(index.name);
      });
      assistant[`${animal.name}`] = arrayOfnomes;
      arrayPrimary.push(assistant);
    });
    animals.forEach((element) => { result[`${element.location}`] = arrayPrimary; });
  });
  return result;
}

function withNamesAndSexSorted(options) {
  const result = {};
  locations.forEach((local) => {
    const animals = species.filter((filter) => filter.location === local);
    const arrayPrimary = [];
    animals.forEach((animal) => {
      const assistant = {};
      const arrayOfnomes = [];
      const { residents } = animal;
      residents.filter((gender) => gender.sex === options.sex).forEach((index) => {
        arrayOfnomes.push(index.name);
      });
      assistant[`${animal.name}`] = arrayOfnomes.sort();
      arrayPrimary.push(assistant);
    });
    animals.forEach((element) => { result[`${element.location}`] = arrayPrimary; });
  });
  return result;
}

function verifyWithSex(options) {
  const { sex, sorted } = options;
  if (sex && !sorted) return withNamesAndSex(options);
  if (sex && sorted) return withNamesAndSexSorted(options);
}

function verifyNoSex(options) {
  const { sex, sorted } = options;
  if (!sex && !sorted) return withNames();
  if (sorted && !sex) return withNamesSorted();
  return verifyWithSex(options);
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noParametersOrNames();
  return verifyNoSex(options);
}

module.exports = getAnimalMap;
