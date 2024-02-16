var express = require('express')
var bp = require ('body-parser')
var _ = require('underscore')

var interceptor = require('./middleware')
var app = express()
app.use(bp.json())

app.use(interceptor.authUser)
var userdata =[]
var uid = 1
app.use(express.static('public'))

app.get('/loadusers', interceptor.logger,(req,res) => {
    res.send(userdata);
})
app.get('/loaduser/:id',(req,res)) => {
    
}
