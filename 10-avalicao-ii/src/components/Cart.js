import React from 'react'
import './Cart.css'

export default function Cart(props) {
  return (
    <div className="containerProduct">
      <div className="product">
        <div className="product-info">
          <p>
            Nome: <br />
            <span>{props.name}</span>
          </p>
          <p>
            Preço: <br />
            <span>R$ {props.price}</span>
          </p>
          <div className="quantity">
            <div>
              Quantidade: <br />
              <div
                onClick={() => {
                  props.decrease(props.name)
                }}
              >
                <span>-</span>
              </div>
              <span>{props.quantity}</span>
              <div
                onClick={() => {
                  props.increase(props.name)
                }}
              >
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.remove(props.name)
          }}
        >
          &#x274C;
        </button>
      </div>
    </div>
  )
}
