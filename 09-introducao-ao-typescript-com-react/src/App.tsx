import React, { FunctionComponent, useState } from 'react'
import Form from './components/Form'
import Informacoes from './components/Informacoes'

interface validation {
  nome: boolean
  telefone: boolean
  email: boolean
}

interface arraysAux {
  nomes: string[]
  telefones: string[]
  emails: string[]
  descricoes: string[]
  linhas: string[]
}

const validacao: validation = {
  nome: false,
  telefone: false,
  email: false
}

const arraysAuxiliares: arraysAux = {
  nomes: [],
  telefones: [],
  emails: [],
  descricoes: [],
  linhas: []
}

let contador: number = 0

const App: FunctionComponent = () => {
  const [name, setName] = useState<string>('')
  const [telephone, setTelephone] = useState<string>('')
  const [eMail, setEMail] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [names, setNames] = useState<string[]>([])
  const [telephones, setTelephones] = useState<string[]>([])
  const [eMails, setEMails] = useState<string[]>([])
  const [descriptions, setDescriptions] = useState<string[]>([])

  const onChangeNome = (nome: string): void => {
    setName(nome)
    nome.length === 33 && alert('Limite de caracteres atingido')
    const reNome: RegExp = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    reNome.test(nome) ? (validacao.nome = true) : (validacao.nome = false)
  }

  const onChangeTelefone = (telefone: string): void => {
    setTelephone(telefone)
    const reTel: RegExp = /[0-9]{10,11}/
    reTel.test(telefone)
      ? (validacao.telefone = true)
      : (validacao.telefone = false)
  }

  const onChangeEmail = (email: string): void => {
    setEMail(email)
    email.length === 33 && alert('Limite de caracteres atingido')
    const reEmail: RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    reEmail.test(email) ? (validacao.email = true) : (validacao.email = false)
  }

  const onChangeDescricao = (descricao: string): void => {
    setDescription(descricao)
    descricao.length === 165 && alert('Limite de caracteres atingido')
  }

  const novoSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (validacao.nome && validacao.telefone && validacao.email) {
      alert('Informações enviadas com sucesso!')

      arraysAuxiliares.nomes.push(name)
      arraysAuxiliares.telefones.push(telephone)
      arraysAuxiliares.emails.push(eMail)
      arraysAuxiliares.descricoes.push(description)
      arraysAuxiliares.linhas.push(`${++contador}a_linha`)
      setNames(arraysAuxiliares.nomes)
      setTelephones(arraysAuxiliares.telefones)
      setEMails(arraysAuxiliares.emails)
      setDescriptions(arraysAuxiliares.descricoes)

      validacao.nome = false
      validacao.telefone = false
      validacao.email = false
      setName('')
      setTelephone('')
      setEMail('')
      setDescription('')
    } else {
      alert(
        'Inforamções inválidas! Para nomes use apenas letras, para telefone apenas números com DDD.'
      )
    }
  }

  const linhas = () => {
    return (
      <>
        <tr key={'atual'}>
          <td className="nome">{name}</td>
          <td className="telefone">{telephone}</td>
          <td className="email">{eMail}</td>
          <td className="descricao">{description}</td>
        </tr>

        {arraysAuxiliares.linhas.map((item, indice) => (
          <tr key={item}>
            <td className="nome">{names[indice]}</td>
            <td className="telefone">{telephones[indice]}</td>
            <td className="email">{eMails[indice]}</td>
            <td className="descricao">{descriptions[indice]}</td>
          </tr>
        ))}
      </>
    )
  }

  return (
    <div>
      <Form
        onSubmit={novoSubmit}
        onChangeNome={onChangeNome}
        onChangeTelefone={onChangeTelefone}
        onChangeEmail={onChangeEmail}
        onChangeDescricao={onChangeDescricao}
        valueNome={name}
        valueTelefone={telephone}
        valueEmail={eMail}
        valueDescricao={description}
      />
      <Informacoes linhas={linhas()} />
    </div>
  )
}

export default App
