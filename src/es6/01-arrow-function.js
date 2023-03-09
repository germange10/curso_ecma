function square(num){
    return num * num;
}
const square = (num) =>{
    return num * num;
}

const square = num => num * num; // funcion con el returne implicito (solo funciona cuando hay una sola linea)


const sumar = (a,b) => a+b


console.log(sumar(8,6))


const varias_lineas = ()=>{
    console.log('uno')
    console.log('dos')
    console.log('tres')
}

varias_lineas()

//un casos con arrays 

const numero = [1,2,3,4,5]

numero.forEach((el,index) => console.log(`${el} esta en la posicion ${index} `))

