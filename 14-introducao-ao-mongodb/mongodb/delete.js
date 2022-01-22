import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  const db = client.db('icaropaiva')

  const aluno2 = {
    nome: 'Nome 2',
    idade: 2,
    curso: 'Curso 2',
    semestre: '2 semestre',
    telefone: '99999-9992'
  }

  db.collection('alunos').deleteOne(aluno2, (err, res) => {
    if (err) throw err
    console.log('Sucess in delete a document')
    client.close()
  })
})
