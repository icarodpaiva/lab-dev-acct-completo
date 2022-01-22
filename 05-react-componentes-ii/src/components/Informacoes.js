import React from 'react'
import '../App.css'

export default function Informacoes(props) {
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
