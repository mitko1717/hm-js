"use strict";

/* Создать HTML-страницу для отображения/редактирования текста. 
При открытии страницы текст отображается с помощью тега div. 
При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, 
который теперь можно редактировать. 
При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. 
Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш. */

const defaultDiv = document.getElementsByClassName("default");
const textarea = document.getElementsByClassName("textarea");
const textzone = document.getElementsByClassName("textzone");

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "e") {
    e.preventDefault();

    defaultDiv.classList.add("dispNone");
    textarea.classList.remove("textarea-unvisible");

    alert("nothin but alert works");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "+") {
    e.preventDefault();

    textarea.classList.add("textarea-unvisible");
    defaultDiv.classList.remove("dispNone");

    defaultDiv.textContent = textzone.value;
  }
});

/* Создать HTML-страницу с большой таблицей. 
При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. 
Учтите, что числовые значения должны сортироваться как числа, а не как строки.*/

const list = document.querySelector(".list");

let sortNameBtn = document.querySelector(".sort-name");
let sortAgeBtn = document.querySelector(".sort-age");

let listItem = [
  { name: "sss", age: "37" },
  { name: "lll", age: "66" },
  { name: "ddd", age: "42" },
  { name: "fff", age: "42" },
  { name: "aaa", age: "33" },
  { name: "vvv", age: "17" },
];

// sortNameBtn.addEventListener("click", () => {
//   listItem.sort((a, b) => {
//     return a.name - b.name;
//   });
// });

function displayList(array = []) {
  list.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let itemElement = document.createElement("tr");
    itemElement.classList.add("list-item");

    let title = document.createElement("td");
    title.classList.add("item-title");
    title.innerText = item.name;

    itemElement.appendChild(title);

    let age = document.createElement("td");
    age.classList.add("item-age");
    age.innerText = item.age;

    itemElement.appendChild(age);

    list.appendChild(itemElement);
  }
}

sortNameBtn.addEventListener("click", () => {
  let array = sortArray(listItem, "name");
  displayList(array);
});

sortAgeBtn.addEventListener("click", () => {
  let array = sortArray(listItem, "age");
  displayList(array);
});

function sortArray(array, sort) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });

  return array;
}

displayList(listItem);

/* Создать HTML-страницу с блоком текста в рамочке. 
Реализовать возможность изменять размер блока, 
если зажать мышку в правом нижнем углу и тянуть ее дальше. */

let textBlock = document.createElement("div");
textBlock.setAttribute("class", "textBlock");
textBlock.innerHTML = "move it";
let resizer = document.createElement("div");
resizer.setAttribute("class", "resizer");
textBlock.appendChild(resizer);
document.body.appendChild(textBlock);

textBlock.addEventListener("mousedown", initResize);

function initResize() {
  window.addEventListener("mousemove", Resize);
  window.addEventListener("mouseup", stopResize);
}
function Resize(e) {
  textBlock.style.width = e.clientX - textBlock.offsetLeft + "px";
  textBlock.style.height = e.clientY - textBlock.offsetTop + "px";
}
function stopResize() {
  window.removeEventListener("mousemove", Resize);
  window.removeEventListener("mouseup", stopResize);
}
