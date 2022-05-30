let memeText = document.querySelector('#meme-text'); 
let input = document.querySelector('#text-input'); 
let memeImage = document.querySelector('#meme-image');
let memeInsert = document.querySelector('#meme-insert');
let container = document.querySelector('#meme-image-container');
let buttons = document.querySelector('#buttons');
let fire = document.querySelector('#fire');
let water = document.querySelector('#water');
let earth = document.querySelector('#earth');
let newMemesContainer = document.querySelector('#new-memes-container');


function newText() {
    memeText.innerHTML = input.value;

}
newText();
input.addEventListener('input', newText);

memeInsert.addEventListener('change', (e) => {  //feito com a ajuda do Rubens Deola
  const { target } = e;
  const curFiles = target.files;
  if (curFiles.length !== 0) {
    memeImage.src = URL.createObjectURL(curFiles[0]);
  }
});


fire.addEventListener('click', function(event){
  container.style.border = '3px dashed red';
});

water.addEventListener('click', function(event){
  container.style.border = '5px double blue';
});

earth.addEventListener('click', function(event){
  container.style.border = '6px groove green';
});

function changeImage(event) {
  let selected = event.target;
  memeImage.src = selected.src;
};

newMemesContainer.addEventListener('click', changeImage);