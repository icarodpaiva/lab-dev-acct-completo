import mongoose from 'mongoose'
import { Router } from 'express'
import cursoSchema from '../mongoose/Schema/cursoSchema.js'

const routerAlterarDiaDoCurso = Router()
const Curso = mongoose.model('curso', cursoSchema)

routerAlterarDiaDoCurso.get(
  '/alterar/curso/diadasemana/:id/:nome/:diadasemana/:novodiadasemana',
  async (req, res) => {
    const { id, nome, diadasemana, novodiadasemana } = req.params
    try {
      const result = await Curso.find({
        id,
        nome,
        diaDaSemana: diadasemana
      })

      if (result.length !== 0) {
        for (let i in result) {
          await Curso.updateMany(result[i], {
            $set: { diaDaSemana: novodiadasemana }
          })
        }

        const newResult = await Curso.find({
          id,
          nome,
          diaDaSemana: novodiadasemana
        })

        res.send(`<p>${result.length} documents found:<p/> 
        <p>Before update:</p>
        ${result.join('<br/>')}
        <br/>
        <p>After update:</p>
        ${newResult.join('<br/>')}`)
      } else {
        res.send('No documents found')
      }
    } catch (error) {
      console.log(error)
      res.send('Fail in search')
    }
  }
)

export default routerAlterarDiaDoCurso
