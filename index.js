const express = require("express");
const bodyParser = require("body-parser");
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.get('/api',(req,res)=>{
    res.send('hello this is home page');
});

app.get('/about',(req,res)=>{
    res.send('hello this is about page');
})

app.get('/help',(req,res)=>{
    res.send('hello this is help page');
})



db.sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log(`Server running on port 3000`);
        });
    })
    .catch(err => {
        console.error("Database synchronization error:", err);
    });