const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btncalcular')
const presult = document.querySelector('#result')

// una buena practica es definir una funcion que es lo que va  aocurrir cuando ocurra algo

function btnOnclick () {
       const sumadeinput = Number(input1.value)+Number(input2.value) ;
       presult.innerText = 'resultado = ' + sumadeinput
}