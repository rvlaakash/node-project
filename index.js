const express=require('express')
const app =express()

app.get('/',(req,res) => res.send('Hello Akash') )
app.get('/about',(req,res) => res.send('Hello About') )
app.get('/Contact',(req,res) => res.send('Hello Contact') )
app.get('/akash',(req,res) =>{
    res.send('i am Akash')
})
app.listen(3000,() => console.log('Runing on http://127.0.0.1:3000'))