/**
 * 章节标题列表
 * 说明：调用此接口获取指定书籍章节标题列表
 * 必选参数：id 指定书籍
 * 接口地址：/titles
 * 调用例子：/titles?/id=1
 */

var mysql=require('mysql')
const router=(req,res)=>
{
    const id=req.query.id;
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'cf527913',
        database:'reader'
    });
    connection.connect();
    connection.query(`select * from booktitles where id=${id};`,[1],(err,results)=>{
        if(err) throw err;
        res.send(results[0]);
    })
    connection.end();
}
module.exports=router;