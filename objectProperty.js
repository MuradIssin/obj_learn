'use strict';

const car = {
  car: `mini`,
  model: `cooper`,
  price: 50000,
};

// property объектов
Object.defineProperty(car, `model`, {
  configurable: true, //запрет на удаление
  enumerable: true, // запрет на отображение
  writable: true, // запрет на изменение
})

// удаление элемента
delete car.model

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

// удаление элемента
car.model = `camry`

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));


// запрет на удаление 

Object.defineProperty(car, `model`, {
  configurable: false, //запрет на удаление
  enumerable: false, // запрет на отображение
  writable: false, // запрет на изменение
})

//delete car.model // удаление не работает теперь

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

// запрет использование enumerable: false - в итерациях
console.log(`отображение в списках`);

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

// запрет изменение writable: false,
// car.model = `new`;

// getter setter 
Object.defineProperty(car, `fullName`, {
  get() {
    return `${this.car} ${this.model}`;
  },
  set(val) {
    this.comment = val;
  },
})

console.log(car.fullName);
car.fullName = 'тачка огонь!'
console.log(car);


// функции в объектах get set

const carGet = {
  car: `mini`,
  model: `cooper`,
  price: 50000,
  get comment() {
    return this.trueComment;
  },
  set comment(val) {
    if (typeof val === 'string') {
      this.trueComment = val;
    }
  },
  trueComment: 'not',
};

console.log(`get`, carGet.comment);
carGet.comment = 999;
console.log(`get`, carGet.comment);

carGet.comment = `тачка точно огонь`;
console.log(`get`, carGet.comment);
