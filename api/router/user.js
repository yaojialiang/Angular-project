const db = require('../db');
const apiResult = require('../utils/apiResult')
const filter = require('../utils/filter')

module.exports = {
    register(app){
        app.get('/user', (req, res) => {
            let page = req.query.page;
            let pageItems = req.query.pageItems;
            var sql = `select SQL_CALC_FOUND_ROWS * from user`;
            if(page && pageItems){
                sql+=` limit ${(page - 1) * pageItems},${pageItems}`;
            }
            sql +=";select FOUND_ROWS() as rowsCount;";
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })
        app.get('/suser',(req,res)=>{
            var obj=req.query;
            var sql = `select * from user where `
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

        app.get('/reg', (req, res) => {
           let data = req.query;
            console.log(data)
           if(data.username){
                var sql=`insert into user(username,password) values('${data.username}','${data.password}')`;
               
                 db.mysql.insert(sql, function(data){
                    console.log(sql)
                    res.send(data);
                })
             }else{
                res.send({status:false})
             }
            
        })
        app.get('/deluser',(req,res) => {
            var obj=req.query;
            var sql = `delete from user where `
            for(var attr in obj){
                sql+=`${attr}='${obj[attr]}' and `
            }
            sql+=`1=1`;
            console.log(sql);
            db.mysql.delete(sql, function(data){
                res.send(data);
            })
        })
        app.get('/upuser',(req,res) => {
            var data=req.query;
            var str='';
            for(var value in data){
                if(value!='_'){
                    str+=`${value}='${data[value]}',`
                }
                
            }
            str=str.slice(0,str.length-1);
            var sql=`update user SET ${str} WHERE username='${data.username}'`;console.log(sql)
            db.mysql.update(sql, function(data){
                if(data){
                    res.send({status:true})
                }else{
                    res.send({status:false})
                }
            })
        })

        
    }
}