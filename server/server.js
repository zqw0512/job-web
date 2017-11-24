const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb://kelly:kelly@ds115866.mlab.com:15866/imooc');
mongoose.connection.on('connected',function () {
    console.log('mongo connect success')
})



const User = mongoose.model('user', new mongoose.Schema({
    user: {type:String,require:true},
    age:{type:Number,require:true}
}))
// User.create({
//     user:'xiaoming',
//     age:10
// },function (err,doc) {
//     if (!err) {
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//  User.remove({user:'xiaoming'},function(err,doc){
// //          console.log(doc)
// //  })
// User.update({'user':'imooc'},{'$set':{age:26}},function(err,doc){
//     console.log(doc)
// })

const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})

app.get('/data',function (req, res) {
    User.findOne({}, function (err, doc) {
        console.log(doc)
        return res.json(doc)
    })
})

app.listen(9093,function () {
    console.log('Node app start at port 9093')
})

