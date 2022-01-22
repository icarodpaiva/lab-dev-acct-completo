import mongoose from 'mongoose'
import { Router } from 'express'
import cursoSchema from '../mongoose/Schema/cursoSchema.js'

const routerCadastrarCurso = Router()

routerCadastrarCurso.get('/cadastrar/curso', async (req, res) => {
  const Curso = mongoose.model('curso', cursoSchema)

  const cursos = []
  for (let i = 0; i < 10; i++) {
    let c = i
    switch (true) {
      case c % 5 == 0:
        c = 'segunda'
        break
      case c % 5 == 1:
        c = 'terça'
        break
      case c % 5 == 2:
        c = 'quarta'
        break
      case c % 5 == 3:
        c = 'quinta'
        break
      case c % 5 == 4:
        c = 'sexta'
        break
      default:
        c = 'invalido'
    }

    cursos.push(
      new Curso({
        id: `${i + 1}`,
        nome: `curso ${i + 1}`,
        diaDaSemana: `${c}`
      })
    )
  }

  try {
    for (let c in cursos) {
      await cursos[c].save()
    }
    res.send(
      `<p>Sucess in populate ${cursos.length} documents:<p/> ${cursos.join(
        '<br/>'
      )}`
    )
  } catch (error) {
    console.log(error)
    res.send('Fail in populate')
  }
})

routerCadastrarCurso.get(
  '/cadastrar/curso/:id/:nome/:diadasemana',
  async (req, res) => {
    const Curso = mongoose.model('curso', cursoSchema)
    const { id, nome, diadasemana } = req.params
    const curso = new Curso({
      id,
      nome,
      diaDaSemana: diadasemana
    })

    try {
      if (curso.weekendTest()) {
        res.send(
          'Please change the weekday for: segunda, terça, quarta, quinta or sexta '
        )
      } else {
        await curso.save()
        res.send(`<p>Sucess in populate a document:<p/> ${curso}`)
      }
    } catch (error) {
      console.log(error)
      res.send('Fail in populate')
    }
  }
)

export default routerCadastrarCurso
