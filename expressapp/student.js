var express = require('express');
var app = express();
var bp  = require('body-parser');
var _ = require('underscore');


var uid = 1;
app.use(bp.json());

app.use(express.static('public'))


var studentdata = [
    // {
    //     uname:'a',
    //     email:'a@gmail.com'
    // },
    // {
    //     uname:'b',
    //     email:'b@gmail.com'
    // },
    
]

app.get('/loadstudents',(req,res) => {

    res.send(studentdata);
})

app.get('/loadstudents/:id', (req,res) => {
    var uid = parseInt(req.params.id)
    var mtd = _.findWhere(studentdata, {id:uid})


    if(mtd){
        res.send(mtd)
    }
})




app.post('/addstudent', (req,res) => {
    var data = req.body
    data.id = uid++
    studentdata.push(data)
    res.send('student added')
})

app.delete('/deletestudents/:id', (req,res) => {
    var uid = parseInt(req.params.id)
    var mtd = _.findWhere(studentdata, {id:uid})


    if(mtd){
        studentdata = _.without(studentdata,mtd)
        res.send(mtd)
    }
})


app.listen(3000, () => {
    console.log('student server is ready ....!')
})