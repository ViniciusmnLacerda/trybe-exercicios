const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      visitors.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      visitors.adult += 1;
    } else {
      visitors.senior += 1;
    }
  });
  return visitors;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPeople = countEntrants(entrants);
  const prices = Object.values(data.prices);
  const totalChild = prices[2] * totalPeople.child;
  const totalAdult = prices[0] * totalPeople.adult;
  const totalSenior = prices[1] * totalPeople.senior;
  const sum = totalChild + totalAdult + totalSenior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
