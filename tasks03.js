// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Задание1 - Третья задача');

// Третья задача:


const arrayRandom3 = (arrayLength = 5, m = -100, n = 100, evenOrOdd) => {
  const startNumber = Math.min(n, m);
  const finishNumber = Math.max(n, m);

  if (evenOrOdd.toLowerCase() !== "even" && evenOrOdd.toLowerCase() !== "odd") {
    return "не был корректно введен even или odd"
  }

  const newArray = [];

  for (let i = 0; i < arrayLength; i++) {
    let newNumber = 0;
    let tryAgain = true;
    do {
      let newNumber = Math.round(Math.random() * (finishNumber - startNumber + 1)) + startNumber;
      if ((newNumber % 2 !== 0) && evenOrOdd.toLowerCase() === 'odd') {
        newArray.push(newNumber);
        tryAgain = false;
      }
      if ((newNumber % 2 === 0) && evenOrOdd.toLowerCase() === 'even') {
        newArray.push(newNumber);
        tryAgain = false;
      }
    } while (tryAgain)
    // newArray.push(Math.round(Math.random() * (finishNumber - startNumber + 1)) + startNumber)
  }
  return newArray;
}


console.log(`массив из случайных чисел ${arrayRandom3(100, -100, 100, 'even')}`);
