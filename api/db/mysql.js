var mysql= require('mysql');

var db = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port:3306,
  database : 'sonkwo',
  multipleStatements:true
});
 
module.exports = {
    select:function(tsql,callback){
        db.query(tsql,function(error,rows){
            if(rows.length > 1){
                callback({rowsCount: rows[1][0]['rowsCount'],data:rows[0]});
            }else{
                callback(rows);
            }
        })
    },
    insert: function(_sql,_callback){
        db.query(_sql, function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status:true,fields:fields});
            }
        })
    },
    delete: function(_sql, _callback){
        db.query(_sql, function (error, results, fields) {
            if(error){
                _callback({ status: false, error: error })
            }else{
                _callback({ status: true, data: { results, fields } });
            }
        })
    },
    update: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status: true, data: {results}});
            }
        })
    },
    search:function(tsql,callback){
        db.query(tsql,function(error,rows){
            if(error){
                callback({status:false,data:error});
            }else{
                callback({status:true,data:rows});
            }
        })
    },
}