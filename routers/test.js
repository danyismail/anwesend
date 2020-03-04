var express = require('express')
var router = express.Router()
const rp = require('request-promise');

const auth = require('../middleware/middleware')

router.get('/', function(req, res, next) {
    var apiKey = process.env.API_KEY;    
    let url = 'http://localhost:3000/employees';
  

    var options = {
      uri: url,
      method: 'GET',
      json: true,
      headers: {
        'API_KEY': apiKey
      }
    };

    let data = "";
    rp(options)
    .then(function (resp) {
        console.log("data collected");
        res.send(resp);
    });
})    


module.exports = router