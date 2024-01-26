// const nomes = ['Anderson', 'Maria', 'José']

// nomes.push('Talita')
// nomes[1] = 'Andreza'
// nomes.shift()

// console.log(nomes)


const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(5)
notas.push(8)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length
console.log(media.toFixed(1))


// const nome = 'francisco anderson mariano bezerra'

// for(let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

