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
        app.get('/agoods',(req,res) => {
            var obj=req.query;

            var sql = `INSERT INTO goods (id,imgs,name,nickname,price,label,imgtxt,detsale,toconfig,saledate,hot,new,cover) VALUES (`
            for(var attr in obj){
                if(attr=='_'){

                }else{
                    sql+=`'${obj[attr]}', `
                }
                
            }
            sql = sql.slice(0,-2);
            sql += `)`
            console.log(sql);
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })
        app.get('/addgoods', (req, res) => {
            var obj=req.query;
            var sql = `select * from userorder where `
            for(var attr in obj){
                if(attr=='_'){

                }else{
                    sql+=`${attr}='${obj[attr]}' and `
                }
                
            }
            sql+=`1=1`;
            sql +=";select FOUND_ROWS() as rowsCount;";
            console.log(sql)
            db.mysql.select(sql, function(data){
                
                if(data.data.length>0&&data.data[0].buy){
                    res.send({status:'buy'})
                    return;
                }else if(data.data.length>0&&data.data[0].status=='tbp'){
                    res.send({status:'tbp'})
                    return;
                }else if(data.data.length>0&&data.data[0].status=='yfk'){
                    res.send({status:'yfk'})
                    return;
                }else if(data.data.length<1){
                    let buy=true;
                    let status='tbp';
                    var sql=`insert into userorder(username,goodsID,price,buy,status) values('${obj.username}',${obj.goodsID},${obj.price},${buy},'${status}')`;
                    console.log(sql)
                    db.mysql.insert(sql, function(data){
                        res.send(data);
                        return;
                    })
                }
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
            var data=req.query;
            var str='';
            for(var value in data){
                if(value!='_'){
                    str+=`${value}='${data[value]}',`
                }
                
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
            var sql = `select * from goods where concat(name, ',', nickname ,',', label) like '%${str}%'`
            sql +=";select FOUND_ROWS() as rowsCount;";
            console.log(sql);
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })
        app.get('/pagegoods', (req, res) => {
            let page = req.query.page;
            let pageItems = req.query.pageItems;
            
            var sql = `select SQL_CALC_FOUND_ROWS * from goods`;
            if(page && pageItems){
                sql+=` limit ${(page - 1) * pageItems},${pageItems}`;
            }
            sql +=";select FOUND_ROWS() as rowsCount;";
            
            db.mysql.select(sql, function(data){
                res.send(data);
            })
        })

    }
}