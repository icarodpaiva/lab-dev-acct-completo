import mongoose from 'mongoose'
import { Router } from 'express'
import alunoSchema from '../mongoose/Schema/alunoSchema.js'

const routerPesquisarAluno = Router()
const Aluno = mongoose.model('aluno', alunoSchema)

routerPesquisarAluno.get('/pesquisar/aluno/id/:id', async (req, res) => {
  try {
    const regexId = new RegExp(req.params.id)
    const result = await Aluno.find({ id: regexId })
    if (result.length !== 0) {
      res.send(
        `<p>${result.length} documents found:<p/> ${result.join('<br/>')}`
      )
    } else {
      res.send('No documents found')
    }
  } catch (error) {
    console.log(error)
    res.send('Fail in search')
  }
})

routerPesquisarAluno.get(
  '/pesquisar/aluno/nomesobrenome/:nome/:sobrenome',
  async (req, res) => {
    try {
      const regexNome = new RegExp(req.params.nome)
      const regexSobrenome = new RegExp(req.params.sobrenome)
      const result = await Aluno.find({
        nome: regexNome,
        sobrenome: regexSobrenome
      })
      if (result.length !== 0) {
        res.send(
          `<p>${result.length} documents found:<p/> ${result.join('<br/>')}`
        )
      } else {
        res.send('No documents found')
      }
    } catch (error) {
      console.log(error)
      res.send('Fail in search')
    }
  }
)

routerPesquisarAluno.get(
  '/pesquisar/aluno/idcurso/:idcurso',
  async (req, res) => {
    try {
      const regexIdCurso = new RegExp(req.params.idcurso)
      const result = await Aluno.find({ idCurso: regexIdCurso })
      if (result.length !== 0) {
        res.send(
          `<p>${result.length} documents found:<p/> ${result.join('<br/>')}`
        )
      } else {
        res.send('No documents found')
      }
    } catch (error) {
      console.log(error)
      res.send('Fail in search')
    }
  }
)

export default routerPesquisarAluno
