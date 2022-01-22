import mongoose from 'mongoose'
import { Router } from 'express'
import alunoSchema from '../mongoose/Schema/alunoSchema.js'

const routerAlterarAlunoDeCurso = Router()
const Aluno = mongoose.model('aluno', alunoSchema)

routerAlterarAlunoDeCurso.get(
  '/alterar/aluno/curso/:nome/:sobrenome/:idcurso/:novoidcurso',
  async (req, res) => {
    try {
      const result = await Aluno.find({
        nome: req.params.nome,
        sobrenome: req.params.sobrenome,
        idCurso: req.params.idcurso
      })

      if (result.length !== 0) {
        for (let i in result) {
          await Aluno.updateMany(result[i], {
            $set: { idCurso: req.params.novoidcurso }
          })
        }

        const newResult = await Aluno.find({
          nome: req.params.nome,
          sobrenome: req.params.sobrenome,
          idCurso: req.params.novoidcurso
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

export default routerAlterarAlunoDeCurso
