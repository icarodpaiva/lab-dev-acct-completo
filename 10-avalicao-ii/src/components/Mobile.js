import React from 'react'
import './Mobile.css'

export default function Mobile(props) {
  return (
    <div className="mobile">
      {props.cartMobile > 0 && (
        <button
          className="mobile-cart"
          onClick={() => {
            document.querySelector('aside').style.display = 'block'
          }}
        >
          {props.cartMobile} &#x1F6D2;
        </button>
      )}

      {props.upCart && props.scrollWindow !== 0 && (
        <button
          className="mobile-up"
          onClick={() => {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
          }}
        >
          &#x1F51D;
        </button>
      )}

      {props.exitCartMobile && (
        <button
          className="mobile-cart"
          onClick={() => {
            document.querySelector('aside').style.display = 'none'
          }}
        >
          &#x274C;
        </button>
      )}
    </div>
  )
}
