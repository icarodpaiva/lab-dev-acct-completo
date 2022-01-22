import { Router } from 'express'
import routerCadastrarAluno from './cadastrarAluno.js'
import routerCadastrarCurso from './cadastrarCurso.js'
import routerPesquisarAluno from './pesquisarAluno.js'
import routerPesquisarCurso from './pesquisarCurso.js'
import routerAlterarAlunoDeCurso from './alterarAlunoDeCurso.js'
import routerAlterarDiaDoCurso from './alterarDiaDoCurso.js'

const router = Router()

router.use(routerCadastrarAluno)
router.use(routerCadastrarCurso)
router.use(routerPesquisarAluno)
router.use(routerPesquisarCurso)
router.use(routerAlterarAlunoDeCurso)
router.use(routerAlterarDiaDoCurso)

router.use((req, res) => {
  res.type('html')
  res.send(`<h1>Rotas de acesso:</h1>
  <h2>Para cadastrar:</h2>
  <dl>
    <dt>/cadastrar/aluno/:id/:nome/:sobrenome/:idade/:idcurso</dt>
    <dd>
      Cria um novo cadastro de aluno, deve-se informar o id, nome, sobrenome,
      idade (use numeros )e id do curso.
    </dd>
    <dt>/cadastrar/aluno</dt>
    <dd>
      Cria 10 cadastros genericos de alunos, usado apenas para popular o banco de
      dados
    </dd>
    <dt>/cadastrar/curso/:id/:nome/:diadasemana</dt>
    <dd>
      Cria um novo cadastro de curso, deve-se informar o id, nome e dia da semana
      do curso (segunda, terça, quarta, quinta ou sexta)
    </dd>
    <dt>/cadastrar/curso</dt>
    <dd>
      Cria 10 cadastros genericos de cursos, usado apenas para popular o banco de
      dados
    </dd>
  </dl>
  
  <h2>Para Pesquisar:</h2>
  <dl>
    <dt>/pesquisar/aluno/id/:id</dt>
    <dd>Pesquisa os alunos cadastrados pelo id</dd>
    <dt>/pesquisar/aluno/nomesobrenome/:nome/:sobrenome</dt>
    <dd>Pesquisa os alunos cadastrados pelo nome e sobrenome</dd>
    <dt>/pesquisar/aluno/idcurso/:idcurso</dt>
    <dd>Pesquisa os alunos cadastrados pelo id do curso</dd>
    <dt>/pesquisar/curso/id/:id</dt>
    <dd>Pesquisa os cursos cadastrados pelo id</dd>
    <dt>/pesquisar/curso/diadasemana/:diadasemana</dt>
    <dd>Pesquisa os cursos cadastrados pelo dia da semana</dd>
  </dl>
  
  <h2>Para Alterar:</h2>
  <dl>
    <dt>/alterar/aluno/curso/:nome/:sobrenome/:idcurso/:novoidcurso</dt>
    <dd>
      Altera o cadastro do id do curso do aluno informado. Para isso é necessário
      seu nome, sobrenome e id do curso, além do novo id do curso.
    </dd>
    <dt>/alterar/curso/diadasemana/:id/:nome/:diadasemana/:novodiadasemana</dt>
    <dd>
      Altera o cadastro do dia da semana do curso informado. Para isso é
      necessário seu id, nomee e dia da semana, além do dia da semana do curso.
    </dd>
  </dl> 
  `)
})

export default router
