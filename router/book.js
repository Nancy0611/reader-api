/**
 * 章节内容
 * 说明：调用此接口获取指定书籍和指定章节
 * 必选参数：book 指定书籍 id 指定章节
 * 接口地址：/book
 * 调用例子：/book?book=10&id=1
 */

var mysql=require('mysql')
const router=(req,res)=>
{
    const book=req.query.book;
    const id=req.query.id;
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'cf527913',
        database:'reader'
    });
    connection.connect();
    connection.query(`select * from book${book} where id=${id};`,[1],(err,results)=>{
        if(err) throw err;
        res.send(results[0]);
    })
    connection.end();
}
module.exports=router;