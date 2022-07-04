const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function onlyName(object) {
  const result = {};
  const employee = employees.find((element) => element.firstName === object.name
    || element.lastName === object.name);
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  } else {
    const { id, firstName, lastName, responsibleFor } = employee;
    result.id = id;
    result.fullName = `${firstName} ${lastName}`;
    result.species = responsibleFor.map((element) => species.find((specie) =>
      specie.id === element).name);
    result.locations = responsibleFor.map((element) => species.find((specie) =>
      specie.id === element).location);
    return result;
  }
}

function onlyId(object) {
  const result = {};
  const employee = employees.find((element) => element.id === object.id);
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  } else {
    const { id, firstName, lastName, responsibleFor } = employee;
    result.id = id;
    result.fullName = `${firstName} ${lastName}`;
    result.species = responsibleFor.map((element) => species.find((specie) =>
      specie.id === element).name);
    result.locations = responsibleFor.map((element) => species.find((specie) =>
      specie.id === element).location);
    return result;
  }
}

function noParameters() {
  return employees.map((element) => {
    const assistant = {};
    const { id, firstName, lastName, responsibleFor } = element;
    assistant.id = id;
    assistant.fullName = `${firstName} ${lastName}`;
    assistant.species = responsibleFor.map((value) => species.find((specie) =>
      specie.id === value).name);
    assistant.locations = responsibleFor.map((value) => species.find((specie) =>
      specie.id === value).location);
    return assistant;
  });
}

function getEmployeesCoverage(object) {
  if (!object) {
    return noParameters();
  }
  if (!object.id) {
    return onlyName(object);
  }
  if (!object.name) {
    return onlyId(object);
  }
}

module.exports = getEmployeesCoverage;
