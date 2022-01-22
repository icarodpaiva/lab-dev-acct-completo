import mongoose from 'mongoose'
import express from 'express'
import router from './routes/router.js'

const db = mongoose.connection
const port = 1234
const server = express()

mongoose.connect('mongodb://localhost:27017/icaropaiva', {
  useNewUrlParser: true
})
db.on('error', error => console.log(error))
db.once('open', () => console.log('Conected'))

server.use(router)

server.listen(port, () => {
  console.log(`Server online em localhost:${port}`)
})
