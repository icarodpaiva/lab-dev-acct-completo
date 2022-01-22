import React from 'react'
import './App.css'
import Form from './components/Form'
import Informacoes from './components/Informacoes'

// Validacao de inputs
let validacao = {
  nome: false,
  telefone: false,
  email: false
}

// Arrays auxiliares para comportar o state atual
const nomes = []
const telefones = []
const emails = []
const descricoes = []
const linhas = []

// Contador para servir de key para as linhas que serao geradas
let contador = 0

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // State dos arrays para se montar um historico na tabela
      nomes: '',
      telefones: '',
      emails: '',
      descricoes: '',

      // State dos campos em edicao no momento
      nome: '',
      telefone: '',
      email: '',
      descricao: ''
    }
  }

  // Input Nome
  onChangeNome = nome => {
    this.setState({
      nome: nome
    })
    // Validacao de Nome
    nome.length === 33 && alert('Limite de caracteres atingido')
    const reNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    if (reNome.test(nome)) {
      validacao.nome = true
    } else {
      validacao.nome = false
    }
  }

  // Input Telefone
  onChangeTelefone = telefone => {
    this.setState({
      telefone: telefone
    })
    // Validacao de Telefone
    const reTel = /[0-9]{10,11}/
    if (reTel.test(telefone)) {
      validacao.telefone = true
    } else {
      validacao.telefone = false
    }
  }

  // Input Email
  onChangeEmail = email => {
    this.setState({
      email: email
    })
    // Validacao de Email
    email.length === 33 && alert('Limite de caracteres atingido')
    const reEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (reEmail.test(email)) {
      validacao.email = true
    } else {
      validacao.email = false
    }
  }

  // Input Descricao
  onChangeDescricao = descricao => {
    this.setState({
      descricao: descricao
    })
    // Validacao de Descrição
    descricao.length === 165 && alert('Limite de caracteres atingido')
  }

  // Botao de Enviar Informacoes
  novoSubmit = e => {
    e.preventDefault()

    // Confere as validacoes de inputs
    if (validacao.nome && validacao.telefone && validacao.email) {
      alert('Informações enviadas com sucesso!')

      // Insere no array auxiliar os states atuais
      nomes.push(this.state.nome)
      telefones.push(this.state.telefone)
      emails.push(this.state.email)
      descricoes.push(this.state.descricao)
      linhas.push(`${++contador}a_linha`)

      // Insere no state os valores dos arrays auxiliares para montagem do historico na tabela
      this.setState({
        nomes: nomes,
        telefones: telefones,
        emails: emails,
        descricoes: descricoes
      })

      // Resetando as validacoes para o proximo cadastro
      validacao.nome = false
      validacao.telefone = false
      validacao.email = false

      // Resetando os inputs para o próximo cadastro
      this.setState({
        nome: '',
        telefone: '',
        email: '',
        descricao: ''
      })

      // Caso algum input esteja incorreto
    } else {
      alert(
        'Inforamções inválidas! Para nomes use apenas letras, para telefone apenas números com DDD.'
      )
    }
  }

  // Linhas a serem introduzidas na tabela
  linhas = () => {
    return (
      <>
        {/* State em edicao no momento */}
        <tr key={'atual'}>
          <td className="nome">{this.state.nome}</td>
          <td className="telefone">{this.state.telefone}</td>
          <td className="email">{this.state.email}</td>
          <td className="descricao">{this.state.descricao}</td>
        </tr>

        {/* State do historico da tabela */}
        {linhas.map((item, indice) => (
          <tr key={item}>
            <td className="nome">{this.state.nomes[indice]}</td>
            <td className="telefone">{this.state.telefones[indice]}</td>
            <td className="email">{this.state.emails[indice]}</td>
            <td className="descricao">{this.state.descricoes[indice]}</td>
          </tr>
        ))}
      </>
    )
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.novoSubmit}
          onChangeNome={this.onChangeNome}
          onChangeTelefone={this.onChangeTelefone}
          onChangeEmail={this.onChangeEmail}
          onChangeDescricao={this.onChangeDescricao}
          valueNome={this.state.nome}
          valueTelefone={this.state.telefone}
          valueEmail={this.state.email}
          valueDescricao={this.state.descricao}
        />
        <Informacoes linhas={this.linhas()} />
      </div>
    )
  }
}

export default App
