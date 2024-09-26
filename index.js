const express = require('express')
// Using Node.js `require()`
const mongoose = require('mongoose');
const app = express()

app.get('/', (req, res) => {
    res.send('hello from Node API server');
})

mongoose.connect('mongodb+srv://wisdombalicholo:I9EBIfKa5reqmgJB@vanlifedb.ltvwc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=VanLifeDB')
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () =>{
        console.log('server is running on port 3000');
    })
})
.catch(() => {
    console.log('connection Failed');
});