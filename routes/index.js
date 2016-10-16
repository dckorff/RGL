var express = require('express');
var router = express.Router();
//var http = require('http');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/stock/:symbol', function(req, res){

    request('https://query1.finance.yahoo.com/v7/finance/chart/' + req.params.symbol + '?range=max&period=1d', 

      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
        
    })


});

module.exports = router;
