const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')

// const compression = require('compression')
const { check } = require('express-validator')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use('/static', express.static(path.join(__dirname, 'public')))



const employeesRouter = require('./routers/employee')
const testRouter = require('./routers/test')


app.get('/', (req, res) => res.redirect('/static/hello.html'))
app.use('/employees', [check('npp').not().isEmpty()], employeesRouter)
app.use('/test', testRouter)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))