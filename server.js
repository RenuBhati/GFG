var express = require('express')
var bp = require ('body-parser')
var _ = require('underscore')

var interceptor = require('./middleware')
var app = express()
app.use(bp.json())
// eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzLCJleHAiOjE3MDgzNTUxMjN9

app.use(interceptor.authUser)
var userdata =[]
var uid = 1
app.use(express.static('public'))

app.get('/loadusers', interceptor.logger,(req,res) => {
    res.send(userdata);
})
app.get('/loaduser/:id',(req,res)) => {
    
}
