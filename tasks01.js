'use strict';
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
console.log('%c Модуль 4 урок 6 ', rainbow);

console.warn('Первая задача');

// массивы


const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (all, failed) => {
  const passedArr = [];
  for (const elem of all) {
    if (!failed.includes(elem)) {
      passedArr.push(elem);
    }
  }
  return passedArr
}

console.log(`Список студентов сдавших экзамен: ${filter(allStudents, failedStudents)}`);
