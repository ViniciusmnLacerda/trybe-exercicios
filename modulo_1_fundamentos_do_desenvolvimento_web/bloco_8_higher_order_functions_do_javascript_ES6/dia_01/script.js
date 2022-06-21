//exercicio 1
const newEmail = (fullName) => {
  const array = fullName.split(' '); 
  let email = ''; 
  for (let key of array) {
    email += key + '_';
  };
  email = `${email.substring(0, email.length - 1).toLocaleLowerCase()}@trybe.com`;
  return { nome: fullName, email: email };
};

const newEmployess = (callBack) => {
  const newEmployess = {
    id1: callBack('Pedro Guerra'),
    id2: callBack('Luiza Drumond'),
    id3: callBack('Carla Paiva'),
  };
  return newEmployess;
};

console.log(newEmployess(newEmail));

//exercicio  2
const randonNumber = () => {
  const number = Math.floor((Math.random() * 5) + 1);
  return number;
};

const check = (bet, callBack) => {
  if (bet === callBack()) {
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente.';
  };
};

console.log(check(4, randonNumber));

//exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const note = (answerKey, studentKey, callBack) => {
  return `Nota final: ${callBack()}`;
};

const checkAnswers = () => {
  let result = 0; 
  for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
    if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
      result += 1;
    } else if (RIGHT_ANSWERS[index] !== STUDENT_ANSWERS[index] && STUDENT_ANSWERS[index] !== 'N.A') {
      result -= 0.5; 
    } else {
      result += 0;
    };
  };
  return result;
};

console.log(note(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));

//exercicio bonus Parte I - Game Actions Simulator
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const minDmg = 15;
  const maxDmg = dragon.strength
  const dragonDmg = Math.floor((Math.random() * (maxDmg + 1 - minDmg)) + minDmg);
  return dragonDmg;
};

const warriorDamage = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const warriorDmg = Math.floor((Math.random() * (maxDmg + 1 - minDmg)) + minDmg);
  return warriorDmg;
};

const mageDamage = (mage) => {
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2; 
  const mageDmg = Math.floor((Math.random() * (maxDmg + 1 - minDmg)) + minDmg);
  const mageMana = mage.mana; 
  const mageStats = {
    spendingMana: 0,
    damageTotal: mageDmg,
  };
  if (mageMana < 15) {
    mageStats.damageTotal = 'Não possui mana suficiente';
    return mageStats;
  } else {
    mageStats.spendingMana = 15;
    return mageStats;
  };
};

//exercicio bonus Parte II
const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorTotalDamage = warriorDamage(warrior);
    warrior.damage = warriorTotalDamage;
    dragon.healthPoints -= warriorTotalDamage;
  },
  mageTurn: (mageDamage) => {
    const mageObject = mageDamage(mage);
    const mageTotalDamage = mageObject.damageTotal; 
    const lossMana = mageObject.spendingMana;
    dragon.healthPoints -= mageTotalDamage;
    mage.damage = mageTotalDamage;
    mage.mana -= lossMana;
  },
  dragonTurn: (dragonDamage) => {
    const dragonTotalDamage = dragonDamage(dragon);
    mage.healthPoints -= dragonTotalDamage;
    warrior.healthPoints -= dragonTotalDamage;
    dragon.damage = dragonTotalDamage;
  },
  result: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.result());