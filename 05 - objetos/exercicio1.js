/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDePercurso(quantidadeKm, precoCombustivel){
        return quantidadeKm * this.gastoMedioPorKm * precoCombustivel
    }

}

const hillux = new Carro('Toyota', 'Preto', 1/10)
console.log(hillux.calcularGastoDePercurso(25, 5.50).toFixed(2))

const corolla = new Carro('Toyota', 'vermelho', 1/15)
console.log(corolla.calcularGastoDePercurso(25, 5.50).toFixed(2))


console.log(corolla.gastoMedioPorKm.toFixed(2))