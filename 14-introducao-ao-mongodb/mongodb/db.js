import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  const db = client.db('icaropaiva')

  const alunos = []
  for (let i = 0; i < 10; i++) {
    alunos.push({
      nome: `Nome ${i+1}`,
      idade: i+1,
      curso: `Curso ${i+1}`,
      semestre: `${i+1} semestre`,
      telefone: `99999-999${i+1}`
    })
  }

  db.collection('alunos').insertMany(alunos, (err, res) => {
    if (err) throw err
    console.log(`Sucess in insert ${alunos.length} documents`)
    client.close()
  })
})
