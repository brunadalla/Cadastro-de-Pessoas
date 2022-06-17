import { Pessoa } from "./Pessoa.js";

const btnRegistrar = document.getElementById("register-button")
btnRegistrar.addEventListener('click', () => {
    const objetoUser = criarObjetoUsuario()
    const newUser    = new Pessoa(objetoUser.nome, objetoUser.sobrenome, objetoUser.dataNascimento, objetoUser.email, objetoUser.contato, objetoUser.telefone, objetoUser.cargo )

    Pessoa.novoUsario(newUser)
   
})

const btnFiltrar = document.getElementById("btn")
btnFiltrar.addEventListener('click', () => {
    const selectValue = document.getElementById("cargoOption").value

    Pessoa.filtrarUsuarios(selectValue)
})

function criarObjetoUsuario(){
    const inputs = document.getElementsByClassName('field')

    const nome           = inputs[0].value
    const sobrenome      = inputs[1].value
    const dataNascimento = inputs[2].value
    const email          = inputs[3].value
    const contato        = inputs[4].value
    const telefone       = inputs[5].value
    const cargo          = inputs[6].value

    const objetoUsuario  = {
        nome,
        sobrenome,
        dataNascimento,
        email,
        contato,
        telefone,
        cargo
    }
    return objetoUsuario
}