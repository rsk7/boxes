import randomWords from 'random-words';
import draggable from './src/draggable';

let wordcount = 5000;
let boxcount = 10;

function createBox() {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.style.top = Math.random() * 10000 % (window.innerHeight - 200);
  box.style.left = Math.random() * 10000 % (window.innerWidth - 200);
  let dimension = Math.random() * 1000 % 200;
  dimension = (dimension < 50) ? 50 : dimension;
  box.style.height = dimension;
  box.style.width = dimension;
  return draggable(box);
}

document.addEventListener("DOMContentLoaded", () => {
  let body = document.getElementsByTagName("body")[0];
  let container = document.createElement("div");
  let words = randomWords({ exactly: wordcount, join: ' '});
  let shape = document.createElement("div");

  for (let i = 0; i < boxcount; i++) {
    let box = createBox();
    container.appendChild(box);
  } 

  let textContainer = document.createTextNode(words);
  container.appendChild(textContainer);

  body.appendChild(container);
});


