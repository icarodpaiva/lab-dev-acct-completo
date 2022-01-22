import React, { FunctionComponent } from 'react'
import '../App.css'

interface IAppProps {
  linhas: object
}

const Form: FunctionComponent<IAppProps> = props => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>{props.linhas}</tbody>
      </table>
    </>
  )
}

export default Form
