function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoaUm = {
    nome: 'Maria',
    idade: 30
}

const pessoaDois = {
    nome: 'Carla',
    idade: 26,
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
};

console.log(calculaIdade.call(pessoaDois, 30));

// console.log(calculaIdade.apply(pessoaUm, [4]));