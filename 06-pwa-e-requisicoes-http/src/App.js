import React from 'react'
import './App.css'

// Validacao de CEP
let cepValido = false
const reCep = /[0-9]{8}/

class App extends React.Component {
  state = {
    cep: '',
    exibir: ''
  }

  requisitar = () => {
    // Conferindo se o CEP digitado pelo usuario esta em formato valido
    if (reCep.test(this.state.cep)) {
      cepValido = true
    } else {
      cepValido = false
    }

    if (!cepValido) {
      if (this.state.cep.length === 0) {
        return alert('[ERRO] O CAMPO DE PESQUISA NÃO PODE ESTAR VAZIO!')
      } else {
        return alert('[ERRO] DIGITE 8 NÚMEROS (NÃO USE TRAÇOS OU PONTOS)!')
      }

      // Caso o CEP seja no formato valido executa a requisicao
    } else {
      fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
        .then(resultado => resultado.json())

        // Valida se a requisicao encontrou resultados
        .then(json => {
          if (json.erro) {
            return alert(
              '[ERRO] O CEP INFORMADO NÃO RETORNOU NENHUM RESULTADO!'
            )
          } else {
            return this.exibir(json)
          }
        })

        .catch(error =>
          alert(
            'Infelizmente a requisição de dados falhou, tente novamente mais tarde!'
          )
        )

      this.setState({ cep: '' })
    }
  }

  exibir = json => {
    this.setState({
      exibir: (
        <>
          <p>
            <strong>CEP:</strong>
          </p>
          <p>{json.cep}</p>
          <hr />

          <p>
            <strong>Rua:</strong>
          </p>
          <p>{json.logradouro}</p>
          <hr />

          <p>
            <strong>Bairro:</strong>
          </p>
          <p>{json.bairro}</p>
          <hr />

          <p>
            <strong>Cidade:</strong>
          </p>
          <p>{json.localidade}</p>
          <hr />

          <p>
            <strong>Estado:</strong>
          </p>
          <p>{json.uf}</p>
          <hr />
        </>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Consulta de CEP:</h1>
        <h2>Digite apenas os números:</h2>
        <input
          placeholder="Exemplo: 12345678"
          maxLength={8}
          onChange={event => {
            this.setState({ cep: event.target.value })
          }}
          value={this.state.cep}
        />
        <button
          onClick={() => {
            this.requisitar()
          }}
        >
          Consultar
        </button>
        <div>{this.state.exibir}</div>
      </div>
    )
  }
}

export default App
