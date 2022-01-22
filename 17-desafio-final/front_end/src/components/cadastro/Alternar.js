import React from 'react'

const Alternar = props => {
  return (
    <div className="cadastro-alternar flex">
      <button
        onClick={() => {
          props.redirecionar && props.redirecionar('home')
          props.exibirComponente(props.voltar)
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          if (props.ingredientes) {
            if (props.ingredientes() === 'pare') {
              return
            }
            props.zerarIngredientes && props.zerarIngredientes()
          }
          if (props.comoFazer) {
            if (props.comoFazer() === 'pare') {
              return
            }
          }
          if (props.informacoes) {
            if (props.informacoes() === 'pare') {
              return
            }
          }
          props.exibirComponente(props.avancar)
        }}
      >
        {props.concluir ? 'Concluir' : 'Avançar'}
      </button>
    </div>
  )
}

export default Alternar
