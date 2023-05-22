// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Вторая задача');

// Вторая задача:


const allCashbox = [4500, 3120, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {
  let total = 0;
  for (const index in arr) {
    total += arr[index]
  }
  return Math.floor(total / arr.length)
}

console.log(`Среднееарифметическое значение с округлением до целого числа: ${getAverageValue(allCashbox)}`);
