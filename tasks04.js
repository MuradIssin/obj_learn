// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('не обязательное задание ');

// 4 задача:

const allCashboxNew = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = allCash => {
  let goods = 0;
  let summaGoods = 0;
  for (const elem of allCash) {
    goods += elem[0];
    summaGoods += elem[1];
  }
  return Math.round(summaGoods / goods * 100) / 100
}

console.log(`средняя стоимость одного товара: ${getAveragePriceGoods(allCashboxNew)}`)
