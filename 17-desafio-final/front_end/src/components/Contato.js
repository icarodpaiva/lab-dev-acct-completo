import React from 'react'
import '../css/Contato.css'

const Contato = () => {
  return (
    <section className="contato-bg flex">
      <div className="contato flex">
        <div className="contato-info flex">
          <h1>Contate a Cook it YourSelf</h1>
          <div className="contato-info-banners flex">
            <Banner
              img={
                'https://static.vecteezy.com/ti/vetor-gratis/p3/1936474-cute-bakery-chef-boy-holding-strawberry-cake-sorrindo-cartoon-art-illustration-vetor.jpg'
              }
              titulo={'Ligação ou E-mail:'}
              item1={'Whats App: (11) 94002-8922'}
              ico1={'https://cdn-icons-png.flaticon.com/512/174/174879.png'}
              item2={'Telefone: (11) 3687-3000'}
              ico2={
                'https://e7.pngegg.com/pngimages/207/991/png-clipart-telephone-icon-icon-phone-pic-electronics-image-file-formats.png'
              }
              item3={'E-mail: cookit@cook.co'}
              ico3={
                'https://homeoffice.com.br/wp-content/uploads/2020/06/e-mail-icon.png'
              }
            />
            <Banner
              img={
                'https://static.vecteezy.com/ti/vetor-gratis/p3/1936494-sorrindo-chefs-cooking-holding-cake-bakery-cartoon-art-illustration-vetor.jpg'
              }
              titulo={'Redes Sociais:'}
              item1={'Twitter: @Cookit'}
              ico1={
                'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'
              }
              item2={'Instagram: @Cookit'}
              ico2={
                'https://images.vexels.com/media/users/3/137380/isolated/lists/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-do-icone-do-instagram.png'
              }
              item3={'Facebook: Cookit.Yourself'}
              ico3={
                'https://www.goiania.go.leg.br/imagens/icon_facebook.png/image_preview'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const Banner = props => {
  return (
    <>
      <div className="contato-info-banners-img">
        <img src={props.img} alt="img" />
      </div>
      <h2>{props.titulo}</h2>
      <ul className="contato-info-banners-banner flex">
        <li>
          <a href="contato" className="flex">
            <div className="contato-info-banners-banner-img flex">
              <img src={props.ico1} alt="img" />
            </div>
            {props.item1}
          </a>
        </li>
        <li>
          <a href="contato" className="flex">
            <div className="contato-info-banners-banner-img flex">
              <img src={props.ico2} alt="img" />
            </div>
            {props.item2}
          </a>
        </li>
        <li>
          <a href="contato" className="flex">
            <div className="contato-info-banners-banner-img flex">
              <img src={props.ico3} alt="img" />
            </div>
            {props.item3}
          </a>
        </li>
      </ul>
    </>
  )
}

export default Contato
