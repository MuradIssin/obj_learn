
console.warn('Задание II = Первая задача');

const guessNumber = (Math.round(Math.random() * 99) + 1);

// console.log(`загаданное число ${guessNumber}`);
let answer;
let hint = '';

while (guessNumber !== +answer) {

  answer = prompt(`${hint}угадай число от 1 до 100`);

  if (answer === null) break;

  // console.log(typeof +answer);
  if (Number.isFinite(+answer)) {
    // console.log("число")

    if (+answer > guessNumber) {
      hint = 'Меньше! ';
      // answer = prompt("Меньше!, введите новый вариант");
      // if (answer === null) break;
    } else if (+answer < guessNumber) {
      hint = 'Больше>! ';
      // answer = prompt("Больше>!, введите новый вариант");
      // if (answer === null) break;
    }
  } else {
    hint = 'Введи число! ';
  }
}

if ((answer !== null) && (guessNumber === +answer)) {
  console.log(`Правильно! ${guessNumber}`)
}
else {
  console.log(`Game Over`);
}
