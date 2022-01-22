import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  const db = client.db('icaropaiva')

  const aluno1 = {
    nome: 'Nome 1',
    idade: 1,
    curso: 'Curso 1',
    semestre: '1 semestre',
    telefone: '99999-9991'
  }

  const novoAluno1 = {
    nome: 'Icaro Deyckson de Paiva',
    idade: 25,
    curso: 'Gestao da Tecnologia da Informacao',
    semestre: '1 semestre',
    telefone: '97783-0855'
  }

  db.collection('alunos').updateOne(
    aluno1,
    { $set: novoAluno1 },
    (err, res) => {
      if (err) throw err
      console.log('Sucess in update a document')
      client.close()
    }
  )
})
