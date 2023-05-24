// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Задание1 - Вторая задача');

// Вторая задача:

const arrayRandom2 = (arrayLength = 5, m = -100, n = 100) => {
  const startNumber = Math.min(n, m);
  const finishNumber = Math.max(n, m);
  // console.log(startNumber, finishNumber);
  const newArray = [];
  for (let i = 0; i < arrayLength; i++) {
    newArray.push(Math.round(Math.random() * (finishNumber - startNumber + 1)) + startNumber)
  }
  return newArray
}

console.log(`массив из случайных чисел ${arrayRandom2(100, -100, 5)}`);

