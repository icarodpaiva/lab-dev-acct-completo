import React from 'react'
import './ProductsForSale.css'

export default function SkinsForSale(props) {
  return (
    <div className="banner">
      <p>
        <span>Nome do produto:</span> {props.name}
      </p>
      <p>
        <span>Preço do produto:</span> {`R$:${props.price}`}
      </p>

      <button onClick={() => props.add(props.name)}>
        &#x1F6D2; Adicionar &#x1F6D2;
      </button>

      <div className="button_remove">
        <button onClick={() => props.unsubscribe(props.name)}>&#x274C;</button>
      </div>
    </div>
  )
}
