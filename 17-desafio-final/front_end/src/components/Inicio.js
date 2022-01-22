import React, { useState } from 'react'
import Cadastro from './cadastro/Cadastro'
import Pesquisa from './pesquisa/Pesquisa'
import PosPesquisa from './pesquisa/PosPesquisa'
import get from './requisicoes'
import '../css/Inicio.css'

const Inicio = () => {
  const [tela, setTela] = useState('home')
  const [requisicao, setRequisicao] = useState()
  const [alterar, setAlterar] = useState()
  const [id, setId] = useState()
  const [deletar, setDeletar] = useState()
  const [criadoOuDeletado, setCriadoOuDeletado] = useState()

  const exibirComponente = componente => {
    if (componente === 'home') {
      setTela('home')
      window.location.reload()
    }
    componente === 'cadastro' && setTela('cadastro')
    componente === 'pesquisa' && setTela('pesquisa')
    componente === 'posPesquisa' && setTela('posPesquisa')
  }

  return (
    <div id="container">
      {tela === 'home' && (
        <Home
          exibirComponente={exibirComponente}
          setRequisicao={setRequisicao}
          setAlterar={setAlterar}
          setDeletar={setDeletar}
        />
      )}
      {tela === 'cadastro' && (
        <Cadastro
          redirecionar={exibirComponente}
          deletar={deletar}
          id={id}
          setRequisicao={setRequisicao}
          setCriadoOuDeletado={setCriadoOuDeletado}
          setAlterar={setAlterar}
        />
      )}
      {tela === 'pesquisa' && (
        <Pesquisa
          exibirComponente={exibirComponente}
          setRequisicao={setRequisicao}
          setAlterar={setAlterar}
          setDeletar={setDeletar}
        />
      )}
      {tela === 'posPesquisa' && (
        <PosPesquisa
          exibirComponente={exibirComponente}
          requisicao={requisicao}
          alterar={alterar}
          deletar={deletar}
          setId={setId}
          criadoOuDeletado={criadoOuDeletado}
        />
      )}
    </div>
  )
}

const Home = props => {
  return (
    <section className="inicio-bg flex">
      <div className="inicio flex">
        <div className="inicio-left flex">
          <h1>Seja bem vindo ao melhor site de Receitas Culinárias! </h1>
          <h2>A Cook it Yourself agradece a visita</h2>
          <div className="inicio-left-img">
            <img
              src="https://i.pinimg.com/736x/49/7a/d3/497ad31b84b4f6acd8ce3c1970ee593f.jpg"
              alt="img"
            />
          </div>
        </div>
        <div className="inicio-right flex">
          <h2>Por que nós?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            risus commodo viverra maecenas. Eget est lorem ipsum dolor sit amet
            consectetur adipiscing. Leo vel fringilla est ullamcorper eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            risus commodo viverra maecenas. Eget est lorem ipsum dolor sit amet
            consectetur adipiscing. Leo vel fringilla est ullamcorper eget.
          </p>
          <h2>Inicie agora mesmo:</h2>
          <ul className="inicio-right-receita flex">
            <li>
              <a
                href="inicio"
                className="inicio-right-receita-post flex"
                onClick={e => {
                  e.preventDefault()
                  props.exibirComponente('cadastro')
                }}
              >
                Crie sua Receita
              </a>
            </li>
            <li>
              <a
                href="inicio"
                className="inicio-right-receita-get flex"
                onClick={e => {
                  e.preventDefault()
                  props.exibirComponente('pesquisa')
                }}
              >
                Pesquise receitas existentes
              </a>
            </li>
            <li>
              <a
                href="inicio"
                className="inicio-right-receita-put flex"
                onClick={async e => {
                  e.preventDefault()
                  const nome = document
                    .querySelector('.alterarReceita')
                    .value.toLowerCase()
                  if (nome) {
                    const req = await get.nome(nome)
                    if (req.length >= 0) {
                      props.setRequisicao(req)
                      props.setAlterar(true)
                      props.exibirComponente('posPesquisa')
                    } else {
                      alert(
                        'Nenhuma receita corresponde aos dados descritos :('
                      )
                    }
                  }
                }}
              >
                Altere uma Receita
              </a>
              <input
                className="alterarReceita"
                type="text"
                placeholder="Nos diga o nome da receita"
              />
            </li>
            <li>
              <a
                href="inicio"
                className="inicio-right-receita-delete flex"
                onClick={async e => {
                  e.preventDefault()
                  const nome = document
                    .querySelector('.deletarReceita')
                    .value.toLowerCase()
                  if (nome) {
                    const req = await get.nome(nome)
                    if (req.length >= 0) {
                      props.setRequisicao(req)
                      props.setDeletar(true)
                      props.exibirComponente('posPesquisa')
                    } else {
                      alert(
                        'Nenhuma receita corresponde aos dados descritos :('
                      )
                    }
                  }
                }}
              >
                Delete uma receita
              </a>
              <input
                className="deletarReceita"
                type="text"
                placeholder="Nos diga o nome da receita"
              />
            </li>
          </ul>
          <div className="inicio-right-social flex">
            <h2>Nos siga nas Redes Sociais</h2>
            <ul className="inicio-right-social-container flex">
              <li>
                <a href="contato" className="flex">
                  <div className="contato-info-banners-banner-img flex">
                    <img
                      src="https://images.vexels.com/media/users/3/137380/isolated/lists/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-do-icone-do-instagram.png"
                      alt="img"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="contato" className="flex">
                  <div className="contato-info-banners-banner-img flex">
                    <img
                      src="https://www.goiania.go.leg.br/imagens/icon_facebook.png/image_preview"
                      alt="img"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="contato" className="flex">
                  <div className="contato-info-banners-banner-img flex">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                      alt="img"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
