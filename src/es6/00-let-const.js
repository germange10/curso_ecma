var lastname = "german"
lastname="nicolas"
console.log(lastname)


let fruit= "apple"
fruit= "banana"
console.log(fruit)


const animal= "tu_vieja"
animal= "tu_hermana"
console.log(animal)
//no se puede reasignar un valor con const

const fruits = () => {
    if (true){
        var fruit1 = "apple";//function scope
        let fruit2 = "banana";//block scope (solo pueden ser accedidas dentro del if)
        const fruit3 = "kiwi"; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();