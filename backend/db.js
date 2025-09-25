let mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"swagat",
    database:"geofence"
});

db.connect((err)=>{
  if(err){
    console.log("error while connection");
    return;
  }
  console.log("connection successfull");
})

module.exports = db;

