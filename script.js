"use strict";

// 1. Создать страницу, которая выводит нумерованный список песен:

let playList = [
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },

  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },

  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },

  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },

  { author: "AC/DC", song: "BACK IN BLACK" },

  { author: "QUEEN", song: "WE WILL ROCK YOU" },

  { author: "METALLICA", song: "ENTER SANDMAN" },
];

let myDiv = document.getElementsByClassName("myDiv")[0];

let newDiv = document.createElement("div");
newDiv.setAttribute("class", "newCon");
myDiv.appendChild(newDiv);
document.body.prepend(newDiv);

let ul = document.createElement("ul");
ul.setAttribute("class", "list");
newDiv.appendChild(ul);

for (let i = 0; i < playList.length; i++) {
  let li = document.createElement("li");

  let line = document.createTextNode(
    playList[i].author + ": " + playList[i].song
  );
  li.appendChild(line);
  ul.appendChild(li);
}

// function showPlayList() {}

//
/* 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
На модальном окне должен быть текст и кнопка "Закрыть". 
Изначально модальное окно не отображается. 
При клике на кнопку "Открыть" появляется модальное окно,
на кнопку "Закрыть" – исчезает.*/

let btnOpen = document.createElement("button");
btnOpen.setAttribute("class", "open");
let text = document.createElement("p");
text.textContent = "OPEN";
btnOpen.appendChild(text);
document.body.prepend(btnOpen);

let modal = document.createElement("div");
modal.setAttribute("class", "modalWindow");
modal.style.display = "none";
document.body.prepend(modal);
let modalText = document.createElement("p");
modalText.textContent = "NOTHING HERE";
modal.appendChild(modalText);

btnOpen.onclick = function () {
  modal.style.display = "block";
  text.textContent = "CLOSE";
};
modal.onclick = function () {
  modal.style.display = "none";
  text.textContent = "OPEN";
};

// cant make modal window close clickin anywhere in the page
// it closes only if click in modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
window.onclick = function (event) {
  if (modal.style.display == "block" && event.target.nodeName == "HTML") {
    modal.style.display = "none";
    text.textContent = "OPEN";
  }
};

/* 3. Создать HTML-страницу со светофором и кнопкой, 
которая переключает светофор на следующий цвет. */

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (redlight.classList.contains("traffic__red")) {
    redlight.classList.remove("traffic__red");
    yellowlight.classList.add("traffic__yellow");
  } else if (yellowlight.classList.contains("traffic__yellow")) {
    yellowlight.classList.remove("traffic__yellow");
    greenlight.classList.add("traffic__green");
  } else if (greenlight.classList.contains("traffic__green")) {
    greenlight.classList.remove("traffic__green");
    redlight.classList.add("traffic__red");
  }
});
