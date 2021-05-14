'use strict';

/* 1) Реализовать класс, описывающий окружность.
 В классе должны быть следующие компоненты:

поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. */

class Circle {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return this.r;
  }

  set radius(r) {
    this.r = r;
  }

  get d() {
    return this.r * 2;
  }

  p() {
    return Math.PI * this.r * this.r;
  }

  l() {
    return Math.PI * this.r * 2;
  }
}

let circle = new Circle(17);

console.log(circle.d);
console.log(circle.p().toFixed(2));
console.log(circle.l().toFixed(3));

/* 2) Реализовать класс, описывающий простой маркер. 
В классе должны быть следующие компоненты:

поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах);
метод для печати (метод принимает строку и выводит текст соответствующим цветом; 
текст выводится до тех пор, пока в маркере есть чернила; 
один не пробельный символ – это 0,5% чернил в маркере).

Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов. */

class Marker {
  constructor(color, count) {
    this.color = color;
    this.count = count;
  }

  getPrint(text, selector1, selector2) {
    const par = document.querySelector(selector1);
    const par2 = document.querySelector(selector2);

    for (let i = 0; i < text.length; i++) {
      if (this.count != 0) {
        if (text[i] == ' ') {
          this.count += 0.5;
        }
        par.innerHTML += text[i];
        par.style.color = this.color;
        this.count -= 0.5;
      } else {
        par2.innerHTML = 'Marker is over';
        break;
      }
    }
  }
}

class FillMarker extends Marker {
  constructor(color, count) {
    super(color, count);
  }

  fill(count) {
    if (count > 100) {
      count = 100;
    } else {
      this.count += count;
    }
  }
}
const textToPrint =
  'Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты. Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты.Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты.Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты.';

const printText = new Marker('red', 35);
printText.getPrint(textToPrint, '.par', '.par2');

const marker = new FillMarker('green', 32);
marker.fill(65);

marker.getPrint(textToPrint, '.par3', '.par4');

console.log(printText); // count = 0;
console.log(marker); // count = 57,5;

/* 3) Реализовать класс Employee, описывающий работника,
и создать массив работников банка.

Реализовать класс EmpTable для генерации HTML-кода таблицы 
со списком работников банка. Массив работников необходимо передавать 
через конструктор, а получать HTML-код с помощью метода getHtml().

Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().*/

class Employee {
  constructor(name, age, spec) {
    this.name = name;
    this.age = age;
    this.spec = spec;
  }
}
const employeesArray = [
  new Employee('vasia', 25, 'IT'),
  new Employee('petia', 30, 'UI'),
  new Employee('vasia', 25, 'IT'),
  new Employee('petia', 30, 'UI'),
  new Employee('vasia', 25, 'IT'),
  new Employee('petia', 30, 'UI'),
];

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }
  getHtml() {
    const array = this.employees;
    const table = document.querySelector('.myTable');
    const head = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'name';
    const th2 = document.createElement('th');
    th2.textContent = 'age';
    const th3 = document.createElement('th');
    th3.textContent = 'spec';
    head.append(th1, th2, th3);
    table.append(head);
    for (let i in array) {
      let row = document.createElement('tr');
      table.append(row);
      for (let j in array[i]) {
        let td = document.createElement('td');
        td.textContent = array[i][j];
        row.append(td);
      }
    }
  }
}
const emptable = new EmpTable(employeesArray);
emptable.getHtml();
