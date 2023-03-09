//vamos a pasar de un arrays de arrays a un obj en js

const entries = new Map ([['name','oscar'],['age',34]])
console.log(entries)
console.log(Object.fromEntries(entries));