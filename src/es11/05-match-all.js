//nos permite validar distintos tipos de cosas en diversos lugares

const regex = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

for (const match of fruit.matchAll(regex)){
    console.log(match);
}


// Tranformación del iterable retornado a array
const array = [...fruit.matchAll(regex)]
console.log(array)

