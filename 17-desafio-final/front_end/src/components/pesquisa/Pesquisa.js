import React from 'react'
import '../../css/Pesquisa.css'
import * as util from '../../util/util'
import requisicoes from '../requisicoes'

const Pesquisa = props => {
  return (
    <section className="pesquisa-bg flex">
      <div className="pesquisa flex">
        <h1>Escolha o método de Busca</h1>
        <h2>E clique na imagem após preencher o campo:</h2>
        <div className="pesquisa-container flex">
          <div className="pesquisa-geral flex">
            <h2>Pesquisa Geral</h2>
            <p>
              Exibe todas as receitas já cadastradas em nosso banco de dados:
            </p>
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const req = await requisicoes.geral()
                if (req.length >= 0) {
                  props.setAlterar(false)
                  props.setDeletar(false)
                  props.setRequisicao(req)
                  props.exibirComponente('posPesquisa')
                } else {
                  alert('Nenhuma receita corresponde aos dados descritos :(')
                }
              }}
            >
              <img
                src="https://image.freepik.com/free-vector/cute-chef-with-spatula_56104-110.jpg"
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-nome flex">
            <h2>Pesquisa por Nome</h2>
            <p>
              Exibe todas as receitas que tiverem um nome parecido com o que
              você descrever aqui em baixo:
            </p>
            <input
              type="text"
              className="nomeCampo"
              placeholder="Separe as palavras usando espaço"
            />
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const nome = document
                  .querySelector('.nomeCampo')
                  .value.toLowerCase()
                if (nome) {
                  const req = await requisicoes.nome(nome)
                  if (req.length >= 0) {
                    props.setAlterar(false)
                    props.setDeletar(false)
                    props.setRequisicao(req)
                    props.exibirComponente('posPesquisa')
                  } else {
                    alert('Nenhuma receita corresponde aos dados descritos :(')
                  }
                }
              }}
            >
              <img
                src="https://i.pinimg.com/736x/ed/c4/74/edc47471cecd95004895ce6575a70fa3.jpg"
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-ingrediente flex">
            <h2>Pesquisa por Ingredientes</h2>
            <p>
              Exibe as receitas que possuírem todos os ingredientes que você
              descrever aqui em baixo:
            </p>
            <input
              type="text"
              className="ingredientesCampo"
              placeholder="Separe as palavras usando espaço"
            />
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const ingredientes = document
                  .querySelector('.ingredientesCampo')
                  .value.replaceAll(' ', '_')
                  .toLowerCase()
                if (ingredientes) {
                  const req = await requisicoes.ingredientes(ingredientes)
                  if (req.length >= 0) {
                    props.setAlterar(false)
                    props.setDeletar(false)
                    props.setRequisicao(req)
                    props.exibirComponente('posPesquisa')
                  } else {
                    alert('Nenhuma receita corresponde aos dados descritos :(')
                  }
                }
              }}
            >
              <img
                src="https://media.istockphoto.com/vectors/female-chef-cut-carrot-verequisicoesable-cooking-in-kitchen-cartoon-vector-vector-id1297398815?k=20&m=1297398815&s=612x612&w=0&h=vllz5-49tAf5-4F4LGnZ0_6jKsZIX745qchA2amwMag="
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-ingrediente-restrito flex">
            <h2>Pesquisa por Ingredientes (Restrita)</h2>
            <p>
              Exibe todas as receitas que possuírem <span>exatamente</span> os
              ingredientes que você descrever aqui em baixo:
            </p>
            <input
              type="text"
              className="ingredientesRestritoCampo"
              placeholder="Separe as palavras usando espaço"
            />
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const ingredientes = document
                  .querySelector('.ingredientesRestritoCampo')
                  .value.replaceAll(' ', '_')
                  .toLowerCase()
                if (ingredientes) {
                  const req = await requisicoes.inregredientesRestrito(
                    ingredientes
                  )
                  if (req.length >= 0) {
                    props.setAlterar(false)
                    props.setDeletar(false)
                    props.setRequisicao(req)
                    props.exibirComponente('posPesquisa')
                  } else {
                    alert('Nenhuma receita corresponde aos dados descritos :(')
                  }
                }
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/936/355/original/cute-bakery-chef-girl-holding-strawberry-cake-smiling-cartoon-art-illustration-vector.jpg"
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-tool flex">
            <h2>Pesquisa por Utensilios</h2>
            <em>Para nenhum utensílio apenas clique na imagem</em>
            <p>
              Exibe todas as receitas que possuírem todos os utensílios que você
              descrever aqui em baixo:
            </p>
            <input
              type="text"
              className="utensiliosCampo"
              placeholder="Separe as palavras usando espaço"
            />
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const tools = document
                  .querySelector('.utensiliosCampo')
                  .value.replaceAll(' ', '_')
                  .toLowerCase()

                let req
                if (tools !== '') {
                  req = await requisicoes.utensilios(tools)
                } else {
                  req = await requisicoes.utensilios('notools')
                }
                if (req.length >= 0) {
                  props.setAlterar(false)
                  props.setDeletar(false)
                  props.setRequisicao(req)
                  props.exibirComponente('posPesquisa')
                } else {
                  alert('Nenhuma receita corresponde aos dados descritos :(')
                }
              }}
            >
              <img
                src="https://t4.ftcdn.net/jpg/03/63/76/23/400_F_363762343_k7sucQC67G5SX6wxotgE9mgv9PlyZohA.jpg"
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-tool-restrito flex">
            <h2>Pesquisa por Utensilios (Restrita)</h2>
            <em>Para nenhum utensílio apenas clique na imagem</em>
            <p>
              Exibe todas as receitas que possuírem <span>exatamente</span> os
              utensílios que você descrever aqui em baixo:
            </p>
            <input
              type="text"
              className="utensiliosRestritoCampo"
              placeholder="Separe as palavras usando espaço"
            />
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const tools = document
                  .querySelector('.utensiliosRestritoCampo')
                  .value.replaceAll(' ', '_')
                  .toLowerCase()

                let req
                if (tools !== '') {
                  req = await requisicoes.utensiliosRestrito(tools)
                } else {
                  req = await requisicoes.utensiliosRestrito('notools')
                }
                if (req.length >= 0) {
                  props.setAlterar(false)
                  props.setDeletar(false)
                  props.setRequisicao(req)
                  props.exibirComponente('posPesquisa')
                } else {
                  alert('Nenhuma receita corresponde aos dados descritos :(')
                }
              }}
            >
              <img
                src="https://i.pinimg.com/736x/ed/cc/2e/edcc2e5ba66750f99f516d043dd63d8a.jpg"
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-tempo flex">
            <h2>Pesquisa por Tempo</h2>
            <p>
              Exibe todas as receitas que possuírem o tempo de preparo igual ou
              menor ao que você descrever aqui em baixo:
            </p>
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
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const timeUnitCampo = document.querySelector('.timeUnitCampo')
                const timeUnit =
                  timeUnitCampo.options[timeUnitCampo.selectedIndex].value

                const timeQuantity = Number(
                  document.querySelector('.timeQuantityCampo').value
                )

                if (timeQuantity) {
                  const req = await requisicoes.time(timeUnit, timeQuantity)
                  if (req.length >= 0) {
                    props.setAlterar(false)
                    props.setDeletar(false)
                    props.setRequisicao(req)
                    props.exibirComponente('posPesquisa')
                  } else {
                    alert('Nenhuma receita corresponde aos dados descritos :(')
                  }
                }
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/335/549/non_2x/cute-chef-girl-smiling-in-uniform-welcoming-cartoon-art-illustration-vector.jpg"
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-tempo-restrito flex">
            <h2>Pesquisa por Tempo (Restrita)</h2>
            <p>
              Exibe todas as receitas que possuírem <span>exatamente</span> o
              tempo de preparo que você descrever aqui em baixo:
            </p>
            <select
              className="timeUnitRestritoCampo"
              defaultValue={'Minuto(s)'}
            >
              {util.timeUnit.map(unit => {
                return <option key={unit}>{unit}</option>
              })}
            </select>
            <input
              className="timeQuantityRestritoCampo"
              type={'number'}
              placeholder="Quantidade"
            />
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const timeUnitCampo = document.querySelector(
                  '.timeUnitRestritoCampo'
                )
                const timeUnit =
                  timeUnitCampo.options[timeUnitCampo.selectedIndex].value

                const timeQuantity = Number(
                  document.querySelector('.timeQuantityRestritoCampo').value
                )

                if (timeQuantity) {
                  const req = await requisicoes.timeRestrito(
                    timeUnit,
                    timeQuantity
                  )
                  if (req.length >= 0) {
                    props.setAlterar(false)
                    props.setDeletar(false)
                    props.setRequisicao(req)
                    props.exibirComponente('posPesquisa')
                  } else {
                    alert('Nenhuma receita corresponde aos dados descritos :(')
                  }
                }
              }}
            >
              <img
                src="https://image.freepik.com/free-vector/cute-chef-girl-smiling-uniform-mascots-gesturing-ok-sign-cartoon-art-illustration_56104-577.jpg"
                alt="img"
              />
            </div>
          </div>

          <div className="pesquisa-ultima flex">
            <h2>Ultima Receita Adicionada</h2>
            <p>Exibe a última receita enviada para o nosso banco de dados:</p>
            <div
              className="pesquisa-tipo-img"
              onClick={async () => {
                const req = await requisicoes.ultima()
                if (req.length >= 0) {
                  props.setAlterar(false)
                  props.setDeletar(false)
                  props.setRequisicao(req)
                  props.exibirComponente('posPesquisa')
                } else {
                  alert('Nenhuma receita corresponde aos dados descritos :(')
                }
              }}
            >
              <img
                src="https://i.pinimg.com/736x/56/b4/6c/56b46c8f0cabff108c502b8719235e78.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.exibirComponente('home')
          }}
        >
          Voltar
        </button>
      </div>
    </section>
  )
}

export default Pesquisa
