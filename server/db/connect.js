var mysql = require('mysql');
require('dotenv').config()

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manchester777",
    database: "kazeem"
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //var sql = "CREATE TABLE bank_user( userid int AUTO_INCREMENT NOT NULL, first_name VARCHAR(32) NOT NULL, last_name VARCHAR(32) NOT NULL, email VARCHAR(32) NOT NULL, password VARCHAR(255) NOT NULL, unique(email), PRIMARY KEY (userid))";
    var sql = "CREATE TABLE TOKENS( id int NOT NULL, access_token VARCHAR(500) NOT NULL,  userid int NOT NULL, FOREIGN KEY(userid) REFERENCES bank_user(userid))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});



module.exports = mysql;