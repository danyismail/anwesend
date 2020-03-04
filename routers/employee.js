var express = require('express')
var router = express.Router()

const auth = require('../middleware/middleware')
const ModelEmployee = require('../models/employee')


router.get('/', auth, ModelEmployee.GetEmployees)
router.get('/detail/:id', auth, ModelEmployee.GetEmployeesById)
router.post('/add', auth, ModelEmployee.AddEmployee)
router.delete('/delete/:id', auth, ModelEmployee.DeleteEmployee)

module.exports = router