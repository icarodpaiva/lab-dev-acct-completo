import mongoose from 'mongoose'
import { Router } from 'express'
import alunoSchema from '../mongoose/Schema/alunoSchema.js'

const routerCadastrarAluno = Router()

routerCadastrarAluno.get('/cadastrar/aluno', async (req, res) => {
  const Aluno = mongoose.model('aluno', alunoSchema)

  const alunos = []
  for (let i = 0; i < 10; i++) {
    alunos.push(
      new Aluno({
        id: i + 1,
        nome: `aluno ${i + 1}`,
        sobrenome: `sobrenome ${i + 1}`,
        idade: i + 1,
        idCurso: `${i + 1}`
      })
    )
  }

  try {
    for (let c in alunos) {
      await alunos[c].save()
    }
    res.send(
      `<p>Sucess in populate ${alunos.length} documents:</p> 
      ${alunos.join('<br/>')}`
    )
  } catch (error) {
    console.log(error)
    res.send('Fail in populate')
  }
})

routerCadastrarAluno.get(
  '/cadastrar/aluno/:id/:nome/:sobrenome/:idade/:idcurso',
  async (req, res) => {
    const Aluno = mongoose.model('aluno', alunoSchema)
    const { id, nome, sobrenome, idade, idcurso } = req.params
    const aluno = new Aluno({
      id,
      nome,
      sobrenome,
      idade,
      idCurso: idcurso
    })

    try {
      await aluno.save()
      res.send(`<p>Sucess in populate a document:<p/> ${aluno}`)
    } catch (error) {
      console.log(error)
      res.send('Fail in populate')
    }
  }
)

export default routerCadastrarAluno
