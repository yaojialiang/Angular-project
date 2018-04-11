const db = require('../db');
const apiResult = require('../utils/apiResult')
const filter = require('../utils/filter')

module.exports = {
    register(app){
        app.get('/adlgin', (req, res) => {
            let username = req.query.username;
            let password = req.query.password;
            var sql = `select * from admin where username='${username}' and password='${password}'`;
            sql +=";select FOUND_ROWS() as rowsCount;";
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })

        app.get('/sadmin', (req, res) => {
            var username = req.query.username;
            var password = req.query.password;
            var sql = `SELECT * FROM admin WHERE username like '${username}'`;
            db.mysql.search(sql, function(data){
                console.log(data);
                res.send(data);
            })
        })
        app.get('/iadmin', (req, res) => {
            var username = req.query.username;
            var password = req.query.password;
            var sql = `INSERT INTO admin(username,password) VALUES ('${username}','${password}')`;
            db.mysql.insert(sql, function(data){
                
                res.send(data);
            })
        })
        
        app.get('/dadmin', (req, res) => {
            var username = req.query.username;
            var sql = `DELETE FROM  admin WHERE username = '${username}'`;
            db.mysql.delete(sql, function(data){
                
                res.send(data);
            })
        })

        app.get('/uadmin', (req, res) => {
            var username = req.query.username;
            var password = req.query.password;
            var sql = `UPDATE admin SET password = '${password}' WHERE username = '${username}'`;
            db.mysql.update(sql, function(data){
                
                res.send(data);
            })
        })
     }
}