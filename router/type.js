/**
 * 书籍分类
 * 说明：调用此接口获取书籍分类
 * 必选参数：type 指定书籍类型
 * 参数说明: type 玄幻1 修真2 都市3 历史4 网游5
 * 接口地址：/type
 * 调用例子：/type?type=1
 */

var mysql=require('mysql')

function getType(type){
    if(type==1){
        return '玄幻'
    }else if(type==2){
        return '修真'
    }else if(type==3){
        return '都市'
    }else if(type==4){
        return '历史'
    }else if(type==5){
        return '网游'
    }
}

const router=(req,res)=>
{
    const type=getType(req.query.type)
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'cf527913',
        database:'reader'
    });
    connection.connect();
    connection.query(`select * from booklist where type='${type}'`,[1],(err,results)=>{
        if(err) throw err;
        res.send(results);
    })
    connection.end();
    console.log("11")
}
module.exports=router;