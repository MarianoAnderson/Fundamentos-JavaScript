/* Função invocada uma vez só, sem parametro e entre parenteses. "Main" */
(function () {
    let imc = calcularImc(80, 1.80)
    console.log(classificarImc(imc))
})()

function calcularImc(peso, altura) {
            /*  Metodo p/ elevar a uma potencia.*/
    return peso / Math.pow(altura, 2)
    
}

function classificarImc(imc) {
    if(imc < 18.5){
        return ('Abaixo do peso')
    } else if(imc >= 18.5 && imc <= 25) {
        return ('Peso normal')
    } else if(imc >= 26 && imc < 30) {
        return ('Acima do peso')
    } else if(imc >= 31 && imc <= 40) {
        return('Obeso')
    } else if(imc > 40) {
        return ('Obesidade grave')
    }
}
