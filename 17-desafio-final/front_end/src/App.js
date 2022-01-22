import React, { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'
import Contato from './components/Contato'

function App() {
  const [tela, setTela] = useState('inicio')
  const [scroll, setScroll] = useState()

  const exibirComponente = componente => {
    if (componente === 'inicio') {
      setTela('inicio')
      window.location.reload()
    }
    componente === 'inicio' && setTela('inicio')
    componente === 'cadastro' && setTela('cadastro')
    componente === 'sobre' && setTela('sobre')
    componente === 'contato' && setTela('contato')
  }

  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })

  return (
    <div id="container">
      <Header exibirComponente={exibirComponente} />
      {tela === 'inicio' && <Inicio />}
      {tela === 'sobre' && <Sobre />}
      {tela === 'contato' && <Contato />}
      {scroll > 0 && (
        <button
          className="toTop flex"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          &uarr;
        </button>
      )}
    </div>
  )
}

export default App
