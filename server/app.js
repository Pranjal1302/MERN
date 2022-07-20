const dotenv = require('dotenv');
const express = require('express');
const app = express();
require('./db/conn.js');
dotenv.config({path:'./config.env'});
// const User = require('./model/userSchema');

const PORT = process.env.PORT;

app.use(express.json());
app.use(require('./router/auth'));

const middleware = (req,res ,next ) => {
    console.log('Middleware');
    next();
}

app.get('/',(req, res) => {
    res.send ('hello world');
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
})

app.get('/about', middleware,(req,res) => {
    res.send('Its all about us ')
}) 
