const express = require('express');
// const addTwoNum = require('./app/http/controllers/additionController');
// const ans = addTwoNum(addTwoNum(20, 8), 2);
const app = new express();
const dotenv = require('dotenv').config();
const port = process.env.APP_PORT || 3000;
const {errorHandler} = require('./app/middlewares/errorMiddleware')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./app/routes/goalRoutes'))

// app.use(errorHandler);

app.listen(3001, '127.0.0.1', function(){
    console.log(`server started on port ${port}`)
});