const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db="mongodb://simlarosa:74666399sSs@ds255924.mlab.com:55924/codepostnet";

mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true } ,function(err) {
  if(err){
      console.log('Connection error');
  }
});

router.get('/posts', function(req,res){
    console.log('Requisting posts');
    post.find({})
      .exec(function(err,posts) {
        if (err) {
          console.log('Error getting the posts');
        } else {
            res.json(posts);
            console.log(posts);
        }
    })
})

module.exports = router;
