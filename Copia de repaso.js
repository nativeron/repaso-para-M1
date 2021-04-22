const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js');


// Recursion

// Escribir una funcion que a partir de un arreglo que en cada posicion puede tener un elemento
// o arreglos anidados, vaya logeando todos los elementos de a uno


let array = [1,2,[3,4,5],6,[7,8,[9,10]]];
                                      

function arrayLogging(array){
  // recorro mi arreglo 
  for(let i = 0; i<array.length; i++){
    // me pregunto si el elemento en el cual estoy parado es o no un arreglo 
    // si es un arreglo, necesiti volver a iterar 
    // ¿como lo hago? me vuelvo a llamar, pero ahora con este nuevo arreglo
    if(Array.isArray(array[i])){
      arrayLogging(array[i]); 
    }else{
      console.log(array[i]); 
    }
  }
}

arrayLogging(array); 

// Crear dos queues agregando en cada caso los valores de los siguientes arreglos:

let one = [1, 10, 5, 7]; 
let two = [2, 4, 95, 8]; 

var oneQ = new Queue(); 
var twoQ = new Queue(); 

for(let i = 0; i<one.length; i++){
  oneQ.enqueue(one[i]);
}

for(let i = 0; i<two.length; i++){
  twoQ.enqueue(two[i]); 
}

console.log(oneQ); 
console.log(twoQ); 

// Queue >> FIFO >> 
// Stack >> LIFO >> 


// Dadas las dos queues recien creadas que tienen el mismo tamaño, devolver un arreglo en el cual
// vayamos agregando de forma alternada elementos de cada queue.
// 1[queue1] 2[queue2] 3[queue1]

function mixQueue(qO, qT){
  let array = []; 
  for(let i = qO.size(); i !==0; i--){
    let one = qO.dequeue(); 
    let two = qT.dequeue(); 
    array.push(one); 
    array.push(two); 
  }
  return array; 
}

console.log(mixQueue(oneQ, twoQ)); 

// Crear una funcion que reciba un string indicando un idioma y retorne otra funcion que reciba
// un nombre y retorne el saludo indicado segun el idioma (usar ingles, italiano o en español caso constrario)
// EJ:
// var saludoIngles = crearSaludo ("ingles");
// saludoIngles("Martina") >> 'Hello Martina'
function crearSaludo(idioma){
  var frase = ""; 
  switch(idioma){
    case 'ingles':
      frase = 'Hello'; 
      break; 
    case'italiano':
      frase = 'Ciao'; 
      break;
    default:
      frase = 'Hola'; 
      break;
  }
  return function (nombre){
    console.log(frase + ' ' + nombre); 
  }
}

var saludoInlges = crearSaludo('ingles'); 
saludoInlges('Martina'); 
saludoInlges('Roberto'); 

// Hello Martina 

// if(idioma === ingles){

// }else if(idioma === italiano){

// }else {

// }


// var saludoIngles = crearSaludo ("ingles");
// saludoIngles("Martina");


// Closure

// Cree una funcion banco que reciba como parametro su balance inicial de cuenta
// y retorne un objeto con dos funciones. 'miBalance' y 'depositar',
// que me permitan consultar y agregar dinero en mi cuenta. Utiliza closures

function banco(balanceInicial){
  var balance = balanceInicial; 

  return {
    miBalance: function (){
      return balance; 
    }, 
    depositar: function(dinero) {
      return balance = balance + dinero; 
      // balance+=dinero; 
    }, 
  }
}

const cuenta = banco(100); 
console.log(cuenta.miBalance());
console.log(cuenta.depositar(100)); 
console.log(cuenta.miBalance());  

// spread operator 



