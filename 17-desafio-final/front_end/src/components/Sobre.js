import React from 'react'
import '../css/Sobre.css'

const Sobre = () => {
  return (
    <section className="sobre-bg flex">
      <div className="sobre-info-container flex">
        <div className="sobre-info flex">
          <h1>Sobre a Cook it YourSelf</h1>
          <div className="sobre-info-img">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/936/458/original/cute-bakery-chefs-boy-and-girl-welcome-smiling-cartoon-art-illustration-vector.jpg"
              alt="logo"
            />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has.
          </p>
        </div>
        <div className="sobre-banners flex">
          <Banner
            questao={'Quem'}
            questao1={'somos?'}
            descricao={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
            }
            botao={'Nossa História'}
          />
          <Banner
            questao={'O que'}
            questao1={'fazemos'}
            descricao={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
            }
            botao={'Nossos Serviços'}
          />
          <Banner
            questao={'Como'}
            questao1={'se associar?'}
            descricao={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
            }
            botao={'Associe-se'}
          />
        </div>
        <div className="sobre-mais flex">
          <Mais
            img={
              'https://365psd.com/images/previews/581/cute-funky-store-house-building-34371.png'
            }
            item={'A instituição'}
          />
          <Mais
            img={
              'https://image.freepik.com/free-vector/cute-fat-girl-character_123847-570.jpg'
            }
            item={'Representatividade'}
          />
          <Mais
            img={
              'https://cdn.custom-cursor.com/packs/2459/sausage-and-sauce-cursor-pack.png'
            }
            item={'História'}
          />
        </div>
      </div>
    </section>
  )
}

const Banner = props => {
  return (
    <div className="sobre-banners-banner flex">
      <h2>
        {props.questao} <br />
        <span>{props.questao1}</span>
      </h2>
      <p>{props.descricao}</p>
      <button>{props.botao}</button>
    </div>
  )
}

const Mais = props => {
  return (
    <div className="sobre-mais-item flex">
      <div className="sobre-mais-item-img flex">
        <img src={props.img} alt="comida" />
      </div>
      <h3>
        <a href="#sobre">{props.item}</a>
      </h3>
    </div>
  )
}

export default Sobre
