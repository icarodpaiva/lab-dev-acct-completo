import React from 'react'
import requisicoes from '../requisicoes'
import '../../css/Pesquisa.css'

const PosPesquisa = props => {
  const banners = props.requisicao.map(
    (
      {
        name,
        imageUrl,
        ingredients,
        tools,
        preparation,
        servingsPerPerson,
        _id
      },
      index
    ) => {
      return (
        <div key={_id} className="pos-pesquisa-banner flex">
          <h2 className="pos-pesquisa-banner-nome">
            {name.replace(name[0], name[0].toUpperCase())}
          </h2>
          <div className="pos-pesquisa-banner-img">
            <img
              src={imageUrl}
              alt={name}
              onError={e => {
                e.target.src =
                  'https://i.pinimg.com/originals/31/64/a1/3164a1ed98b643fea5cf4944089a27fc.jpg'
                e.target.onError = null
              }}
            />
          </div>
          <h3>Ingredientes necessários:</h3>
          <ul className="pos-pesquisa-banner-ingredientes">
            {ingredients.map(
              ({ ingredient, ingredientUnit, ingredientQuantity }, index) => {
                return (
                  <li key={index}>
                    {ingredientQuantity}&nbsp;{ingredientUnit} de{' '}
                    {ingredient.replace(
                      ingredient[0],
                      ingredient[0].toUpperCase()
                    )}
                    .
                  </li>
                )
              }
            )}
          </ul>
          <h3>Utensílios necessários:</h3>
          <ul className="pos-pesquisa-banner-tools">
            {tools.map((tool, index) => {
              if ((tool === 'notools')) {
                return <li key={index}>Nenhum</li>
              } else {
                return (
                  <li key={index}>
                    {tool.replace(tool[0], tool[0].toUpperCase())}.
                  </li>
                )
              }
            })}
          </ul>
          <h3>Como preparar:</h3>
          <ul className="pos-pesquisa-banner-comoFazer">
            {preparation.howToMake.map((passo, index) => {
              return (
                <li key={index}>
                  {index + 1}º Passo:&nbsp;
                  {passo.replace(passo[0], passo[0].toUpperCase())}.
                </li>
              )
            })}
          </ul>
          <div className="pos-pesquisa-banner-tempo">
            <h3>Tempo de preparo:</h3> {preparation.time.timeQuantity}
            &nbsp;
            {preparation.time.timeUnit}.
          </div>
          <div className="pos-pesquisa-banner-serve">
            <h3>Serve aproximadamente:</h3>
            {servingsPerPerson} pessoa(s).
          </div>
          {props.deletar && (
            <button
              onClick={() => {
                if (window.confirm('Tem certeza que irá excluir a receita?')) {
                  requisicoes.delete(_id)
                  alert('Deletada com sucesso.')
                  props.exibirComponente('home')
                }
              }}
            >
              Deletar
            </button>
          )}
          {props.alterar && (
            <button
              onClick={() => {
                if (window.confirm('Tem certeza que irá alterar a receita?')) {
                  props.setId(props.requisicao[index]._id)
                  props.exibirComponente('cadastro')
                }
              }}
            >
              Alterar
            </button>
          )}
        </div>
      )
    }
  )

  return (
    <section className="pesquisa-bg flex">
      <div className="pesquisa flex">
        <h1>Nossas Receitas:</h1>
        <div className="pesquisa-container flex">{banners}</div>
        <button
          onClick={() => {
            if (props.alterar || props.deletar || props.criadoOuDeletado) {
              props.exibirComponente('home')
            } else {
              props.exibirComponente('pesquisa')
            }
          }}
        >
          Voltar
        </button>
      </div>
    </section>
  )
}

export default PosPesquisa
