const { pool } = require('../config')
const {validationResult} = require('express-validator')



class ModelEmployee {
    static GetEmployees = (request, response) => {
        pool.query('SELECT * FROM employees', (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows)
            return response.status(200).json(results.rows)
        })
    }

    static GetEmployeesById = (request, response) => {
      pool.query('SELECT * FROM employees where id = $1', [request.params.id], (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows)
            return response.status(200).json(results.rows)
        })
    }

    static AddEmployee = (request, response) => {
        const errors = validationResult(request)

        if (!errors.isEmpty()) {
            console.log("validation error : " + errors.errors[0].msg)
            return response.status(422).json({ errors: errors.errors[0].msg })
        }
        pool.query('INSERT INTO employees (name, npp) VALUES ($1, $2 ) returning name', [request.body.name, request.body.npp], (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows[0].name + ' has been added')
            return response.status(200).json({"messages" : results.rows[0].name + 'has been added'})
        })
    }

    static DeleteEmployee = (request, response) => {
        pool.query('DELETE FROM employees WHERE id = $1', [request.params.id], (error, results) => {
            if (error) {
                throw error
            }
            console.log(request.params.id)
            return response.status(200).json(results.rows)
        })
    }
}

module.exports = ModelEmployee