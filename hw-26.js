"use strict";

/* 1. Создать объект, описывающий автомобиль
(производитель, модель, год выпуска, средняя скорость),
и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней
скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. */

const car = {
  manufacturer: "BMW",
  model: "E30",
  year: "1989",
  avgSpeed: 80,
  summary: function () {
    this.info = `There are whole info about this car:\n 
    Manufacturer: ${this.manufacturer}\n
    Model: ${this.model}\n
    Year: ${this.year}\n
    Average Speed: ${this.avgSpeed}\n`;
    return this.info;
  },
  timeForTrip: function (distance) {
    let time = distance / this.avgSpeed;
    let rest = Math.floor(time / 4);
    this.timeWithRest = time + rest;
    return this.timeWithRest;
  },
};
car.summary();
car.timeForTrip(500);
console.log(car.info, car.timeWithRest);

/* task 1 from lesson */

const person = {
  firstName: "Ivan",
  secondName: "Ivanov",
  showData: function () {
    console.log(`${this.firstName} ${this.secondName}`);
  },
};

person.showData();

const newPerson = Object.assign({}, person);

newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
newPerson.showData();

/* task 2 from lesson */

const myMath = {
  a: 5,
  b: 2,
  sum: function () {
    this.sum = this.a + this.b;
    console.log(`${this.a} + ${this.b} = ${this.sum}`);
  },
  multiplication: function () {
    this.multiplication = this.a * this.b;
    console.log(`${this.a} * ${this.b} = ${this.multiplication}`);
  },
  division: function () {
    this.division = this.a / this.b;
    console.log(`${this.a} / ${this.b} = ${this.division}`);
  },
  substraction: function () {
    this.substraction = this.a - this.b;
    console.log(`${this.a} - ${this.b} = ${this.substraction}`);
  },
};
myMath.sum();
myMath.multiplication();
myMath.division();
myMath.substraction();

/* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
и следующие функции для работы с этим объектом:

Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби. */

const drob = {
  numerator1: 3,
  denumerator1: 4,
  numerator2: 6,
  denumerator2: 7,
};

/* 3. Создать объект, описывающий время (часы, минуты, секунды),
 и следующие функции для работы с этим объектом:

Функция вывода времени на экран;
Функция изменения времени на переданное количество секунд;
Функция изменения времени на переданное количество минут;
Функция изменения времени на переданное количество часов.
Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75». */

const getTime = {
  hh: new Date().getHours(),
  mm: new Date().getMinutes(),
  ss: new Date().getSeconds(),
  timeNow: function (date) {
    this.time = date;
    return this.time;
  },
  timeChangeForSec: function (addSeconds) {
    this.seconds = addSeconds;
    return this.seconds;
  },
  timeChangeForMin: function (addMins) {
    this.minutes = addMins;
    return this.minutes;
  },
  timeChangeForHours: function (addHours) {
    this.hours = addHours;
    return this.hours;
  },
};

let date = new Date().toLocaleTimeString();
let secToAdd = Number(prompt(`how much seconds to add to current time?`));
let addSeconds = new Date();
addSeconds.setSeconds(addSeconds.getSeconds() + 10);
let addMins = new Date();
addMins.setMinutes(addMins.getMinutes() + 10);
let addHours = new Date();
addHours.setHours(addHours.getHours() + 10);

getTime.timeNow(date);
getTime.timeChangeForSec(addSeconds);
getTime.timeChangeForMin(addMins);
getTime.timeChangeForHours(addHours);

console.log(getTime.time);
console.log("seconds -", getTime.seconds);
console.log("minutes -", getTime.minutes);
console.log("hours -", getTime.hours);
