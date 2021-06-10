"use strict";
/////////////////
//// TASK 1 /////
/////////////////
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
// 1 – если первое больше, чем второе; и 0 – если числа равны.

function getNums(firstNum, secondNum) {
  let result = 0;
  if (firstNum < secondNum) {
    return (result = result - 1);
  } else if (firstNum > secondNum) {
    return (result = result + 1);
  } else if (firstNum === secondNum) {
    return result;
  }
}

let firstNum = Number(prompt("Enter the first number "));
let secondNum = Number(prompt("Enter the second number "));
getNums(firstNum, secondNum);

/////////////////
//// TASK 2 /////
/////////////////
//Написать функцию, которая вычисляет факториал переданного ей числа.

function fuctorial(num) {
  let total = 1;

  for (i = 0; i < num; i++) {
    total = total * (num - i);
  }
  return total;
}
let num = Number(prompt("Enter the number "));
fuctorial(num);

/////////////////
//// TASK 3 /////
/////////////////
//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
//Например: цифры 1, 4, 9 превратятся в число 149.

function nums(num1, num2, num3) {
  let integer = Number(`${num1}${num2}${num3}`);
  return integer;
}

nums(1, 2, 3);

/////////////////
//// TASK 4 /////
/////////////////
/* Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. */

function sides(firstSide, secondSide = firstSide) {
  let s = Number(firstSide * secondSide);
  // if (secondSide === false) {
  //   secondSide === firstSide;
  // } // не пойму как сделать secondSide = firstSide, если второе число не ввели
  return s;
}

let firstSide = Number(prompt("Enter the first number "));
let secondSide = Number(prompt("Enter the second number "));

sides(firstSide, secondSide);

/////////////////
//// TASK 5 /////
/////////////////
/* Написать функцию, которая проверяет, является ли переданное ей число совершенным.
Совершенное число – это число, равное сумме всех своих собственных делителей.

здесь проблема с тем, что выводиться `it's not a perfect number`,
если в промпт ввести совершенное число */

function perfectNum(num) {
  let total = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      total += i;
    }
    // if (total === num) {
    //   console.log(`${total} it's a perfect number`);
    // } else {
    //   console.log(`it's not a perfect number`);
    // }
    if (total === num) {
      return true;
    }
  }
}
// let num = Number(prompt(`what is ur number?`));
perfectNum(num);
console.log(total);

/////////////////
//// TASK 6 /////
/////////////////
/* Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
и выводит только те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

тут как-то получилось свести предыдущий код, но отдельно от него не получается
отобразить список, не знаю как правильно подключить предыдущий код к этому */

let num1 = Number(prompt("Enter the first number "));
let num2 = Number(prompt("Enter the second number "));

function scope(num1, num2) {
  let totals = [];

  for (let i = num1; i <= num2; i++) {
    if (perfectNum(i)) {
      totals.push(i);
    }
  }
  return totals;
}

scope(num1, num2);
console.log(totals);

/////////////////
//// TASK 7 /////
/////////////////
/* Написать функцию, которая принимает время (часы, минуты, секунды)
и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. */

function getTime(h, m, s) {
  var h = Number(prompt("type hours"));
  var m = Number(prompt("type minutes"));
  var s = Number(prompt("type seconds"));

  var time = h + ":" + m + ":" + s;

  return time;
}
getTime(h, m, s);
console.log(time);

////

function getTime(now) {
  let time = prompt("do u wanna get the time?");

  if (time === true) {
    return now;
  }
}
let date = new Date();
let now = date.toLocaleTimeString();
console.log(now);

///
function formatDate(date) {
  let dd = date.getDate();

  if (dd < 10) {
    dd = "0" + dd;
  }

  let mm = date.getMonth() + 1; // ! плюс 1
  if (mm < 10) {
    mm = "0" + mm;
  }

  let yy = date.getFullYear() % 100;
  if (yy < 10) {
    yy = "0" + yy;
  }

  return dd + "." + mm + "." + yy;
}
let d = new Date();
console.log(formatDate(d));

/////////////////
//// TASK 8 /////
/////////////////
//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

var currentDateTime = new Date();
var resultInSeconds = Number(currentDateTime.getTime() / 1000);
console.log("The current time in seconds:", resultInSeconds);

/////////////////
//// TASK 9 /////
/////////////////

/*Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс». */

let sec = Number(prompt("enter the quantity of the seconds to get time"));

let hours = Math.floor(sec / 60 / 60);
if (hours < 10) {
  hours = "0" + hours;
}
let minutes = Math.floor(sec / 60) - hours * 60;
if (minutes < 10) {
  minutes = "0" + minutes;
}
let seconds = sec % 60;
if (seconds < 10) {
  seconds = "0" + seconds;
}

let time = hours + ":" + minutes + ":" + seconds;
console.log(time);

/////////////////
//// TASK 10 ////
/////////////////
/* Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
При выполнении задания используйте функции из предыдущих 2-х заданий:
сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс» */

// let hours1 = Number(prompt("enter the hours"));
// let minutes1 = Number(prompt("enter the minutes"));
// let seconds1 = Number(prompt("enter the seconds"));

// let time1 = `${hours1}:${minutes1}:${seconds1}`;

// let hours2 = Number(prompt("enter the hours"));
// let minutes2 = Number(prompt("enter the minutes"));
// let seconds2 = Number(prompt("enter the seconds"));

// let time2 = `${hours2}:${minutes2}:${seconds2}`;

// console.log(time1, time2);

// let time3 = new Date(hours1, minutes1, seconds1);
// let time4 = new Date(hours2, minutes2, seconds2);
// console.log(time3, time4);
