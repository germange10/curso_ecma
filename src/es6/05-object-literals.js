// enhanced object literals

function newuser (user,age,country,uid){
    return{
        user,
        age, 
        country,
        id:uid
    }
}

console.log(newuser("germange",26,"arg",1))


// lo que te permite es pasar unos valores genericos para ciertos atributos los cuales se completan o agregan en el consol.log final)