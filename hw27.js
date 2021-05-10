"use strict";

/* 1. Создать массив «Список покупок». 
Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

let purchases = [
  { name: "apple", quantity: 4, bought: true },
  { name: "bananas", quantity: 3, bought: false },
  { name: "milk", quantity: 2, bought: true },
  { name: "bread", quantity: 1, bought: false },
];

// 1
function sortedPurchases(purchases) {
  if (purchases.bought === true) return 1;
  if (purchases.bought === false) return -1;
}
purchases.sort(sortedPurchases);
console.log(purchases); //Больше ничего не получилось здесь
// 2

/* 
let item1 = prompt("what is ur new purchase?");
let item2 = Number(prompt("how much?"));
let item3 = confirm("have u already got bought?");
let arr1 = ["name", "quantity", "bought"];
let arr2 = [item1, item2, item3];

resultArray = [];
for (var j = 0; j < arr1.length; j++) {
  resultArray[j] = new makeArray(arr1[j], arr2[j]);
}

function makeArray() {
  this.name = this.name;
  this.quantity = this.quantity;
  this.bought = this.bought;
}
makeArray(item1, item2, item3);
purchases.push(makeArray); */

/////

/* function newPurchase(newObj) {
  newObj = {
    name: newName,
    quantity: newQuantity,
    bought: newBought,
  };
  if (newBought === true) return (purchases.newObj.bought = true);
  if (newBought === false) return (purchases.newObj.bought = false);

}

purchases.push(newPurchase);

let newName = prompt("what is ur new purchase?");
let newQuantity = Number(prompt("how much?"));
let newBought = confirm("have u already got bought?"); */

// 3

/* 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
количества и цены за единицу товара. Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке. */

let check = [
  { name: "apples", quantity: 14, price: 4 },
  { name: "bananas", quantity: 13, price: 5 },
  { name: "milks", quantity: 5, price: 3 },
  { name: "breads", quantity: 10, price: 2 },
];

// 1
console.group("THERE IS A CHECK");
Object.values(check).forEach((val) => {
  console.log(
    `you bought ` +
      val.quantity +
      ` ` +
      val.name +
      " for " +
      val.price +
      `$\nin sum it costs ` +
      val.quantity * val.price +
      "$"
  );
  console.groupEnd("THERE IS A CHECK");
});
// 2
let total = 0;

check.forEach(function (x) {
  total += x.quantity * x.price;
});

console.log(`TOTAL PRICE: ` + total + `$`);

// 3

let max = 0;
check.forEach((check) => {
  if (check.quantity * check.price > max) {
    max = check.quantity * check.price;
  }
});
console.log(`The most expensive position in ur check is ` + max + `$`);

// 4
let positionsLength = check.length;

let avg = 0;
check.forEach((check) => {
  avg += (check.quantity * check.price) / positionsLength;
});
console.log(`The average price in your check is ` + avg + `$`);

/* 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
*/

let styles = [
  { name: "color", property: "black" },
  { name: "font-size", property: "16px" },
  { name: "text-align", property: "center" },
  { name: "padding", property: "1rem" },
  { name: "background", property: "cyan" },
];

/* 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, 
количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 
Написать несколько функций для работы с ним

Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;

Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
Объект-группа состоит из названия, количества студентов и названия факультета;

Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту). */

let audience = [
  { name: "first", sits: 14, faculty: "chemistry" },
  { name: "second", sits: 16, faculty: "journalism" },
  { name: "third", sits: 11, faculty: "philosophy" },
  { name: "fourth", sits: 20, faculty: "math" },
  { name: "fifth", sits: 12, faculty: "biology" },
  { name: "sixth", sits: 17, faculty: "philosophy" },
  { name: "seventh", sits: 18, faculty: "biology" },
];

// 1

let audienceList = audience.map(onlyAudience);

function onlyAudience(x) {
  return x.name;
}

console.log(`There are all audiences:`, audienceList);

// 2
// let searchingAudience = prompt(
//   "what audience do you looking for?\nChoose between chemistry, journalism, philosophy, math, biology"
// );
const searchAudience = audience.filter(function (x) {
  return x.faculty === "chemistry";
});

console.log(searchAudience);

// 3

let group = { name: "new", students: 15, faculty: "biology" };

// 4
const sortedBySits = [...audience];
sortedBySits.sort(function (a, b) {
  return a.sits - b.sits;
});

// 5

const alphabetic = [...audience];
alphabetic.sort(function (a, b) {
  let nameA = a.name;
  let nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});
console.log(audience);
console.log(sortedBySits);
console.log(alphabetic);
