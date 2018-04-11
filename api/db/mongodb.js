const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const ObjectID = mongo.ObjectID;

var db

MongoClient.connect('mongodb://localhost:27017/swan', (_error, _db) => {
    if(_error){
        console.log(_error);
    } else {
        db = _db;
    }
});
var dbname='swan';

module.exports = {
    select(_collection, _condition){
        return new Promise((resolve, reject) => {
            db.db(dbname).collection(_collection).find(_condition || {}).toArray((error, result) => {
                resolve(result);
            })
        })
    },
    insert: (_collection, _data) => {
        return new Promise((resolve, reject) => {
            db.db(dbname).collection(_collection).insert(_data).then((result, error) => {
                resolve(result);
            })
        })
    },
    update: (_collection,_data,_w_data,_cb) => {
        var whereData=_data;
        var updateDat={$set:_w_data};
        console.log(whereData,updateDat);
        db.db(dbname).collection(_collection).update(whereData,updateDat,function(error, result){
                if(error){
                    _cb(error);
                }else{
                    _cb({fl:true});
                }
            })
    },
    delete: (_collection, _condition) => {
        return new Promise((resolve, reject) => {
            db.db(dbname).collection(_collection).remove(_condition).then((result, error) => {
                resolve(result);
            })
        })
    },
    fuzzy:(_collection, _condition) => {
        // var reg='/'+_condition.reg+'/';
        var reg=new RegExp(_condition.reg)
        var fureg={$or:[
                {
                    title:{$regex:reg}
                },{
                    explain:{$regex:reg}
                },{
                    color:{$regex:reg}
                },{
                    model:{$regex:reg}
                },{
                    kind:{$regex:reg}
                }
            ]};
        return new Promise((resolve, reject) => {
            db.db(dbname).collection(_collection).find(fureg || {}).toArray((error, result) => {
                resolve(result);
            })
        })
    },
    objectid: (_id) => {
        return _id ? new ObjectID(_id) : new ObjectID();
    }
}