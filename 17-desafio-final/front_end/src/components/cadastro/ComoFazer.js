import React, { useState } from 'react'
import Alternar from './Alternar'

const ComoFazer = props => {
  const [input, setInput] = useState('add')

  const howToMakeBanner = input.split(' ').map((item, index) => {
    return (
      <div key={index} className="cadastro-banner howToMake">
        <div className="cadastro-howToMake-img">
          <img
            src="https://image.freepik.com/vetores-gratis/ilustracao-dos-desenhos-animados-do-chef-bonito-com-o-tabuleiro-vazio_339032-529.jpg"
            alt="imagem"
          />
        </div>
        <button
          className="cadastro-howToMake-eliminar flex"
          onClick={() => {
            if (index !== 0) {
              const novoInput = input.split(' ')
              novoInput.splice(index, 1)

              setInput(novoInput.join(' '))
            }
          }}
        >
          X
        </button>
        <label>
          <span> {index + 1} ª etapa:</span>
          <br />
          <textarea
            placeholder="CLIQUE AQUI PARA DESCREVER como preparar sua receita."
            className="howToMake"
          ></textarea>
        </label>
      </div>
    )
  })

  const conferirComoFazer = () => {
    const textAreas = Array.from(document.querySelectorAll('.howToMake'))

    const textAreaValues = textAreas.map(({ value }) => {
      return value
    })

    const howToMake = textAreaValues.filter(tiravazio => {
      return tiravazio
    })

    props.setHowToMake(howToMake)
    
    if (!howToMake || howToMake.length <= 0) {
      alert('Ops.. Você esqueceu de nos contar como preparar a receita.')
      return 'pare'
    }
  }

  return (
    <div className="cadastro-howToMake flex">
      <h2>{props.legenda}</h2>
      <Alternar
        exibirComponente={props.exibirComponente}
        voltar={'tools'}
        comoFazer={conferirComoFazer}
        avancar={'informacoes'}
      />
      {howToMakeBanner}
      <button
        onClick={() => {
          setInput(input + ' add')
        }}
      >
        Adicionar Etapa
      </button>
      <div className="cadastro-howTomake-img">
        <img
          src="https://img.freepik.com/vetores-gratis/ilustracao-dos-desenhos-animados-do-chef-bonitinho-segurando-uma-espatula_339032-527.jpg?size=338&ext=jpg"
          alt="imagem"
        />
      </div>
    </div>
  )
}

export default ComoFazer
