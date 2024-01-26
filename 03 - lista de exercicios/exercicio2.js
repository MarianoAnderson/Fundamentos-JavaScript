/*  O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

const peso = 80
const altura = 1.80
    /*  Metodo p/ elevar a uma potencia.*/
const imc = peso / Math.pow(altura, 2)
console.log(imc)

if(imc < 18.5){
    console.log('Abaixo do peso')
} else if(imc >= 18.5 && imc <= 25) {
    console.log('Peso normal')
} else if(imc >= 26 && imc < 30) {
    console.log('Acima do peso')
} else if(imc >= 31 && imc <= 40) {
    console.log('Obeso')
} else if(imc > 40) {
    console.log('Obesidade grave')
}



// let resultado = imc(80, 1.80)

// if(resultado < 18.5){
//         console.log('Abaixo do peso')
//     } else if(resultado >= 18.5 && resultado <= 25) {
//         console.log('Peso normal')
//     } else if(resultado >= 26 && resultado < 30) {
//         console.log('Acima do peso')
//     } else if(resultado >= 31 && resultado <= 40) {
//         console.log('Obeso')
//     } else if(resultado> 40) {
//         console.log('Obesidade grave')
//     }

// function imc(peso, altura) {
//             /*  Metodo p/ elevar a uma potencia.*/
//     let calcular = peso / Math.pow(altura, 2)
//     return calcular
// }