
console.warn('Задание II = Первая задача');

const guessNumber = (Math.round(Math.random() * 99) + 1);

// console.log(`загаданное число ${guessNumber}`);
let answer;
answer = prompt("угадай число от 1 до 100");
while (guessNumber != +answer) {
  if (answer === null) break;
  if (+answer > guessNumber) {
    answer = prompt("Меньше!, введите новый вариант");
    if (answer === null) break;
  }
  if (+answer < guessNumber) {
    answer = prompt("Больше>!, введите новый вариант");
    if (answer === null) break;
  }
}

if ((answer != null) && (guessNumber === +answer)) {
  console.log(`Правильно! ${guessNumber}`)
}
else {
  console.log(`Game Over`);
}
