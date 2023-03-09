//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

impprimelm ( ['hola','como','estas',1] )


function impprimelm  (arr) {

    console.log(arr[0])
}

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

impprimelm ( ['hola','como','estas',1] )

function impprimelm  (arr) {
    for (let i=0; i < arr.length ; i++)
    console.log(arr[i])
} // en ql caso de que sea <= va a darte un valor de mas que va a ser undefined


//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const obj = {nombre:'german',
age:25,
weight:82,
numrs:[1,2,3,13],
}

Object.values(obj)  //esto en la consola funciona (te los imprime todos juntos)


 

const obj = {nombre:'german',
age:25,
weight:82,
numrs:[1,2,3,13],
}

function impprimelmobj  (obj) {
    const arr = Object.values (obj)
    for (let i=0; i < arr.length ; i++)
    console.log(arr[i])
}

impprimelmobj  (obj)   

// los imprime uno por uno





