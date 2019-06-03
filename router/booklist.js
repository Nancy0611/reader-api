/**
 * 书籍详情
 * 说明：调用此接口获取书籍详情，无参数时获取所有书籍详情
 * 可选参数：id 指定书籍详情
 * 接口地址：/booklist
 * 调用例子：/booklist?id=1
 */

var mysql=require('mysql')
const router=(req,res)=>
{
    const id=req.query.id || 0;
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'cf527913',
        database:'reader'
    });
    connection.connect();
    connection.query(id?`select * from booklist where id=${id};`:`select * from booklist;`,[1],(err,results)=>{
        if(err) throw err;
        id?res.send(results[0]):res.send(results);
    })
    connection.end();
    console.log(22)
}
module.exports=router;