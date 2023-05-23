console.warn('Задание II = вторая задача');

// const input1 = 50;
// const input2 = 100;

const input1 = prompt("Игра 2: введите первое число ОТ");
const input2 = prompt("Игра 2: введите второе число ДО");


const inputMin = Math.min(input1, input2);
const inputMax = Math.max(input1, input2);

console.log("диапозон чисел", inputMin, inputMax);

const guessNumber3 = (Math.round(Math.random() * (inputMax - inputMin)) + 1 + inputMin);
let maxTry = Math.round((inputMax - inputMin) * 30 / 100);
console.log(`загаданное число в диапозоне от ${inputMin} до ${inputMax} - это  ${guessNumber3}, количество попыток у Вас ${maxTry}`);

const tryArray = [];
let tryAnswer;


// console.log(tryAnswer);

let i = 0;
let direction = '';
while (guessNumber3 != +tryAnswer) {
  // console.log("цикл", i++)
  tryAnswer = prompt(`${direction} угадай число от ${inputMin} до ${inputMax}`);

  if (tryAnswer === null) {
    console.log("игра отменена");
    break;
  };

  if (Number.isFinite(+tryAnswer)) {

    // console.log("найдено", tryArray.find((element) => element === +tryAnswer));
    if (tryArray.find((element) => element === +tryAnswer) === undefined) {
      tryArray.push(+tryAnswer);
      maxTry -= 1;
    } else {
      console.log("это число вы уже вводили")
    }

    // console.log("цикл", i, "введено число", +tryAnswer, "попыток осталось", maxTry, "попытки", tryArray);

    if (guessNumber3 === +tryAnswer) {
      console.log(`Вы угадали, все Правильно! ${guessNumber3}`);
      break;
    }

    if (maxTry <= 0) {
      console.log(`количество попыток  ${maxTry}, вы проиграли`);
      break;
    }

    if (+tryAnswer > guessNumber3) {
      console.log("Меньше!");
      direction = 'Меньше!';
    }

    if (+tryAnswer < guessNumber3) {
      console.log("Больше!");
      direction = 'Больше!';
    }

  }
}


