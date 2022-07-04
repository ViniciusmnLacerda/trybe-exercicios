function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

// exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheWeek() {
  let daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dayElement = document.createElement('li');
    let day = dezDaysList[index];
    if (dezDaysList[index] === 24 | dezDaysList[index] === 31) {
      dayElement.innerHTML = day;
      dayElement.className = 'day holiday';
      daysList.appendChild(dayElement);
    } else if (dezDaysList[index] === 25) {
      dayElement.innerHTML = day;
      dayElement.className = 'day friday holiday';
      daysList.appendChild(dayElement);
    } else if (dezDaysList[index] === 4 | dezDaysList[index] === 11 | dezDaysList[index] === 18) {
      dayElement.innerHTML = day;
      dayElement.className = 'day friday';
      daysList.appendChild(dayElement);
    } else {
      dayElement.innerHTML = day;
      dayElement.className = 'day';
      daysList.appendChild(dayElement);
    }
  }
};
createDaysOfTheWeek(dezDaysList);

//exercicio 2
function criarBotaoFeriados(text) {
  let buttomContainer = document.querySelector('.buttons-container');
  let buttom = document.createElement('button');
  buttom.id = 'btn-holiday';
  buttomContainer.appendChild(buttom);
  buttom.innerHTML = text;
};
criarBotaoFeriados('Feriados');

//exercicio 3
function changeColorHoliday() {
  let holidayButtom = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');

  holidayButtom.addEventListener('click', function () {
    for (let index = 0; index < holidays.length; index += 1)
      if (holidays[index].style.backgroundColor === 'green') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'green';
      }
  })
};
changeColorHoliday();

//exercicio 4
function buttomFriday(buttomName) {
  let buttomContainer = document.querySelector('.buttons-container');
  let buttom = document.createElement('button');
  buttom.id = 'btn-friday'; 
  buttomContainer.appendChild(buttom);
  buttom.innerHTML = buttomName;   
}
buttomFriday("Sexta-Feira");

//exercicio 5 
function displayFridays(array) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== 'SEXTOU') {
        fridays[index].innerHTML = 'SEXTOU';
    } else {
        fridays[index].innerHTML = array[index];
      }
    }
  })
};
displayFridays([ 4, 11, 18, 25 ]);

//exercicio 6
function daysZoomIn() {
  let days = document.querySelector('#days'); 
  days.addEventListener('mouseover', function(){
    event.target.style.fontSize = '40px';
  })
}
function daysZoomOut(){
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(){
    event.target.style.fontSize = '20px';
  })
}
daysZoomIn();
daysZoomOut();

//exercicio 7
function tasks (string){
let myTasks = document.querySelector('.my-tasks');
let span = document.createElement('span'); 
span.id = 'span';
span.innerHTML = string;  
myTasks.appendChild(span); 
};
tasks('Colocar a cerveja para gelar.');

//exercicio 8 
function backGroundMyTasks(cor) {
  let myTasks = document.querySelector('.my-tasks');
  let div = document.createElement('div'); 
  div.className = 'task';
  div.style.backgroundColor = cor;
  myTasks.appendChild(div); 
;}
backGroundMyTasks('blue');

//exercicio 9
function selectTask(){
  let div = document.querySelector('.task'); 
  div.addEventListener('click', function(){
    if (div.className === 'task'){
    div.className = 'task selected';
    } else {
      div.className = 'task';
    }
  })
}
selectTask();

//exercicio 10
function taskAssignment(){
let daysOfWeek = document.querySelector('#days');
let taskSelected = document.getElementsByClassName('task selected');
let taskNotSelected = document.querySelector('.task');
let newColor = taskNotSelected.style.backgroundColor;  //pink
daysOfWeek.addEventListener('click', function(event){
  if (taskNotSelected.className === 'task selected' && event.target.style.color !== newColor) {
    event.target.style.color = newColor;
  } else if (event.target.style.color === newColor){
    event.target.style.color = 'rgb(119,119,119)';
  }
})
}
taskAssignment();

//exercicio bonus
function newTask() {
  let newInput = document.querySelector('#task-input');
  let buttonAdd = document.querySelector('#btn-add');
  let myTasks = document.querySelector('.task-list');
    buttonAdd.addEventListener('click', function(){
    if (newInput.value.length === 0) {
      alert('Error: Digite ao menos um caractere.')
    }
    let itenList = document.createElement('li');
    itenList.innerHTML = newInput.value;
    myTasks.appendChild(itenList);
  })
};
newTask();