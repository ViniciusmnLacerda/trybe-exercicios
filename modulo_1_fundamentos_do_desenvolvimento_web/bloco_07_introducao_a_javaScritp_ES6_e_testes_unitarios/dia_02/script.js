//parte I
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

function checkNumber(value1, value2) {
  if (!value1 || !value2) {
    throw new Error('Você precisa informar dois valores para a calculadora funcionar corretamente.')
  } else if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Somente valores numéricos são aceitos.')
  }
}

function sum() {
  try {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  checkNumber(value1, value2);
  const result = parseInt(value1) + parseInt(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  } catch(error) {
    const result = document.querySelector('#result'); 
    result.innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
} */

//parte II
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
const deliveryPerson = order.order.delivery.deliveryPerson; 
const destiny = order.name;
const phoneNumber = order.phoneNumber;
const street = order.address.street;
const number = order.address.number;
const apartment = order.address.apartment;
console.log(`Olá ${deliveryPerson}, entrega para: ${destiny}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}
customerInfo(order);

const orderModifier = (order) => {
const newName = order.name = 'Luiz Silva'; 
const newPrice = order.payment.total = 50;
const pizza = Object.keys(order.order.pizza); 
const drink = order.order.drinks.coke.type; 
console.log(`Olá ${newName}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$ ${newPrice},00.`);
}
orderModifier(order);
 

//parte 3 
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function newTurn(object, key, value) {
  object[key] = value;
}
newTurn(lesson2, 'turno', 'noite');

const keysObject = (object) => Object.keys(object);
const lengthObject = (object) => Object.keys(object).length;
const valuesObject = (object) => Object.values(object);
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

function totalStudents(object) {
  let amount = 0;
  const arrayObject = Object.values(object); 
  for (let key in arrayObject){
    amount += arrayObject[key]['numeroEstudantes']
  }
}
totalStudents(allLessons)

const valueOfObject = (object, index) => Object.values(object)[index];

const checkPair = (object, keyName, value) => {
  const array = Object.entries(object);
  let auxiliar = false; 
  for (let key in array) {
    if (array[key][0] === keyName && array[key][1] === value) {
      auxiliar = true; 
    }
  }
  return auxiliar; 
}

//parte bônus
function mathStudents() {
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  const arrayAllLessons = Object.values(allLessons);
  let students = 0;
  for (let index = 0; index < arrayAllLessons.length; index += 1) {
    if (arrayAllLessons[index]['materia'] === 'Matemática') {
      students += arrayAllLessons[index]['numeroEstudantes'];
    }
  }
  return students;
}
mathStudents();

function report(teacherName) {
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  const arrayAllLessons = Object.values(allLessons);
  const teacher = {}; 
  const subject = []
  students = 0;
  for (let index = 0; index < arrayAllLessons.length; index += 1) {
    if (arrayAllLessons[index]['professor'] === teacherName) {
      if (!teacher['professor']){
      teacher['professor'] = teacherName;
      }   
      students += arrayAllLessons[index]['numeroEstudantes'];
      subject.push(arrayAllLessons[index]['materia']);
    }
  }
  teacher['aulas'] = subject;
  teacher['estudantes'] = students;
  return teacher;
}
console.log(report('Maria Clara'));