import React, { useState } from 'react'
import '../../css/Cadastro.css'
import Ingredientes from './Ingredientes'
import Utensilios from './Utensilios'
import ComoFazer from './ComoFazer'
import Informacoes from './Informacoes'

const Cadastro = props => {
  const [tela, setTela] = useState('ingredientes')
  const [ingredients, setIngredients] = useState()
  const [tools, setTools] = useState(['NoTools'])
  const [howToMake, setHowToMake] = useState()

  const exibirComponente = componente => {
    componente === 'ingredientes' && setTela('ingredientes')
    componente === 'tools' && setTela('tools')
    componente === 'comoFazer' && setTela('comoFazer')
    componente === 'informacoes' && setTela('informacoes')
  }

  return (
    <section className="cadastro-bg flex">
      <div className="cadastro">
        <h1>Crie a sua Receita</h1>

        {tela === 'ingredientes' && (
          <Ingredientes
            legenda={'Escolha os ingredientes:'}
            setIngredients={setIngredients}
            exibirComponente={exibirComponente}
            redirecionar={props.redirecionar}
          />
        )}

        {tela === 'tools' && (
          <Utensilios
            exibirComponente={exibirComponente}
            legenda={'Utensílios necessários:'}
            setTools={setTools}
          />
        )}

        {tela === 'comoFazer' && (
          <ComoFazer
            exibirComponente={exibirComponente}
            legenda={'Como prepará-la? Separe em etapas:'}
            setHowToMake={setHowToMake}
          />
        )}

        {tela === 'informacoes' && (
          <Informacoes
            exibirComponente={exibirComponente}
            legenda={'Informações adicionais:'}
            ingredients={ingredients}
            tools={tools}
            howToMake={howToMake}
            setIngredients={setIngredients}
            setTools={setTools}
            setHowToMake={setHowToMake}
            redirecionar={props.redirecionar}
            deletar={props.deletar}
            id={props.id}
            setRequisicao={props.setRequisicao}
            setCriadoOuDeletado={props.setCriadoOuDeletado}
            setAlterar={props.setAlterar}
          />
        )}
      </div>
    </section>
  )
}

export default Cadastro
