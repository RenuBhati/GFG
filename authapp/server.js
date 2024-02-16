const express = require('express');
const bp = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./config.json');
const router = express.Router();


const app = express();
app.use(bp.json());

app.post('/login',(req,res)=>{
    const data = req.body
    const user ={
        "email":data.email,
        "name":data.name
    }
    const token = jwt.sign(user,config.secret,{expiresIn:config.tokenlife})
    const response={
        "status":"Logged In",
        "token": token
    }
    res.status(200).json(response)
})




router.get('/',(req,res) => {
    res.send('OK')

})



router.use(require('./tokenchecker'))
router.get('/secure',(req,res)=>{
res.send('I am secured...')
})

app.use('/api',router);
app.listen(4000, ()=>{
    console.log('4000 server is ready')
});



