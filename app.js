var express=require('express');
var app=express();

//主页GET请求
app.get('/',function (req,res) {
    res.send('hello express')
})

app.get('/booklist',require('./router/booklist'));

app.get('/book',require('./router/book'));

app.get('/titles',require('./router/titles'));

app.get('/type',require('./router/type'));

const port=process.env.PORT||3333
var server=app.listen(3333,function () {
    console.log(`server running @${port}`)
})