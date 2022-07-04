//Para fixar Spread Operator
//exercicio 1
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'laranaj'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['castanha', 'caju', 'maracuja'];

const fruitSalad = (fruit, additional) => {
  const order = [...fruit, ...additional]
  return order; 
};

console.log(fruitSalad(specialFruit, additionalItens));

//Para Fixar Object Destructuring
//exercicio 1
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const info = {
  ...user,
  ...jobInfos,
}
console.log(info);

//exercicio 2
const {name, age, nationality, profession, squad, squadInitials} = info
const text = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
console.log(text);

//Para Fixar Array Destructuring
//exercicio 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [meeting, func] = saudacoes;
func(meeting);

//exercicio 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

//exercicio 3 
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);

//Para Fixar Default Destructuring
//exercicio 1
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//Para Fixar Object Property Shorthand
//exercicio 1
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

//Para Fixar Default Parameters
//exercicio 1
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
