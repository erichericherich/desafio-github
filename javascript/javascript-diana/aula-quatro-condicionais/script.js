// var jogador1 = 0;
// var jogador2 = 0;
// var placar;

// //if ternário
// jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('jogadores inválidos!')

//     // usando if
//     if (jogador1 > 0 && jogador2 == 0) {
//         console.log('jogador 1 marcou ponto!')
//         placar = jogador1 > jogador2
//     }
//     // usando else if 
//     else if (jogador2 > 0 && jogador1 == 0) {
//         console.log('jogador 2 marcou ponto!')
//         placar = jogador2 > jogador1
//     }
//     // usando else
//     else{
//         console.log('ninguém marcou ponto!')
//     }

// switch (placar) {
//     case placar = jogador1 > jogador2:
//         console.log('jogador 1 venceu!');
//         break;
//     case placar = jogador2 > jogador1:
//         console.log('jogador 2 venceu!');
//         break;
//     default:
//         console.log('ninguém ganhou!');
// }

let array = ['valorUm', 'valorDois', 'valorTres', 'valorQuatro', 'valorCinco'];

let object = {propriedadeUm: 'valorUm', propriedadeDois: 'valorDois', propriedadeTres: 'valorTres',}

// for - executa uma instrução até que ela seja falsa!

// for (let indice = 0; indice < array.length; indice++) {
//     console.log(indice);
// }

// for/in executa repetição a partir de uma propriedade!
// com array
// for (let i in array) {
//     console.log(i);
// }

// // com object
// for (i in object) {
//     console.log(i);
// }

// for/of - executa repetição a partir de um valor!
// for (i of array) {
//     console.log(i);
// }

// // com objects
// for (i of object.propriedadeUm) {
//     console.log(i);
// }
// //não dá para ser utilizado :/

//while / verificação antes da execução!
// var a = 0;

// while(a < 10) {
//     a++;
//     console.log(a);
// }

//do/while / verificação é feita depois da execução!

// var a = 0
// do {
//     a++;
//     console.log(a);
// } while (a < 10)