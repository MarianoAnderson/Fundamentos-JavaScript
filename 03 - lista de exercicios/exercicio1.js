/* Faça um algoritimo que dado as 3 notas tiradas por um aluno em semestre da faculdade calcule e imprima a
sua media e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3

classificação:
- Media menor que 5, reprovação.
- Media entre 5 e 7, recuperação.
- Media acima de 7, passou de semestre.
*/

// let resultado = media(5,5,5)

// if(resultado > 7) {
//     console.log('Aprovado')
// } else if(resultado >= 5 && resultado <= 7){
//     console.log('recuperação')
// } else if(resultado < 5) {
//     console.log('reprovação')
// }

// function media(nota1, nota2, nota3) {
//     let calcular = (nota1 + nota2 + nota3) / 3
//     return calcular
// }

const nota1 = 5
const nota2 = 4
const nota3 = 1

const media = (nota1 + nota2 + nota3) / 3

if(media > 7) {
        console.log('Aprovado')
    } else if(media >= 5 && media <= 7){
        console.log('Recuperação')
    } else if(media < 5) {
        console.log('Reprovação')
    }