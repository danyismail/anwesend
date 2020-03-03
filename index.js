const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const helmet = require('helmet')
// const compression = require('compression')
const {check} = require('express-validator')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

const employeesRouter = require('./routers/employee')

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/employees', [check('npp').not().isEmpty()], employeesRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))