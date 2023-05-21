'use strict';
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
console.log('%c Модуль 4 урок 5 ', rainbow);

console.warn('Первая задача');

// Первая задача:
// Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения


const a = 10;
const m = 10;

for (let i = 1; i <= a; i++) {
  let stringPrint = '';
  let val;
  for (let j = 1; j <= m; j++) {
    val = i ** j + '';
    stringPrint += `|${' '.repeat(11 - val.length)} ${i ** j} `;
  }
  stringPrint += `|`
  console.log(stringPrint);
}

