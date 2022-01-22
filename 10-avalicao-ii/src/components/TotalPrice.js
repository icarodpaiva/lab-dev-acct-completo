import React from 'react'

export default function Totalprice(props) {
  return (
    <>
      <h1>Carrinho</h1>
      <h2>
        Preço Total: <br /> R$ &nbsp;
        {props.priceTotal}
      </h2>
      <h2>
        Quantidade de Produtos: <br /> {props.quantityTotal}
      </h2>
      <button className="finish" onClick={() => props.onClick()}>
        &#x1F49C; Finalizar Compra &#x1F49C;
      </button>
    </>
  )
}
