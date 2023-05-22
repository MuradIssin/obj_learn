// 'use strict';
// const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
// console.log('%c Модуль 4 урок 4 ', rainbow);

console.warn('Третья задача');

// Третья задача:



const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (nameIn, prefix) => {
  const newNames = [];
  for (const elem of nameIn) {
    newNames.push(prefix + ' ' + elem)
  }
  return newNames;
}

console.log(`Входящий список ${names} результат ${addPrefix(names, 'Mr')}`)

