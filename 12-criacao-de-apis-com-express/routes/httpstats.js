import { Router } from 'express'

const router = Router()

function showMsg(res, sleep, code, message) {
  if (sleep > 15000) {
    sleep = 15000
  }

  if (sleep) {
    setTimeout(() => {
      res.send({ code: code, message: message })
    }, sleep)
  } else {
    res.send({ code: code, message: message })
  }
}

router.get('/100/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 100, 'Continue')
})

router.get('/101/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 101, 'Switching Protocols')
})

router.get('/102/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 102, 'Processing')
})

router.get('/103/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 103, 'Early Hints')
})

router.get('/200/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 200, 'OK')
})

router.get('/201/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 201, 'Created')
})

router.get('/202/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 202, 'Accepted')
})

router.get('/203/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 203, 'Non-Authoritative Information')
})

router.get('/204/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 204, 'No Content')
})

router.get('/205/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 205, 'Reset Content')
})

router.get('/206/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 206, 'Partial Content')
})

router.get('/300/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 300, 'Multiple Choices')
})

router.get('/301/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 301, 'Moved Permanently')
})

router.get('/302/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 302, 'Found')
})

router.get('/303/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 303, 'See Other')
})

router.get('/304/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 304, 'Not Modified')
})

router.get('/305/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 305, 'Use Proxy')
})

router.get('/306/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 306, 'Unused')
})

router.get('/307/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 307, 'Temporary Redirect')
})

router.get('/308/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 308, 'Permanent Redirect')
})

router.get('/400/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 400, 'Bad Request')
})

router.get('/401/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 401, 'Unauthorized')
})

router.get('/402/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 402, 'Payment Required')
})

router.get('/403/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 403, 'Forbidden')
})

router.get('/404/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 404, 'Not Found')
})

router.get('/405/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 405, 'Method Not Allowed')
})

router.get('/406/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 406, 'Not Acceptable')
})

router.get('/407/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 407, 'Proxy Authentication Required')
})

router.get('/408/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 408, 'Request Timeout')
})

router.get('/409/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 409, 'Conflict')
})

router.get('/410/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 410, 'Gone')
})

router.get('/411/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 411, 'Length Required')
})

router.get('/412/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 412, 'Precondition Failed')
})

router.get('/413/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 413, 'Request Entity Too Large')
})

router.get('/414/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 414, 'Request-URI Too Long')
})

router.get('/415/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 415, 'Unsupported Media Type')
})

router.get('/416/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 416, 'Requested Range Not Satisfiable')
})

router.get('/417/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 417, 'Expectation Failed')
})

router.get('/418/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 418, "I'm a teaport")
})

router.get('/421/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 421, 'Misdirected Request')
})

router.get('/422/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 422, 'Unprocessable Entity')
})

router.get('/423/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 423, 'Locked')
})

router.get('/425/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 425, 'Too Early')
})

router.get('/426/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 426, 'Upgrade Required')
})

router.get('/428/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 428, 'Precondition Required')
})

router.get('/429/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 429, 'Too Many Requests')
})

router.get('/431/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 431, 'Request Header Fields Too Large')
})

router.get('/451/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 451, 'Unavailable For Legal Reasons')
})

router.get('/500/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 500, 'Internal Server Error')
})

router.get('/501/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 501, 'Not Implemented')
})

router.get('/502/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 502, 'Bad Gateway')
})

router.get('/503/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 503, 'Service Unavailable')
})

router.get('/504/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 504, 'Gateway Timeout')
})

router.get('/505/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 505, 'HTTP Version Not Supported')
})

router.get('/506/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 506, 'Variant Also Negotiates')
})

router.get('/507/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 507, 'Insufficient Storage')
})

router.get('/511/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 511, 'Network Authentication Required')
})

router.get('/520/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 520, 'Web server is returning an unknown error')
})

router.get('/522/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 522, 'Connection timed out')
})

router.get('/524/:sleep?', (req, res) => {
  const sleep = Number(req.params.sleep)
  showMsg(res, sleep, 524, 'A timeout occurred')
})

export default router
