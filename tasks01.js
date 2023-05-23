'use strict';
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
console.log('%c Модуль 4 урок 7 ', rainbow);

console.warn('Задание1 = Первая задача');

// массивы

// const arrayRandom = Array(100);

const arrayRandom = (arrayLength = 5) => {
  const startNumber = 1;
  const finishNumber = 100;
  const newArray = [];
  for (let i = 0; i < arrayLength; i++) {
    newArray.push(Math.round(Math.random() * (finishNumber - startNumber + 1)))
  }
  return newArray
}

console.log(`массив из случайных чисел ${arrayRandom(100)}`);
