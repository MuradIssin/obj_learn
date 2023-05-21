// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Третья задача');

// Третья задача:
// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"



const incomeString = "Привет мир!";

const reverseString = (incomeStr) => {
  let resultStr = '';
  for (let i = incomeStr.length - 1; i >= 0; i--) {
    resultStr += incomeStr[i];
    // console.log(i, resultStr);
  }
  return resultStr;
}

// console.log(reverseString(incomeString));
console.log(`принятая строка "${incomeString}" результат "${reverseString(incomeString)}"`)
