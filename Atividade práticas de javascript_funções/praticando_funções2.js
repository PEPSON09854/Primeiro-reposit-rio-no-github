const PESSOA1 = {
    nome: 'Maria',
    idade: 30,
};

const PESSOA2 = {
    nome: 'Carla',
    idade: 26,
};

const ANIMAL1 = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
};

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, 
    ${this.nome} terá 
    ${this.idade + anos} anos de idade.
    `;
}

console.log(calculaIdade.call(PESSOA2, 30));
console.log(calculaIdade.apply(PESSOA1, [10]));