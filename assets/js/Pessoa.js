export class Pessoa {
    constructor(nome, sobrenome, dataNascimento, email, contato, telefone, cargo) {
     this.nome           = nome
     this.sobrenome      = sobrenome
     this.dataNascimento = dataNascimento
     this.email          = email
     this.contato        = contato
     this.telefone       = telefone
     this.cargo          = cargo
    }

    static arrUsuarios = []
    static checar      = []

    static novoUsario(usuario) {
        const dataNascimentoArray = usuario.dataNascimento.split('-')
        const anoNascimento  = parseInt( dataNascimentoArray[0])
        let dataAtual = new Date
        
        if(!this.checar.includes(usuario.email) && dataAtual.getFullYear() - anoNascimento >= 18) {
            this.checar.push(usuario.email)
            this.arrUsuarios.push(usuario)

            printarUsuarios(this.arrUsuarios)
        } 
        else {
            alert('Erro! Usuário já cadastrado ou idade inválida (menor que 18 anos)')
        }  
    }

    static filtrarUsuarios(cargo) {
        if (cargo === 'Todos') {
            printarUsuarios(this.arrUsuarios)
        }
        else {
            const filtrados = this.arrUsuarios.filter(usuario => usuario.cargo === cargo)

            printarUsuarios(filtrados)
        } 
    }
}

function printarUsuarios(arrUsuarios) {
    const listaUsuarios = document.getElementById("lista-de-alunos")
    listaUsuarios.innerText = ''

    arrUsuarios.forEach(usuario => {
        const usuarioItem   = document.createElement('li')
        const usuarioNome   = document.createElement('p')
        const usuarioEmail  = document.createElement('p')
        const usuarioCargo  = document.createElement('p')

        usuarioNome.innerHTML  = `${usuario.nome} ${usuario.sobrenome}`
        usuarioEmail.innerHTML = `${usuario.email}`
        usuarioCargo.innerHTML = `${usuario.cargo}`

        usuarioItem.append(usuarioNome, usuarioEmail, usuarioCargo)
        listaUsuarios.appendChild(usuarioItem)
    })
}