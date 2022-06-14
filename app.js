const express = require('express');
const app = new express();
const port = 3001;

const addTwoNum = require('./app/http/controllers/additionController');
const ans = addTwoNum(addTwoNum(20, 8), 2);

app.get('/', (req, res)=>{
    res.send(`<h1>Hello Node ${ans} </h1>`);
});


app.listen(3001, '127.0.0.1', function(){
    console.log(`server started on port ${port}`)
})