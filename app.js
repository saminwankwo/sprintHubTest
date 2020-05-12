const express = require("express");
const app = express();
const _ = require('lodash');


const stores = require('./data/stores.js');

app.get('/api/stores', function(req, res){
    res.json(stores);
});
  
So that we can adjust our /api/stores route like this:

app.get('/api/stores', function(req, res){
  var response = [];
  console.log(req.query)

  // this would usually adjust your database query
  if(typeof req.query.nsfw != 'undefined'){
    stores.filter(function(store){
      if(store.nsfw.toString() == req.query.nsfw){
        response.push(store);
      }
    });
  }

  //  adjust your database query
  if(typeof req.query.location != 'undefined'){
    stores.filter(function(store){
      if(store.location === req.query.location){
        response.push(store);
      }
    });
  }

  // de-duplication:
  response = _.uniqBy(response, 'id');

  // in case no filtering has been applied, respond with all stores
  if(Object.keys(req.query).length === 0){
    response = stores;
  }

  res.json(response);
  });
  

module.exports = app;