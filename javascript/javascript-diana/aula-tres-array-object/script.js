// o que são VETORES/ARRAYS

// //como declarar
// let array = ['string', 1, true];
// console.log(array);

//pode guardar vários tipos de dados
// let array = ['string', 1, true,];
// console.log(array);

// // for each
// array.forEach(function(item, index){console.log(item, index)})

// // push
// array.push('novo item');
// console.log(array);

// // pop
// array.pop();
// console.log(array);

// //shift
// array.shift();
// console.log(array);

// //unshift
// array.unshift('novo item inicio');
// console.log(array);

// //indexOf
// console.log(array.indexOf(true));

// //splice
// array.splice(0, 2);
// console.log(array);

//slice
// let novoArray = array.slice(0, 2);
// console.log(array);

// OBJETOS!

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno: 'objeto interno'}};

// console.log(object.objectInterno);

// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
