/* Faça um programa para calcular o valor de uma viagem.

Você tera 3 variaveis. Sendo elas:
1 - Preço do precoCombustivel
2 - Gasto do precoCombustivel
3 - Distancia em km
*/

const precoCombustivel = 5.79
const kmPorLitros = 12
const distanciaEmKM = 1580


const resultado = (distanciaEmKM / kmPorLitros) * precoCombustivel

console.log(resultado.toFixed(2))

