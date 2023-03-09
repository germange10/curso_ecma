async function* anothergeneration (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anothergeneration();
other.next() .then(Response=> console.log(Response.value));
other.next() .then(Response=> console.log(Response.value));
other.next() .then(Response=> console.log(Response.value));
console.log('hello')