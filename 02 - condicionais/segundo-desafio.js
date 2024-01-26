/* Faça um programa para calcular o valor de uma viagem.

Voçê terá 5 variaveis. Sendo elas:
1 - Preço da gasolina.
2 - Preço do etanol.
3 - O tipo de combustivel que está no seu carro.
4 - Gasto médio do combustivel do varro por km.
5 - Distancia em km da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79
const precoGasolina = 6.66
const kmPorLitros = 10
const distanciaEmKM = 100
const tipoCombustivel = 'Gasolina'

if(tipoCombustivel === 'Etanol') {
    const resultado = (distanciaEmKM / kmPorLitros) * precoEtanol
    console.log(resultado.toFixed(2))

}  else {
    const resultado = (distanciaEmKM / kmPorLitros) * precoGasolina
    console.log(resultado.toFixed(2))

}


