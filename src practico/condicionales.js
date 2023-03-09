





const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


const tipoDeSuscripcion = "Expert"; // depende de como varie tipodesuscripcion se va a activar un u otro else if

if (tipoDeSuscripcion== 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == "Basic") {
    
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
     
}else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

}else if (tipoDeSuscripcion == 'ExpertPlus'){

    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

function tipodesuscripcion (suscripcion) { 
    if (suscripcion== 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if (suscripcion == "Basic") {
        
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
         
    } if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    
    } if (suscripcion == 'ExpertPlus'){
    
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;  
    }
    console.warn('ese tipo de suscripcion no existe')

}

tipodesuscripcion('zz') 

//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

const tiposdesuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertplus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function tipodesuscripcion (suscripcion){
    if (tiposdesuscripciones [suscripcion]) { 
        console.log (tiposdesuscripciones [suscripcion])
        return;    
    }
    
    console.warn('ese tipo de suscripcion no existe')
}

tipodesuscripcion( 'free')






const a = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertplus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}


function tipo (suscripcion) {
    if (a [suscripcion]){
        console.log(a[suscripcion])
        return;
    }
    console.warn ('esa suscripcion no existe')
}

tipo('cc')



























