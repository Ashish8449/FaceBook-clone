const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('./routes/user')

const { readdirSync } = require('fs')
const app = express()
// only req form these routes are allowed
let allowed = ['http://localhost:3000', 'something']

function options(req, res) {
  let tem
  const origin = req.header('Origin')
  if (allowed.indexOf(origin) != -1) {
    tem = {
      origin: true,
      optionSuccessStatus: 200,
    }
    console.log('cke')
  } else {
    tem = {
      origin: false,
    }
  }
  res(null, tem)
}
app.use(cors(options))

readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)))
console.log(readdirSync('./routes'))

app.get('/', (req, res) => {
  res.send('welcome from home')
})
app.listen(5000, () => {
  console.log('server is lesting ...')
})
