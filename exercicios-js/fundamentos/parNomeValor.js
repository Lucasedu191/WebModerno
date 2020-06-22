//par nome/valor

const saudacao = 'Opa' // contexto lexico 1

function exec(){
    const saudacao = 'Falaa' // contexto lexico 2
    return saudacao
}

const saudacao = 'Epa!@'

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Rua muito legal',
        numero: 123
    }
}