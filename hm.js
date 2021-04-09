////////////////////////
//////// TASK 1 ////////
////////////////////////

// Запросить у пользователя его возраст и определить, кем он является:
// ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let age = prompt("what is your age?");

if (age >= 0 && age <= 12) {
  console.log("u r child");
} else if (age >= 13 && age < 18) {
  console.log("u r teenager");
} else if (age >= 18 && age < 60) {
  console.log("u r adult");
} else if (age >= 60) {
  console.log("u r retiree");
}

////////////////////////
//////// TASK 2 ////////
////////////////////////

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

 let symbol = prompt('type digit 0-9');

 if (symbol === 0) {
     console.log(')');
 } else if (symbol === '1') {
     console.log('!');
 } else if (symbol === '2') {
     console.log('@');
 } else if (symbol === '3') {
     console.log('#');
 } else if (symbol === '4') {
     console.log('$');
 } else if (symbol === '5') {
     console.log('%');
 } else if (symbol === '6') {
     console.log('^');
 } else if (symbol === '7') {
     console.log('&');
 } else if (symbol === '8') {
     console.log('*');
 } else if (symbol === '9') {
     console.log('(');
 } else if (symbol) {
     console.log('please enter digit 0-9');
 }

////////////////////////
//////// TASK 3 ////////
////////////////////////

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

 let number = prompt("Enter the number from 100 to 999");
 if (
   number[0] === number[1] ||
   number[0] === number[2] ||
   number[1] === number[2]
 ) {
   console.log("true");
 } else console.log("false");

////////////////////////
//////// TASK 4 ////////
////////////////////////

// Запросить у пользователя год и проверить, високосный он или нет.
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

 let year = prompt("Enter the year");

 if (year % 4 == 0 && year % 100 !== 0) {
   console.log("yes, it's a leap year");
 } else if (year % 400 == 0) {
   console.log("yes, it's a leap year");
 } else if (year) {
   console.log("no, it isn't a leap year");
 }

////////////////////////
//////// TASK 5 ////////
////////////////////////

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

 let number = prompt("Enter the five-digit number");

 if (number[0] === number[4] && number[1] === number[3]) {
   console.log("true");
 } else console.log("false");

////////////////////////
//////// TASK 6 ////////
////////////////////////

// Написать конвертор валют.
// Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

 let usd = prompt("how much usd do u wanna convert?");

 let currency = prompt("enter ur currency: EUR or UAN or AZN");

 if (currency === "EUR") {
   console.log(usd * 2);
 } else if (currency === "UAN") {
   console.log(usd * 3);
 } else if (currency === "AZN") {
   console.log(usd * 4);
 } else if (currency) {
   console.log("please choose currency EUR or UAN or AZN");
 }

////////////////////////
//////// TASK 7 ////////
////////////////////////

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// что-то я не смог вьехать, как делить на проценты.
// пробовал делить на 0.3, 0.5, 0.7, как-то в скобки засовывал, но всё мимо

 let sum = prompt("what is the sum of ur check?");

 let sumWithSale =
   sum >= 200 && sum < 300
     ? (sum = sum - sum / 33)
     : sum >= 300 && sum < 500
     ? (sum = sum - sum / 20)
     : sum >= 500
     ? (sum = sum - sum / 14)
     : sum;

 console.log("your final sum with sale is " + Math.floor(sumWithSale));

////////////////////////
//////// TASK 8 ////////
////////////////////////

// Запросить у пользователя длину окружности и периметр квадрата.
//Определить, может ли такая окружность поместиться в указанный квадрат.

 let l = prompt("what is the length of circle?") / Math.PI;
 let p = prompt("what is the perimetr of square?");
 let side = p / 4;

 if (l <= side) {
   console.log("your circle can fill in the square");
 } else if (l > side) {
   console.log("your circle too big");
 }

////////////////////////
//////// TASK 9 ////////
////////////////////////

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
//За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

 numCorrect = 0;

 let qwestion1 = prompt("what the number i guessed? Choose between 1, 2, 3");
 if (qwestion1 === "1") {
   numCorrect = numCorrect + 2;
 }

 let qwestion2 = prompt("what the number i guessed? Choose between 1, 2, 3");
 if (qwestion2 === "2") {
   numCorrect = numCorrect + 2;
 }

 let qwestion3 = prompt("what the number i guessed? Choose between 1, 2, 3");
 if (qwestion3 === "3") {
   numCorrect = numCorrect + 2;
 }

 if (numCorrect === 0 || numCorrect === 1) {
   console.log("U scored " + numCorrect + " point");
 } else if (numCorrect >= 2 && numCorrect < 7) {
   console.log("U scored " + numCorrect + " points");
 }

////////////////////////
//////// TASK 10 ////////
////////////////////////

// Запросить дату (день, месяц, год) и вывести следующую за ней дату.
//Учтите возможность перехода на следующий месяц, год, а также високосный год.

let date = prompt(
  "Please enter the date in format YYYY-MM-DD\nFor instance 1111-01-11"
);

let day = new Date(date);
day.setDate(day.getDate() + 1);
console.log(day);

//////// OR ////////

// let date = prompt(
//   "Please enter the date in format YYYY-MM-DD\nFor instance 1111-01-11"
// );

// let day = new Date(date);
// day =
//   "следующий день после этого" +
//   ": " +
//   (day.getDate() + 1) +
//   " число " +
//   day.getMonth() +
//   " месяца " +
//   day.getFullYear() +
//   " года";
// console.log(day);
