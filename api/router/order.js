const db = require('../db');
const apiResult = require('../utils/apiResult')
const filter = require('../utils/filter')

module.exports = {
    register(app){
        app.get('/order',(req,res) => {
            var obj=req.query;
            var sql = `select * from userorder where `
            for(var attr in obj){
                sql+=`${attr}='${obj[attr]}' and `
            }
            sql+=`1=1`;
            sql +=";select FOUND_ROWS() as rowsCount;";
            console.log(sql)
            db.mysql.select(sql, function(data){

                if(data.data.length<1){
                    res.send({status:false})
                }else{
                    var sql = `select * from goods where `
                    data.data.forEach((item) => {
                        sql+=`id=${item.goodsID} or `
                    })
                    sql=sql.slice(0,sql.length-4);
                    sql +=";select FOUND_ROWS() as rowsCount;";
                    
                    db.mysql.select(sql, function(data2){
                        var arr=[]
                        data2.data.forEach((item,idx) => {
                            arr.push(Object.assign(item,data.data[idx]))
                        })
                        res.send({status:true,data:arr})

                    })
                }
                
            })
        })
        app.get('/singorder', (req, res) => {
            var obj=req.query;
            var sql = `select * from userorder where `
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
        app.get('/addorder', (req, res) => {
            let data = req.query;
            var sql = `select * from userorder where username='${data.username}' and goodsID='${data.id}'`
            sql +=";select FOUND_ROWS() as rowsCount;";
            db.mysql.select(sql, function(data1){
                if(data1.data.length>0){
                    res.send(false);
                }else{
                    
                    var sql=`insert into userorder(username,goodsID,price,buy,status) values('${data.username}','${data.id}','${data.price}','${data.buy}','${data.status}')`;
                    
                     db.mysql.insert(sql, function(data){
                        
                        res.send(data);
                    })
                }
                
            })
            
        })
        app.get('/sorder',(req,res)=>{
            let data = req.query;
            var sql = `select * from userorder where username='${data.username}'`
            sql +=";select FOUND_ROWS() as rowsCount;";
            db.mysql.select(sql,function(data1){
                res.send(data1);
            })
        })
        app.get('/uporder',(req,res) => {
            var data=req.query.data;
            var str='';
            for(var value in data){
                str+=`${value}='${data[value]}',`
            }
            str=str.slice(0,str.length-1);
            var sql=`update userorder SET ${str} WHERE id='${data.id}'`;
            db.mysql.update(sql, function(data){
                if(data){
                    res.send({status:true})
                }else{
                    res.send({status:false})
                }
            })
        })
        app.get('/delorder',(req,res) => {
            var obj=req.query;
            var sql = `delete from userorder where `
            for(var attr in obj){
                sql+=`${attr}='${obj[attr]}' and `
            }
            sql+=`1=1`;
            console.log(sql);
            db.mysql.delete(sql, function(data){
                res.send(data);
            })
        })
        app.get('/delcar',(req,res) => {
            var arr=req.query.ipt;
            var sql = `delete from userorder where `
            if(Array.isArray(arr)){
                arr.forEach((res) => {
                    sql+=`id='${res}' or `
                })
                sql=sql.slice(0,sql.length-3)
            }else{
                sql+=`id=${arr}`
            }
            console.log(sql);
            db.mysql.delete(sql, function(data){
                res.send(data);
            })
        })
    }
}