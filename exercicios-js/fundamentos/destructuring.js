const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        rua: 'Rua ABC',
        numero: 1000
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const{sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)