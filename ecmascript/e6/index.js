//ES6 

// - Default parameters

function newFunction(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

// es6
function newFunctionES6(name = 'Oscar', age = 32, country = 'MX') {
  console.log(name, age, country);
}

newFunctionES6();
newFunctionES6('Ricardo', 23, 'Colombia');

/**
 * Concatenation - Template Literals
 */
 let hello = 'Hello';
 let world = 'World';
 let epicPhrase = hello + ' ' + world + '!';
 
 // es6
 let epicPhraseES6 = `${hello} ${world}!`;
 
 console.log(epicPhrase);
 console.log(epicPhraseES6);

 //Forma normal separaciones de línea.

//Antes para realizar multilíneas se usaba  backslash (alt+92) + n + "" continuar una línea
let Frase ="KANSClnclnsnspan pscapo apso  \n" //Multilíneas
+ "ljsndljnvsjd"

//Con los Template literals `` se puede sencillamente realizar un enter para pasar de línea.
let Frase_es6 = `Lknlasknlncs
dksvñsnkvlksnnldkvsnd`;

console.log(Frase);
console.log(Frase_es6);

// Destructuración de elementos:

//Antes los objetos podía ser creados así:

let person ={
    'name':'Alejandro',
    'nick':'Etrx',
    'num':'12314125'
};

//Si queríamos llamar  lo que componía ese objeto utilizabamos:
console.log(person.name,person.nick,person.num);

//Ahora con la destrucción de elementos, sucede una especie de resumen, donde se extrae un factor común del nombre del objeto, así:
let {name,nick, num} = person;

//Si queremos llamar  lo que compone este objeto utilizamos en ES6:
console.log(name,nick);


//Operador de prolongación: Permite expandir varios elementos. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.

let conjunto1= ['a','b','c'];
let conjunto2= ['x','y','z'];

let conjunto_union=['l','m','n',...conjunto1,...conjunto2]
console.log(conjunto_union);

//Asiganciones mediante let se pueden inicilizar variables  cuyo scope está solo en el bloque de código en el que está llamada, en otras palabras, solo puede existir las variables let dentro de las llaves en que se llaman. Var se seguirá usando para variables globales y locales.
 

{
    var VariableGlobal= "...";
}

{
    let VariableLocal= "***";
    console.log(VariableLocal); // Al estar dentro de las llaves o el bloque de código console se ejecutará con normalidad
}

console.log(VariableGlobal);
console.log(VariableLocal); 

// Al ejecutar esta arroja error al estar fuera del scope donde fue declarada.



//Const, nos permitirá establecer una variable como una constante, donde el valor declarado no podrá cambiar.

const a = "Soy constante";
a = "No soy constante" ; // Al ejecutar arroja error porque no puede cambiarse una constante luego de declararse.

console.log(a);


let name = 'oscar';
let age = 32;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //... 
}

const listOfNames4 = name => {
  //...
}

const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

  class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }
    sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
  }
  
  const calc = new calculator();
  console.log(calc.sum(2, 2));
  
  import { hello } from './module';
  
  hello();
  
  function* helloWorld() {
    if (true) {
      yield 'Hello, ';
    }
    if (true) {
      yield 'World';
    }
  };
  
  const generatorHello = helloWorld();
  console.log(generatorHello.next().value);
  console.log(generatorHello.next().value);
  console.log(generatorHello.next().value);

nameOfDog("Elmo"); 

function nameOfDog(name) 

{ console.log(name); };