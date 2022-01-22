import React from 'react'
import * as util from '../../util/util'
import Alternar from './Alternar'

const tools = []

const Utensilios = props => {
  const toolsBanner = util.tools.map(({ tool, toolUrl }, index) => {
    return (
      <div key={index} className="cadastro-banner flex">
        <div className="cadastro-banner-img">
          <img
            src={toolUrl}
            alt={tool}
            onError={e => {
              e.target.src =
                'https://i.pinimg.com/originals/31/64/a1/3164a1ed98b643fea5cf4944089a27fc.jpg'
              e.target.onError = null
            }}
          />
        </div>
        <div className="cadastro-banner-nome">{tool}</div>

        <button
          onClick={() => {
            if (!tools.includes(tool)) {
              tools.push(tool)
              props.setTools(tools)

              document.querySelectorAll('.cadastro-banner')[index].className +=
                ' adicionado'
            }
          }}
        >
          Adicionar
        </button>
      </div>
    )
  })

  return (
    <div className="cadastro-tools flex">
      <h2>{props.legenda}</h2>
      <Alternar
        exibirComponente={props.exibirComponente}
        voltar={'ingredientes'}
        avancar={'comoFazer'}
      />
      {toolsBanner}
    </div>
  )
}

export default Utensilios
