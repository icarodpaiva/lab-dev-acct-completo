import mongoose from 'mongoose'
import { Router } from 'express'
import cursoSchema from '../mongoose/Schema/cursoSchema.js'

const routerPesquisarCurso = Router()
const Curso = mongoose.model('curso', cursoSchema)

routerPesquisarCurso.get('/pesquisar/curso/id/:id', async (req, res) => {
  try {
    const regexId = new RegExp(req.params.id)
    const result = await Curso.find({ id: regexId })
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

routerPesquisarCurso.get(
  '/pesquisar/curso/diadasemana/:diadasemana',
  async (req, res) => {
    try {
      const regexDiaDaSemana = new RegExp(req.params.diadasemana)
      const result = await Curso.find({
        diaDaSemana: regexDiaDaSemana
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

export default routerPesquisarCurso
