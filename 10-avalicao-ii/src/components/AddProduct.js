import React from 'react'
import './AddProduct.css'

export default function AddProduct(props) {
  return (
    <div className="addProduct">
      <h1>Cadastrar Produto</h1>
      <form onSubmit={e => props.onSubmit(e)}>
        <label>
          Nome:
          <input
            type="text"
            placeholder="Ex: Bicicleta"
            onChange={e => {
              props.onChangeName && props.onChangeName(e.target.value)
            }}
            value={props.valueName && props.valueName}
            maxLength={15}
            required
          />
        </label>
        <label>
          Preço (R$):
          <input
            type="number"
            placeholder="Ex: 100"
            onChange={e => {
              props.onChangePrice && props.onChangePrice(e.target.value)
            }}
            value={props.valuePrice && props.valuePrice}
            max={999999}
            maxLength={10}
            required
          />
        </label>
        <div className="submitButton">
          <input type="submit" value="&#x2714; Cadastrar &#x2714; " />
        </div>
      </form>
    </div>
  )
}
