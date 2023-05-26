'use strict'

// создание объекта
const obj = new Object();
console.log('obj: ', obj)

// создание объекта обычный способ
const userUsual = {};
console.log('obj: ', userUsual);

// создать пустой объект
const objEmpty = Object.create(null);

// пример обращения с объектами. объект, массивыб функции
const city = 'almaty';
const user = {
  city,
  login: 'muradi',
  firstName: 'murad',
  cars: ['opel', 'mazda', 'bmw'],
  status: {
    alive: true,
    wanted: true,
    free: true,
  },
  say() {
    console.log('меня зовут ')
  },
}
const str = 'firstName';
console.log(user.login);
console.log(user[str]);
user.say();

// пример удаления элемента объекта, не рекомендуется
delete user.cars;

// пример изменения
user.login = "alex";
user.smoke = false;

console.log('весь объект: ', user)


// два одинаковых объекта не будут равны

// перебор объектов
const statusObj = {
  login: 'muradi',
  firstName: 'murad',
  cars: ['opel', 'mazda', 'bmw'],
  say() {
    console.log('меня зовут ')
  },
}
// перебор объектов, 
for (const task in statusObj) {
  console.log(`statusObj.${task} = ${statusObj[task]}`)
}
// statusObj.login = muradi
// obj.js:58 statusObj.firstName = murad
// obj.js:58 statusObj.cars = opel,mazda,bmw
// obj.js:58 statusObj.say = say() {
//     console.log('меня зовут ')
//   }

// через .key
const keys = Object.keys(statusObj);
for (const key of keys) {
  console.log(`statusObj.${key} = ${statusObj[key]}`)
}

// через .values
const values = Object.values(statusObj);
console.log(values);

for (const key of values) {
  console.log(`statusObj*****.${key} `)
}


// через .entries возвращает массив ключ+значение
const entries = Object.entries(statusObj);
console.log('entries', entries);

for (const [key, value] of entries) {
  console.log(`statusObj*Entries.${key} * ${value} `)
}

