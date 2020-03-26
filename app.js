const express = require("express");
const app = express();

const stores = require('./data/stores.js');

app.get('/api/stores', function(req, res){
    res.json(stores);
});
  
app.get('/api/stores', function(req, res){
    var response = [];
  
    if( typeof req.query.nsfw != 'undefined' ){
      response = stores.filter(function(store){
        if(store.nsfw === true){
          return store;
        }
      });
    } else {
      response = stores;
    }
  
    res.json(response);
  });
  

module.exports = app;