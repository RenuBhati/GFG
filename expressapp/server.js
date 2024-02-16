var express = require('express');
var app = express();
var bp  = require('body-parser');
var _ = require('underscore');


var uid = 1;
app.use(bp.json());

app.use(express.static('public'))


var userdata = [
    // {
    //     uname:'a',
    //     email:'a@gmail.com'
    // },
    // {
    //     uname:'b',
    //     email:'b@gmail.com'
    // },
    
]

app.get('/loadusers',(req,res) => {

    res.send(userdata);
})

app.get('/loadusers/:id', (req,res) => {
    var uid = parseInt(req.params.id)
    var mtd = _.findWhere(userdata, {id:uid})


// Code before using underscore
    // var mtd; 
    // userdata.forEach(function(todo){
    //     if(uid == todo.id){
    //         mtd = todo;
    //     }
   // })
    if(mtd){
        res.send(mtd)
    }
})




app.post('/adduser', (req,res) => {
    var data = req.body
    data.id = uid++
    userdata.push(data)
    res.send('user data')
})


app.listen(4000, () => {
    console.log('server is ready ....!')
})