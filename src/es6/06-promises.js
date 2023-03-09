const anotherFunction = ()=>{
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve("gj")
        }else{
            reject ("dat")
        }
    })
}

anotherFunction() // hasta aca funciona pero no devuelve nada
.then (response=> console.log(response)) // devuelve en el caso de que se halla completado eficazmente
.catch(err => console.log(err));// en el caso de haber un error te devuelve


//tenes una funcion que recibe como parametro otra funcion , la estructura normal de un funcion arroy const nomb = () => {} , pero dnetro de las llaves va a haber 
//una nueva estructura return new Promise((resolve,reject) => {})