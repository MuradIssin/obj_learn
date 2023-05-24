'use strict'
const rainbow = 'padding: 10px 5px; margin-bottom: 6px; border: 1px solid blue; text-shadow: 1px 1px 2px white,  0 0 0.8; color: orange';
console.log('%c Модуль 4 урок 8 ', rainbow);

console.warn('Задание I ');

const cart = {
  items: [], //товары
  totalPrice: 0, // общая стоимость товаров
  count: 0, //количество товаров
}


Object.defineProperty(cart, 'totalPrice', {
  get() {
    return calculateItemPrice()
  }
  // set() {

  // }
});

// удалено уроком 9
// const getTotalPrice = () => {
//   return cart.totalPrice;
// };

const add = (nameProduct, priceProduct, quantity = 1) => {
  const arrayGood = [nameProduct, priceProduct, quantity];
  cart.items[cart.items.length] = arrayGood;
  // cart.totalPrice = calculateItemPrice();
  increaseCount(quantity);
};

const increaseCount = (add) => {
  cart.count += add
};

const calculateItemPrice = () => {
  const newTotal = cart.items.reduce((acc, item) => {
    return item[1] + acc;
  }, 0)
  return newTotal;
};

const clear = () => {
  cart.items = [];
  cart.totalPrice = 0;
  cart.count = 0;
};

const print = () => {
  console.log(`текущая корзина :`)
  cart.items.forEach((item) => {
    console.log(`${item[0]}  общая стоимость ${item[1]} количество ${item[2]}`)
  });
  console.log(`общая стоимость корзины ${cart.totalPrice} уе`)
};


// вызываем добавление товара
add("good", 100, 20);
add("good2", 1, 200);
add("good3", 450);
add("good4", 45, 888);
add("good5", 450, 88);


print();

console.log("задание 9 урока модуль 4");
// cart.totalPrice = 10;

print();

// clear();
// print();


