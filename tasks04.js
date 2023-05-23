// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 7 ', rainbow);

console.warn('Задание1  - не обязательное задание ');

// 4 задача:

const leapYear = (m = 2000, n = 2024) => {
  const startYear = Math.min(n, m);
  const finishYear = Math.max(n, m);

  const newArray = [];

  for (let i = startYear; i <= finishYear; i++) {
    if (i % 4 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}


console.log(`Високосный год ${leapYear(1900, 2024)}`);
