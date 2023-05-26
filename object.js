'use strict';

const obj1 = {
  a: 1,
  b: {
    a: 2
  },
  c: 3
};

const obj2 = {
  a: 5,
  b: {
    d: 4
  },
}

// объединяет, слева направо 
Object.assign(obj1, obj2);
console.log('obj1', obj1)

// новый объект как результат слияния двух / клонирования / для ссылочных типов это не работает
const obj3 = Object.assign({}, obj1, obj2);
console.log('obj3', obj3);

// пример клонирования с дополнительным свойством
const obj4 = { ...obj2, g: 55, y: { i: 4 }, ...obj1 }
console.log('obj4', obj4)

// пример деструктуризации, суть такая мы присваеваем константе значение отдельных элементов объекта
const hero = {
  login: 'deadpool',
  firstName: 'Уэйд',
  otherWeapons: [
    'm16',
    'ргд-5'
  ],
  transport: {
    cars: {
      family: ['vw', 'opel', 'lada'],
      sport: ['BMW', 'mazda', 'porshe']
    }
  },
  alive: true,
  group: "justine league"
};
const { login: nameLogin, otherWeapons, transport: { cars }, group = 'avengers' } = hero;//возможность переименовать > login: nameLogin,  group = 'avengers' - значение по умолчанию 
console.log(`2222`, group, nameLogin, otherWeapons, cars)



// использование ? когда нету данных, ?? подставка значений вместо данных
const hero3 = {
  namesHero: 'murad',
  age: 45,
  avto: ['mazda', 'toyota'],
}
console.log('вопросы', hero3?.home);
console.log('вопросы', hero3?.home ?? `earth`);

// использование this. 
const heroThis = {
  names: "murad",
  say() {
    console.log(` меня зовут ${heroThis.names}`)
  },
  sayThis() {
    console.log(`меня точно зовут this т.е. = ${this.names}`)
  }
}
heroThis.say();
heroThis.sayThis();

// JSON - перевод объекта в строку JavaScriptObjectNotation
console.log(JSON.stringify(hero3));
// JSON parse - создание объекта из строки
const newObj = JSON.parse(JSON.stringify(hero3));
console.log(newObj)

