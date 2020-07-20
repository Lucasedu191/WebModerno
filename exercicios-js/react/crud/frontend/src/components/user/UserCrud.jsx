import React, {Component} from 'react'
import Main from '../template/Main'

const headerProps ={
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usurarios: Incluir, Listar, Alerar e Excluir'
}
export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuários
            </Main>
        )
    }
}