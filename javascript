// creacion de variable "paso"
let paso = 0;

// creacion de funcion para contar los pasos
const pasos = () => {
    paso++;
    console.log(' ');
    console.log("***********************************************");
    console.log(`Paso ${paso}`);
    console.log("-----------------------------------------------");
}



//paso 1
pasos();

// matriz inicial "animal"
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 
    'Whale', 'octopus', 'rabbit', 'lion', 'dog'];


// Create the secretMessage array below
const secretMessage = animals.map(animal => `I have 1 ${animal}`);

console.log(secretMessage.join(', ')); // log en consola del mensaje secreto



// paso 2
pasos();

// array bigNumbers2
const bigNumbers2 = [100, 200, 300, 400, 500];
console.log('Array original '+bigNumbers2); // log en consola del array bigNumbers2

// creacion de funcion para mostrar nuevo array con const smallNumbers
const smallNumbers = bigNumbers2.map(number => number / 100);
console.log(`Array dividido ${smallNumbers}`); // log en consola del nuevo array
