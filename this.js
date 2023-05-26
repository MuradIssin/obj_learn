`use strict`

// this для стрелочных функции не используется !!!!!!!!!
// - контекст вызова
// this - всегда ссылается на объект, во время его вызова, так создается запись активации,
//  правила - шт.
// this существует внутри функции и опередяется внутри функции

function one() {
  console.log('one', this);
  two();
};

function two() {
  console.log('two', this);
  three();
};

function three() {
  console.log('three', this);
  // two ();
};

one();

// 1. привязка по умолчанию
// 2. this определяется во время вызова
const obj = {
  x: 15,
  y: 10,
  foo() {
    console.log(`this `, this)
  }
};
obj.foo();

// явная привязка, нужна для использования конкретных объектов при вызове функции
// .apply - принимает только массивы

const objNew = {
  x: 45,
  y: 40,
  foo() {
    console.log(`this `, this)
  }
};

function thisFoo(a, b, c) {
  console.log(`thisFoo`, a, b, c)
  console.log(this);
}

console.log(`call apply bind`)
thisFoo.call(objNew, 8, 9, 10); // call принимает сразу this и параметры функции
thisFoo.apply(objNew, [`apply`, 11, 12]); // принимает this и объект который расспаковывает в виде параметра массив
const bar = thisFoo.bind(objNew, 22, 24); // принимает объект и параментры функции, но можно их передавать не все 
bar(3);


// forEach
console.log(`for Each`)
const arr = [1, 2, 3];
arr.forEach(item => console.log(item, this), obj) // ошибка стрелочная функция тут не работает

arr.forEach(function (item) { console.log(item, this) }, obj) // в this будет поподать obj


// привязка New
// пока не изучали

