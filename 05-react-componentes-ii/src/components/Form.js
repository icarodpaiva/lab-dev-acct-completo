import React from 'react'
import '../App.css'

export default function Form(props) {
  return (
    <>
      <form onSubmit={e => props.onSubmit && props.onSubmit(e)}>
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label>
            Nome:
            <input
              type="text"
              placeholder="Seu nome aqui"
              minLength={3}
              maxLength={33}
              required
              onChange={e =>
                props.onChangeNome && props.onChangeNome(e.target.value)
              }
              value={props.valueNome}
            />
          </label>
          <label>
            Telefone:
            <input
              type="tel"
              placeholder="1140028922"
              maxLength={11}
              required
              onChange={e =>
                props.onChangeTelefone && props.onChangeTelefone(e.target.value)
              }
              value={props.valueTelefone}
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              placeholder="seuemail@email.com"
              maxLength={33}
              required
              onChange={e =>
                props.onChangeEmail && props.onChangeEmail(e.target.value)
              }
              value={props.valueEmail}
            />
          </label>
          <label>
            Descrição:
            <textarea
              placeholder="Descreva-se em poucas palavras"
              minLength={3}
              maxLength={165}
              required
              onChange={e =>
                props.onChangeDescricao &&
                props.onChangeDescricao(e.target.value)
              }
              value={props.valueDescricao}
            />
          </label>
        </fieldset>
        <input type="submit" value="Enviar informações" />
      </form>
    </>
  )
}
