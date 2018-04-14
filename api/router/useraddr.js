const db = require('../db');
const apiResult = require('../utils/apiResult')
const filter = require('../utils/filter')

module.exports = {
    register(app){
        app.get('/useraddr', (req, res) => {
            var obj=req.query;

            var sql = `select * from useraddr where `
            for(var attr in obj){
                sql+=`${attr}='${obj[attr]}' and `
            }
            sql+=`1=1`;
            sql +=";select FOUND_ROWS() as rowsCount;";
            console.log(sql);
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })
        app.get('/adduseraddr', (req, res) => {
            let data = req.query;
            var sql=`insert into useraddr(username,phone,address,adrdeta,shouname) values('${data.username}','${data.phone}','${data.address}','${data.adrdeta}','${data.shouname}')`;
             db.mysql.insert(sql, function(data){
                console.log(data)
                res.send(data);
            })
        })
        app.get('/deluseraddr',(req,res) => {
            var obj=req.query;
            var sql = `delete from useraddr where `
            for(var attr in obj){
                sql+=`${attr}='${obj[attr]}' and `
            }
            sql+=`1=1`;
            console.log(sql);
            db.mysql.delete(sql, function(data){
                res.send(data);
            })
        })
        app.get('/upuseraddr',(req,res) => {
            var data=req.query.data;
            var str='';
            for(var value in data){
                str+=`${value}='${data[value]}',`
            }
            str=str.slice(0,str.length-1);
            var sql=`update useraddr SET ${str} WHERE id='${data.id}'`;
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