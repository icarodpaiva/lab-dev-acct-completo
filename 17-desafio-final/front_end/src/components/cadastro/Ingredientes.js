import React from 'react'
import * as util from '../../util/util'
import Alternar from './Alternar'

let ingredientUnit
let ingredientQuantity
const ingredientesSelecionados = []

const Ingredientes = props => {
  const ingredientUnitCampo = (
    <select className="ingredientUnitCampo" defaultValue={'Grama(s)'}>
      {util.ingredientUnit.map(unit => {
        return <option key={unit}>{unit}</option>
      })}
    </select>
  )

  const ingredienteBanner = util.ingredients.map(
    ({ ingredient, ingredientUrl }, index) => {
      let classeBanner = 'cadastro-banner flex'
      return (
        <div key={index} className={classeBanner}>
          <div className="cadastro-banner-img">
            <img
              src={ingredientUrl}
              alt={ingredient}
              onError={e => {
                e.target.src =
                  'https://i.pinimg.com/originals/31/64/a1/3164a1ed98b643fea5cf4944089a27fc.jpg'
                e.target.onError = null
              }}
            />
          </div>
          <div className="cadastro-banner-nome">{ingredient}</div>
          {ingredientUnitCampo}
          <input
            className="ingredientQuantityCampo"
            type={'number'}
            placeholder="Quantidade"
          />
          <button
            onClick={() => {
              onClick(index)

              const indexIngRepetido = ingredientesSelecionados.findIndex(
                item => {
                  return item.ingredient.includes(ingredient)
                }
              )

              if (indexIngRepetido !== -1) {
                ingredientesSelecionados.splice(indexIngRepetido, 1)
              }

              if (ingredientQuantity > 0) {
                ingredientesSelecionados.push({
                  ingredient,
                  ingredientUnit,
                  ingredientQuantity
                })
                const ingredientesSelecionadosAux = JSON.stringify(
                  ingredientesSelecionados
                )
                props.setIngredients(JSON.parse(ingredientesSelecionadosAux))

                document.querySelectorAll('.cadastro-banner')[
                  index
                ].className += ' adicionado'
              } else {
                alert('Ops.. Quantidade errada!')
              }
            }}
          >
            Adicionar
          </button>
        </div>
      )
    }
  )

  return (
    <div className="cadastro-ingredientes flex">
      <h2>{props.legenda}</h2>
      <Alternar
        exibirComponente={props.exibirComponente}
        voltar={''}
        avancar={'tools'}
        ingredientes={conferirIngredientes}
        zerarIngredientes={zerarIngredientes}
        redirecionar={props.redirecionar}
      />
      {ingredienteBanner}
    </div>
  )
}

const zerarIngredientes = () => {
  ingredientesSelecionados.splice(0, ingredientesSelecionados.length)
}

const conferirIngredientes = () => {
  if (ingredientesSelecionados.length <= 0) {
    alert('Ops.. Você esqueceu de adicionar ingredientes.')
    return 'pare'
  }
}

const onClick = index => {
  const ingredientUnitCampoAtual = document.querySelectorAll(
    '.ingredientUnitCampo'
  )[index]
  ingredientUnit =
    ingredientUnitCampoAtual.options[ingredientUnitCampoAtual.selectedIndex]
      .value

  const ingredientQuantityCampoAtual = document.querySelectorAll(
    '.ingredientQuantityCampo'
  )[index]
  ingredientQuantity = Number(ingredientQuantityCampoAtual.value)
}

export default Ingredientes
