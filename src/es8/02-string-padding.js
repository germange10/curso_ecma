const string = 'hello'
console.log(string.padStart(7,'hi'))

const string = 'hello'
console.log(string.padStart(9,'hi'))

const string = 'hello'
console.log(string.padStart(11,'hi'))

const string = 'hello'
console.log(string.padStart(20,'hi'))

const string = 'hello'
console.log(string.padStart(3,'hi'))

//lo que hace es devolverte un string con la cantidad de valores solicitados
//en el caso que sea menor que lo necesario va a intentar sobreescribirlo
// la cantidad faltante va a ser completada con el strig utilizado

const string = 'hello'
console.log(string.padStart(6,'_'))

const string = 'hello'
console.log(string.padEnd(6,'_'))
