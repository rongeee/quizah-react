const request = require("request");
const express = require("express");
const path = require("path");

let app = express();
const PORT = process.env.PORT || 3000;

var sql = require("mysql");

var connection = sql.createConnection({
    user: 'tehvogww_ron',
    password: 'QvNds6JTjQhPt3P',
    server: 'localhost', 
    database: 'tehvogww_ron' 
});


app.get('/addscore', function (req, res) {
  console.log(req)
    let name = req.NÅGONTING
    let points = req.NÅGONTING
    let difficulty = req.NÅGONTING

    connection.connect();

    connection.query(`INSERT INTO quizah_highscore(name,difficulty,points) VALUES(${name},${difficulty},${points});`, function (err, recordset) {  
      if (err) console.log(err)
        res.send(recordset);
      })
      connection.end();
});


app.listen(PORT, function () {
    console.log('Server is running..' + PORT);
})
