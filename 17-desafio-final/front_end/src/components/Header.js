import React from 'react'
import '../css/Header.css'

const Header = props => {
  return (
    <header className="menu-bg">
      <div className="menu">
        <a href="#inicio" className="menu-logo">
          <div className="menu-logo-img">
            <img
              src="https://img.freepik.com/vetores-gratis/estilo-de-pop-art-de-hamburguer-fast-food_24908-61700.jpg?size=338&ext=jpg"
              alt="logo"
            />
          </div>
          <span>Cook it YourSelf</span>
        </a>
        <nav className="menu-nav">
          <div
            className="menu-nav-mobile"
            onClick={() => {
              const menu = document.querySelector('.menu-nav ul')
              if (menu.style.display === 'flex') {
                menu.style.display = 'none'
              } else {
                menu.style.display = 'flex'
              }
            }}
          >
            <img
              src="https://www.pngrepo.com/png/294718/512/menu.png"
              alt="menu sanduiche"
            />
          </div>
          <ul>
            <li>
              <a
                href="#inicio"
                onClick={() => props.exibirComponente('inicio')}
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => props.exibirComponente('sobre')}>
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={() => props.exibirComponente('contato')}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
