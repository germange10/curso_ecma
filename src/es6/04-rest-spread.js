//arrays destructuring (lo que hace es devolver los valores del array sin ese formanto)

let fruits = [`apple`, `banana`]
let [a,b]=fruits;
console.log (a,b);


// pensandolo seria tener un array al que igualas a ciertos parametros los cuales mostras

let numeros = [1,2,3,4,5,6,7,8,11,13]
let [a,b,c,d,e,f]=numeros
console.log(a,b,c,d,e,f)

// hay qeu poner una cantidad de parametros genericos igual a la cant de cosas que quiero ver del array
let numeros = [1,2,3,4,5,6,7,8,11,13,]
let [a,b,c,d,e,f,g,h,i,j,k]=numeros
console.log(a,b,c,d,e,f,g,h,i,j,k) //si te excedes te devuelve un undefined










// otra forma de hacer lo mismo

let fruits = [`apple`, `banana`]
let [a,b]=fruits;
console.log (a,fruits[1]);

// object destructuring

let user = {username: `german`,age:26};
let{username , age}= user;
console.log(username,age);

// object destructuring (otra forma de acceder)

let user = {username: `german`,age:26};
let{username , age}= user;
console.log(user.username,user.age);


//spread operator (tenes un obj al que le queres asignar una nueva propiedad ) 

let person ={name: "german", age:26}
let country = "arg"
let data={...person, country}
console.log(data);


//rest 

function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum (1,1,2,3)