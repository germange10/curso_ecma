//la forma normal
const users= {
    germange:{
        country:'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.germange.country)

//ahora podemos preguntar y si es que esta nos devuelve la informacion

const users= {
    germange:{
        country:'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users?.germange?.country)

// EN EL CASO QUE LE PEDIMOS ALGO QUE NO EXISTE
const users= {
    germange:{
        country:'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users?.germange?.age)
