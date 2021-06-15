const Koa = require('koa'); 
const app = new Koa(); 
app.use(require('koa-static')('.'));//.代表index.js所在目录，如需更换端口 自行修改。
app.listen(3000); //监听3000端口，如需更换端口 自行修改。