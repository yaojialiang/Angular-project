const db = require('../db');
const apiResult = require('../utils/apiResult')
const filter = require('../utils/filter')

module.exports = {
    register(app){
        app.get('/goods', (req, res) => {
            let page = req.query.page;
            let pageItems = req.query.pageitems;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods`;
            if(page && pageItems){
                sql+=` limit ${(page - 1) * pageItems},${pageItems}`;
            }
            sql +=";select FOUND_ROWS() as rowsCount;";
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })
        app.get('/sgoods',(req,res) => {
            var obj=req.query;

            var sql = `select * from goods where `
            for(var attr in obj){
                if(attr=='_'){

                }else{
                    sql+=`${attr}='${obj[attr]}' and `
                }
                
            }
            sql+=`1=1`;
            sql +=";select FOUND_ROWS() as rowsCount;";
            console.log(sql);
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })
        app.get('/addgoods', (req, res) => {
            let data = req.query;
            var sql=`insert into goods(imgs,time,title,venue,price,introduce,kind,top) values('${data.imgs}','${data.time}','${data.title}','${data.venue}','${data.price}','${data.introduce}','${data.kind}','${data.top||null}')`;
             db.mysql.insert(sql, function(data){
                console.log(data)
                res.send(data);
            })
        })
        app.get('/login',(req,res) => {
            let username=req.query.username;
            let password=req.query.password;
            var sql= `select * from user where username='${username}' and password='${password}'`;
            sql +=";select FOUND_ROWS() as rowsCount;";
            console.log(sql);
            db.mysql.select(sql, function(data){
                console.log(data);
                res.send(data)
            })
        })
        app.get('/delgoods',(req,res) => {
            var obj=req.query;
            var sql = `delete from goods where `
            for(var attr in obj){
                sql+=`${attr}='${obj[attr]}' and `
            }
            sql+=`1=1`;
            console.log(sql);
            db.mysql.delete(sql, function(data){
                res.send(data);
            })
        })
        app.get('/upgoods',(req,res) => {
            var data=req.query.data;
            var str='';
            for(var value in data){
                str+=`${value}='${data[value]}',`
            }
            str=str.slice(0,str.length-1);
            var sql=`update goods SET ${str} WHERE id='${data.id}'`;
            db.mysql.update(sql, function(data){
                if(data){
                    res.send({status:true})
                }else{
                    res.send({status:false})
                }
            })
        })
        app.get('/fuzzygoods',(req,res) => {
            var str=req.query.data;
            var sql = `select * from goods where concat(title, ',', venue ,',', price,',', introduce,',', kind) like '%${str}%';`
            sql +=";select FOUND_ROWS() as rowsCount;";
            console.log(sql);
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })
        

    }
}