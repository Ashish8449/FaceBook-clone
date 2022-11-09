const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')
dotenv.config()
const userRouter = require('./routes/user')

const { readdirSync } = require('fs')
const globalErrorHandler = require('./controllers/error')
const app = express()
const morgan = require('morgan')
// only req form these routes are allowed
let allowed = [
  'http://localhost:3000',
  'https://facebookclone231.netlify.app/',
]

function options(req, res) {
  let tem
  const origin = req.header('Origin')
  if (allowed.indexOf(origin) != -1) {
    tem = {
      origin: true,
      optionSuccessStatus: 200,
    }
  } else {
    tem = {
      origin: false,
    }
  }
  res(null, tem)
}

app.use(express.json())
app.use(cors(options))
app.use(
  fileUpload({
    useTempFiles: true,
  })
)
app.use(morgan('dev'))

// routes
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)))

// dataBase req

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connected sucesfully'))
  .catch((err) => console.log('Error to connect with db'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('server is listing ...')
})

app.use(globalErrorHandler)
