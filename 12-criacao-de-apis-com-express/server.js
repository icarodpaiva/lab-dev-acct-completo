import express from 'express'
import stats from './routes/httpstats.js'

const server = express()

server.use(stats)

server.use((req, res) => {
  res.send({ code: 404, message: 'Esse valor não é um status válido.' })
})

server.listen(3003)
