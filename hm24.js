"use strict";
////////////////////////
//////// TASK 1 ////////
////////////////////////

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let a = Number(prompt("type the start of scope"));
let b = Number(prompt("type the end of scope"));
let sum = 0;

while (a <= b) {
  sum += a;
  a++;
}

console.log(sum);

////////////////////////
//////// TASK 2 ////////
////////////////////////

// Запросить 2 числа и найти только наибольший общий делитель.

let a = Number(prompt("type first num"));
let b = Number(prompt("type second num"));
let gcd;
while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
gcd = a;
console.log(gcd);

////////////////////////
//////// TASK 3 ////////
////////////////////////

// Запросить у пользователя число и вывести все делители этого числа.

let num = prompt("type ur num");
for (let i = 0; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

////////////////////////
//////// TASK 4 ////////
////////////////////////

// Определить количество цифр в введенном числе.

var num = prompt("type the number");
var quantity = 0;

for (var i = 0; i < num; i++) {
  quantity = String(num).length;
}
if (String(num).length === 1) {
  console.log(`there is only one digit in this number`);
} else if (String(num).length > 1) {
  console.log(`there are ${quantity} digits in this number`);
}

////////////////////////
//////// TASK 5 ////////
////////////////////////

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
//
/// тут я не смог разобраться, как поместить в промт 10 разных чисел
/// и проверить их поочерёдно

let numbers = [+prompt("enter 10 numbers").split(",")];

let pos = 0,
  neg = 0,
  zero = 0,
  even = 0,
  odd = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers > 0) {
    pos++;
  }
  if (numbers < 0) {
    neg--;
  }
  if (numbers == 0) {
    zero++;
  }
  if (numbers % 2 == 0) {
    even++;
  }
  if (numbers % 2 != 0) {
    odd++;
  }
}

console.log(
  `here is:\n ${pos} positive number,\n ${neg} negative number,\n ${zero} number,\n ${even} number,\n ${odd} number`
);

////////////////////////
//////// TASK 6 ////////
////////////////////////

// Зациклить калькулятор.
// Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.

let firstNum = +prompt("first num");
let secondNum = +prompt("second num");
let sign = prompt(`+ or - or / or *`);

let calc;

console.log(calc);

////////////////////////
//////// TASK 7 ////////
////////////////////////

// Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let num = prompt("Введите число!");
let mov = prompt("На сколько цифр его сдвинуть?");

console.log(num.slice(mov) + num.slice(0, mov));

////////////////////////
//////// TASK 8 ////////
////////////////////////

// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

//
// я тут старался как-то и через for и через while выгребсти, но всё мимо

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = confirm(`it's a ` + days[0]);

for (let days = [0]; confirm === true; days[i]++) console.log(day);

while (day === true) {
  confirm;
}

while (day === true) {
  confirm(`it's a ` + days[1]);
}

////////////////////////
//////// TASK 9 ////////
////////////////////////

// Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.

let result = "";
for (let i = 2; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result += i * j + " ";
  }
  result += "\n";
}

console.log(result);

////////////////////////
//////// TASK 10 ////////
////////////////////////

// Игра «Угадай число».

// Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?».
//В зависимости от того, что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100.
// И так до тех пор, пока пользователь не выберет == N.

///
// тут не могу разобраться со строчкой, где for. после первого ввода числа prompt отображает условия
// и разрешает повторно угадать число, но после этого вылетает, не пойму, как настроить

let secretNum = Math.trunc(Math.random() * 100) + 1;
// let guess = Number(prompt(`Guess number from 1 to 100`, 0));

// for (let i = guess; i > 0; i++) {
//   if (!Number) {
//     prompt("no number");
//   } else if (guess === secretNum) {
//     prompt("Correct!");
//   } else if (guess > secretNum) {
//     prompt("too high");
//   } else if (guess < secretNum) {
//     prompt("too low");
//   }
// }

do {
  let guess = Number(prompt(`Guess number from 1 to 100`, 0));
  if (!Number) {
    prompt("no number");
  } else if (guess === secretNum) {
    prompt("Correct!");
  } else if (guess > secretNum) {
    prompt("too high");
  } else if (guess < secretNum) {
    prompt("too low");
  }
} while (guess != secretNum);
