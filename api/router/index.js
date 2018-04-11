const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bp = require('body-parser');

const goodsRouter = require('./goods')
const upload = require('./upload.js')
const user = require('./user.js')
const order = require('./order.js')
const useraddr = require('./useraddr.js')
const admins = require('./admins.js')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(path.resolve(__dirname,'../'),'/')));



module.exports = {
    start(_port){

        goodsRouter.register(app);
        upload.register(app);
        user.register(app);
        order.register(app)
        useraddr.register(app)
        admins.register(app)
        http.listen(_port || 8080);
    }
}