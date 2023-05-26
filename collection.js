`use strict`;

// коллекция 
const actors = new Map();

// запись в коллекцию Set
actors.set('betmet', 'ben afflect');
actors.set('nft', 'nilson afflect');
actors.set('mazda', 'MPV');

console.log(`actors`, actors);

// получение данных из коллекции - get
console.log(actors.get('dfsf'));


// .kyes
console.log(`keys`, actors.keys());
// .values в массив
console.log(`keys array`, [...actors.keys()]);

// .values
console.log(`values`, actors.values());
// .values в массив
console.log(`values`, [...actors.values()]);

// .entries
console.log(`entries`, actors.values());
// .values в массив
console.log(`entries array`, [...actors.values()]);

// .delete
actors.delete('mazda');
console.log(`delete`, [...actors.values()]);


// clear - чистка коллекции
actors.clear();
console.log(`values`, actors.values());

// clear - чистка коллекции
actors.clear();
console.log(`values`, actors.values());

//
actors.set('betmet', 'ben afflect');
actors.set('nft', 'nilson afflect');
actors.set('mazda', 'MPV');


// size - размер
console.log(`size`, actors.size);

// for of
for (const hero of actors) {
  console.log(`for of = `, hero);
}

// for of array
for (const [hero, actor] of actors) {
  console.log(`for of array = `, hero, 88, actor);
}


// присвоение объекта коллекции
const murad = {
  names: `issin`,
  ages: `45`,

}
const classes = new Map();
classes.set(murad);
console.log(classes)

// WeakMap коллекция
// не возможности добавить объект
// не итерируется
// .get не работает

// .has - возвращаем есть ли значение true/false

// Set коллекция 
// .add для добавление используется, только для Set 
const auto = new Set();
auto.add('mazda');
auto.add('toyota');
auto.add('mazda');

console.log(`set: `, auto)

// пример уникальных записей
console.log(Array.from(new Set([3, 1, 2, 2, 2, 3, 0, 43, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4])));
console.log([...(new Set([3, 1, 2, 2, 2, 3, 0, 43, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]))])