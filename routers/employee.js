var express = require('express')
var router = express.Router()

const ModelEmployee = require('../models/employee')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  // console.log('Time: ', Date.now())
  if (!req.header('API_KEY') || req.header('API_KEY') !== process.env.API_KEY) {
    return res.status(401).json({ status: 'error', message: 'Unauthorized.' })
  }
  next()
})

router.get('/',  ModelEmployee.GetEmployees)
router.get('/detail/:id', ModelEmployee.GetEmployeesById)
router.post('/add',ModelEmployee.AddEmployee)
router.delete('/delete/:id', ModelEmployee.DeleteEmployee)

module.exports = router