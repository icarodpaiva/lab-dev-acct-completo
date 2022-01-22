import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  const db = client.db('icaropaiva')

  const aluno10 = {
    nome: 'Nome 10',
    idade: 10,
    curso: 'Curso 10',
    semestre: '10 semestre',
    telefone: '99999-99910'
  }

  db.collection('alunos').findOne(aluno10, (err, res) => {
    if (err) throw err
    res ? console.log(res) : console.log('No documents found')
    client.close()
  })
})
