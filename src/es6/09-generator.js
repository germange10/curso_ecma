function* iterate(array){
    for (let value of array)//por cada elemto del array
    {
        yield value;
    }
}

const it = iterate(['oscar','david','ana','juan'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)