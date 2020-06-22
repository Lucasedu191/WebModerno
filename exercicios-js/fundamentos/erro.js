function tratarErroELancar(erro){
    //throw new Error('erro')
    //throw 10
    //throw true
    //throw 'mesagem'
    throw{
        nome: erro.name,
        msg: erro.messsage,
        date: new Date
    }
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }

    const obj = { nome: 'Roberto'}
    imprimirNomeGritado(obj)
}