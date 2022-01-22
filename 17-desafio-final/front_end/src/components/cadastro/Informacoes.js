import React from 'react'
import * as util from '../../util/util'
import requisicoes from '../requisicoes'
import Alternar from './Alternar'

const Informacoes = props => {
  const recipePost = async (
    name,
    imageUrl,
    timeUnit,
    timeQuantity,
    servingsPerPerson
  ) => {
    const { ingredients, tools, howToMake } = props

    const recipe = {
      name,
      imageUrl,
      ingredients,
      tools,
      preparation: {
        time: {
          timeUnit,
          timeQuantity
        },
        howToMake
      },
      servingsPerPerson
    }

    if (props.id) {
      await requisicoes.alterar(props.id, recipe)

      const req = await requisicoes.id(props.id)
      props.setRequisicao(req)
      props.setCriadoOuDeletado(true)
      props.setAlterar(false)
    } else {
      await requisicoes.cadastrar(recipe)

      const req = await requisicoes.ultima()
      props.setRequisicao(req)
      props.setCriadoOuDeletado(true)
    }
  }

  const informacoesBanner = (
    <div className="cadastro-informacoes-banner flex">
      <div className="cadastro-informacoes-img">
        <img
          src="https://image.freepik.com/free-vector/cute-chef-girl-smiling-uniform-mascots-cartoon-art-illustration_56104-576.jpg"
          alt="imagem"
        />
      </div>

      <label className="flex">
        <span>Informe em quanto tempo é possível preparar sua receita:</span>
        <br />
        <select className="timeUnitCampo" defaultValue={'Minuto(s)'}>
          {util.timeUnit.map(unit => {
            return <option key={unit}>{unit}</option>
          })}
        </select>
        <input
          className="timeQuantityCampo"
          type={'number'}
          placeholder="Quantidade"
        />
      </label>
      <label className="flex">
        <span>Informe para quantas pessoas sua receita serve:</span> <br />
        <input
          className="servingsPerPersonCampo"
          type={'number'}
          placeholder="Pessoas "
        />
      </label>
      <label className="flex">
        <span>Dê um nome para sua receita:</span> <br />
        <input
          className="nameCampo"
          type={'text'}
          placeholder="Lembre-se de ser objetivo para que ela possa ser encontrada depois"
        />
      </label>
      <label className="flex">
        <span>Adicione uma imagem a sua receita:</span> <br />
        <input
          className="imageCampo"
          type={'text'}
          placeholder="Copie o endereço de uma imagem e cole aqui (OPCIONAL)"
        />
      </label>
      <div className="cadastro-informacoes-img">
        <img
          src="https://i.pinimg.com/736x/ec/6b/3a/ec6b3a417117b65650a15eefb53c2003.jpg"
          alt="imagem"
        />
      </div>
    </div>
  )

  const conferirInformacoes = async () => {
    const timeUnitCampo = document.querySelector('.timeUnitCampo')
    const timeUnit = timeUnitCampo.options[timeUnitCampo.selectedIndex].value
    const timeQuantity = Number(
      document.querySelector('.timeQuantityCampo').value
    )
    const servingsPerPerson = Number(
      document.querySelector('.servingsPerPersonCampo').value
    )
    const name = document.querySelector('.nameCampo').value
    let imageUrl = document.querySelector('.imageCampo').value

    if (timeQuantity > 0 && servingsPerPerson > 0 && name.length > 0) {
      if (imageUrl.length <= 0) {
        imageUrl =
          'https://i.pinimg.com/originals/31/64/a1/3164a1ed98b643fea5cf4944089a27fc.jpg'
      }

      await recipePost(
        name,
        imageUrl,
        timeUnit,
        timeQuantity,
        servingsPerPerson
      )

      alert('Uhul.. Sua receita foi enviada!')

      props.redirecionar('posPesquisa')
    } else {
      alert('Ops.. Algum dado está incorreto.')
      return 'pare'
    }
  }

  return (
    <div className="cadastro-informacoes flex">
      <h2>{props.legenda}</h2>
      <Alternar
        exibirComponente={props.exibirComponente}
        voltar={'comoFazer'}
        informacoes={conferirInformacoes}
        avancar={''}
        concluir={true}
      />
      {informacoesBanner}
    </div>
  )
}

export default Informacoes
