// nos devuelve una matris de cualquier sub matriz
const array=[1,2,3,4,5,[4,6,9,[7,8,9,]]]
console.log(array.flat(3))

//flatmap

const array2 =[1,2,3,4,]
console.log(array2.flatMap(v=>[v,v*2]));