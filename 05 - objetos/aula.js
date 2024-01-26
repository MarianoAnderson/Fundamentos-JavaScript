// class pessoa  {
//     nome;
//     idade;

//     descrever() {
//         console.log(`My name is ${this.nome} and my age is ${this.idade}`)
//     }
// }


// const anderson = new pessoa
// anderson.nome = "anderson Mariano"
// anderson.idade = 25

// const aquiles = new pessoa
// aquiles.nome = "Aquiles"
// aquiles.idade = 29

// console.log(anderson)
// console.log(aquiles)

// anderson.descrever()


class pessoa {

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2024 - idade
    }

    descrever() {
        console.log(`My name is ${this.nome} and my age is ${this.idade}`)
    }
}

const anderson = new pessoa("Anderson Mariano", 26)
const talita = new pessoa("Talita", 32)

compararPessoas(anderson, talita)

// console.log(anderson)
// console.log(aquiles)

console.log(talita)
anderson.descrever()

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`)
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}