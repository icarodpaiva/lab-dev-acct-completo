import React, { useState } from 'react'
import './App.css'

// Validacao de CEP
let cepValido = false
const reCep = /[0-9]{8}/

function Informacoes(props) {
  return (
    <>
      <p>
        <strong>{props.informacao}</strong>
      </p>
      <p>{props.descricao}</p>
      <hr />
    </>
  )
}

function App() {
  const [cep, setCep] = useState('')
  const [exibir, setExibir] = useState('')

  function requisitar() {
    // Conferindo se o CEP digitado pelo usuario esta em formato valido
    if (reCep.test(cep)) {
      cepValido = true
    } else {
      cepValido = false
    }

    if (!cepValido) {
      if (cep.length === 0) {
        return alert('[ERRO] O CAMPO DE PESQUISA NÃO PODE ESTAR VAZIO!')
      } else {
        return alert('[ERRO] DIGITE 8 NÚMEROS (NÃO USE TRAÇOS OU PONTOS)!')
      }

      // Caso o CEP seja no formato valido executa a requisicao
    } else {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resultado => resultado.json())

        // Valida se a requisicao encontrou resultados
        .then(json => {
          if (json.erro) {
            return alert(
              '[ERRO] O CEP INFORMADO NÃO RETORNOU NENHUM RESULTADO!'
            )
          } else {
            return exibirNaTela(json)
          }
        })

        .catch(error =>
          alert(
            'Infelizmente a requisição de dados falhou, tente novamente mais tarde!'
          )
        )

      setCep('')
    }
  }

  function exibirNaTela(json) {
    setExibir(
      <>
        <Informacoes informacao='CEP:' descricao={json.cep}/>
        <Informacoes informacao='Rua:' descricao={json.logradouro}/>
        <Informacoes informacao='Bairro:' descricao={json.bairro}/>
        <Informacoes informacao='Cidade:' descricao={json.localidade}/>
        <Informacoes informacao='Estado:' descricao={json.uf}/>
      </>
    )
  }

  return (
    <div>
      <h1>Consulta de CEP:</h1>
      <h2>Digite apenas os números:</h2>
      <input
        placeholder="Exemplo: 12345678"
        maxLength={8}
        onChange={e => {
          setCep(e.target.value)
        }}
        value={cep}
      />
      <button
        onClick={() => {
          requisitar()
        }}
      >
        Consultar
      </button>
      <div>{exibir}</div>
    </div>
  )
}

export default App
