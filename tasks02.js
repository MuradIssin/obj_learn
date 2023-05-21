// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Вторая задача');

// Вторая задача:
// Напишите функцию isPrime.
// Она принимает число и возвращает true, если число является простым, а в ином случае false.
// Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.
// Например, 5 - простое число, так как делится без остатка только на 1 и на себя.
// 151, 911, 1987 - так же простые числа
// Используйте цикл for в функции

const incomeNumber = 1987;

const isPrime = (income) => {
  for (i = 2; i < income; i++) {
    if (income % i === 0) {
      return false
    }
  }
  return true;
}

console.log(`${incomeNumber} -это простое число? ${isPrime(incomeNumber)}`);
