const pilotos = ['Piloto1', 'Piloto2', 'Piloto3', 'Piloto4']
pilotos.pop()// retira o ultimo adicionado
console.log(pilotos)

pilotos.push('Piloto5')
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Piloto6') // adiciona o primeiro elemento
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Piloto7', 'Piloto8')
console.log(pilotos)

//remover

pilotos.splice(3,1)// remove o piloto 8
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)