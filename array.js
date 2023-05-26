'use strict';

const testArray = [1, 2, 88, 45, 6, 8, 9];

// вырезать и присвоить значение
const removed = testArray.splice(1, 2, 999); //1 - это место, 2 - это количество, 999 добавляется с последнего места
console.log(removed); //[2, 88]
console.log(testArray); // [1, 999, 45, 6, 8, 9]

// поиск значения в массиве
console.log(testArray.includes(9));//true

// возращает строки с разделителем
console.log(testArray.join('|')); //  1|999|45|6|8|9

// сортировка по символам
console.log(testArray.sort()); // [1, 45, 6, 8, 9, 999]

// сортировка по цифрам
console.log(testArray.sort((a, b) => a - b)); // [1, 6, 8, 9, 45, 999]
console.log(testArray.sort((a, b) => b - a)); // [999, 45, 9, 8, 6, 1]

// перевернуть массив
console.log(testArray); // [999, 45, 9, 8, 6, 1]
console.log(testArray.reverse()); // [1, 6, 8, 9, 45, 999]


// деструктуризация 
const coord = [54, 26];

// 1 способ деструктуризаци 
const x = coord[0];
const y = coord[1];
console.log(coord[0]);
console.log(coord[1]);
console.log(x, y);
// 2 способ деструктуризация 
const [xcoord, ycoord] = coord;
console.log(xcoord, ycoord);
// глубина десруктуризации
const numbers = [153, 3, [22, 0], 54, 54, 6, 8, 8]
const [, , oDeep, , pDeep] = numbers
console.log(oDeep, pDeep);//[22, 0] 54

// rest-оператор, оператор остатка что осталось
const [xRest, yRest, ...arr] = numbers; // [153, 3, [22, 0], 54, 54, 6, 8, 8]
console.log(xRest, yRest, "ostatok", arr); // 153 3 'ostatok' (6) [Array(2), 54, 54, 6, 8, 8]

// slice, нарезает остаток определенного номера 
const newArr = numbers.slice(6); //const numbers = [153, 3, [22, 0], 54, 54, 6, 8, 8]
console.log(newArr) //[8, 8]

// пример rest с текстом
const strRest = 'heLLO WORLD!';
const [a, ...restStr] = strRest;
console.log(a.toUpperCase() + restStr.join('').toLowerCase());

// SPREAD - объединение массово
const spredArray = [22, 33, 44, 55, 66];
const newNumber = [1, ...spredArray, 999, 888, 777, 555];
console.log(newNumber)

// клонирование
const cloneSpredArray = [...spredArray]; //[22, 33, 44, 55, 66];
console.log(cloneSpredArray) //[22, 33, 44, 55, 66];

// клонирование с помощью slice
const sliceArray = [88, 0, 22, 33, 44, 55, 66];
const cloneSliceArray = sliceArray.slice();
console.log(cloneSliceArray); //[88, 0, 22, 33, 44, 55, 66]

// concat 
const concatArray = [1, 2, 8, 88, 0, 22, 33, 44, 55, 66];
const newConcatArray = [].concat(concatArray);
console.log(newConcatArray); // [1, 2, 8, 88, 0, 22, 33, 44, 55, 66]

// методы .forEach
const forArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 110];
forArray.forEach(() => {
  console.log(`-`); // --------------------
})

forArray.forEach((item) => {
  console.log('item', item); // 11 22 33 ......
})

forArray.forEach((item, index) => {
  console.log('item', item, 'index', index); // 11 22 33 ......
})

forArray.forEach((item, index, arr) => {
  console.log('item', item, 'index', index, 'array', arr); // 11 22 33 ......
})

// .find - найдет первое значение по условию
const forFindArray = [-11, 22, -33, 44, -55, -66, 77, 88, 99, 100, 110];

console.log(forFindArray.find((item, index, arr) => {
  return item > 0
})) // 2

// .filter
console.log(forFindArray.filter((item, i, arr) => item > 44)); // [77, 88, 99, 100, 110]

// .findIndex - возвращает первый индекс удовлетворяющий условиям
console.log(forFindArray.findIndex(item => item > 100)); // 10

// .indexOf - возвращает  индекс по значению
console.log(forFindArray.indexOf(77)); // 6

// 
// 
// .map возвращает новый массив по заданным условиям или действиям
const forMap = [-11, 22, -33, 44, -55, -66, 77, 88, 99, 100, 110];
const newMap = forMap.map((item) => {
  return item ** 2;
})
console.log(newMap)

// .some возвращает true/false по условиям - Если ХОТЬ один элемент является строкой
const forSome = [777, -11, 22, -33, 44, -55, -66, 77, '88', 99, 100, 110];
const newSome = forSome.some((item) => typeof item === "string")
console.log(newSome); // TRUE

// .every возвращает true/false по условиям - КАЖДЫЙ должен удовлетворять условиям
const forEvery = [777, -11, 22, -33, 44, -55, -66, 77, '88', 99, 100, 110];
const newEvery = forSome.every((item) => typeof item === "string")
console.log(newEvery); // TRUE

// .reduce , 0 позволяет учитывать в операциях
const forReduce = [1, 2, 3, 4];
const newReduce = forReduce.reduce((acc, item, i, arr) => {
  console.log('reduce', acc, "item", item);
  return acc + item;
}, 0)
console.log(newReduce);

// .flat выпрямление массива 
const flatArray = [[12, 45], [0, 8], 2, [40, 55]];
console.log("плоский массив", flatArray.flat())

// .flat выпрямление массива 
const flatDeepArray = [[12, 45], [0, [4, 1]], 2, [40, 55]];
console.log("плоский глубокий массив", flatDeepArray.flat().flat());
console.log("плоский глубокий массив", flatDeepArray.flat(2));
console.log("плоский глубокий массив", flatDeepArray.flat(Infinity));


// .flatmap 
const forFlatMap = ['привет sem*4 руки', '33 pjkj', "44 ghbdtn", "-55"];
const newFlatMap = forFlatMap.flatMap(str => str.split(' '))
console.log('newFlatMap', newFlatMap);