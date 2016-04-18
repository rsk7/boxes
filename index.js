import randomWords from 'random-words';
import draggable from './src/draggable';

let wordcount = 5000;

function createBox() {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  return draggable(box);
}

document.addEventListener("DOMContentLoaded", () => {
  let body = document.getElementsByTagName("body")[0];
  let container = document.createElement("div");
  let words = randomWords({ exactly: wordcount, join: ' '});
  let shape = document.createElement("div");

  let box = createBox();

  let textContainer = document.createTextNode(words);
  container.appendChild(box);
  container.appendChild(textContainer);
  body.appendChild(container);
});


