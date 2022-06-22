//Para Fixar Array.forEach
//exercicio1
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
emailListInData.forEach(showEmailList);

//Para Fixar Array.some e Array.every
//exercicio 1
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (element) => {
  return element % 3 === 0 && element % 5 === 0;
}
console.log(numbers.find(findDivisibleBy3And5))

//exercicios 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = (element) => {
  return element.length === 5;
}
console.log(names.find(findNameWithFiveLetters));

//exercicio 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
function findMusic(id) {
  return musicas.find((element) => element['id'] === id);
}
console.log(findMusic('31031685'))

//Para Fixar Array.some e Array.every
//exercicio 1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((element) => element === name);
}
console.log(hasName(names, 'Ana'))

//exercicio 2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.some((element) => arr.age >= minimumAge);
}
console.log(verifyAges(people, 18));

//Para Fixar Array.sort
//exercício 1
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);

//exercício 2
people.sort((a, b) => b.age - a.age);
console.log(people);

