import mongoose from 'mongoose'
import express from 'express'
import router from './routes/routes.js'

const db = mongoose.connection
const port = 2525
const server = express()

mongoose.connect('mongodb://localhost:27017/icaropaiva', {
  useNewUrlParser: true
})
db.on('error', err => console.log(err))
db.once('open', () => console.log('conected'))

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  if (req.method === "OPTIONS") {
      return res.status(200).end();
  } else {
      next();
  }
});

server.use(router)

server.listen(port, () => {
  console.log(`server online em localhost:${port}`)
})
