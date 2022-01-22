import http from 'http'
import axios from 'axios'
import url from 'url'

const port = 8080

http
  .createServer(async (req, res) => {
    let status
    let requestSucess
    let requestFail

    if (req.url !== '/favicon.ico') {
      const adress = `localhost:${port}${req.url}`
      status = url.parse(adress, true).pathname
    }

    await axios
      .get(`http://httpstat.us/${status}`)
      .then(response => (requestSucess = JSON.stringify(response.data)))
      .catch(error => (requestFail = JSON.stringify(error.response.data)))

    res.writeHead(200, {
      'Content-Type': 'text/html'
    })

    requestSucess ? res.write(requestSucess) : res.write(requestFail)

    res.end()
  })
  .listen(port, () => {
    console.log(`O servidor está online em localhost:${port}`)
  })
