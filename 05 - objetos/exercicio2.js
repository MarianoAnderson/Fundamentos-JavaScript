/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2)
    }

    classificarImc() {

        const imc = this.calcularImc()

        if(imc < 18.5){
            return ('Abaixo do peso')
        } else if(imc >= 18.5 && imc <= 25) {
            return ('Peso normal')
        } else if(imc >= 26 && imc < 30) {
            return ('Acima do peso')
        } else if(imc >= 31 && imc <= 40) {
            return ('Obeso')
        } else if(imc > 40) {
            return ('Obesidade grave')
        }
    }
}


const jose = new Pessoa('José', 75, 1.75)
console.log(jose.calcularImc().toFixed(2))
console.log(jose.classificarImc())