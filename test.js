const express = require('express');
const app = express();
// const store = require('store.js');

app.get('/api/store', function(req, res){
  res.json(store);
});

app.get('/api/stores', function(req, res){
  var response = [];

  if( typeof req.query.country != 'undefined' ){
    response = store.filter(function(store){
      if(store.country === true){
        return store;
      }
    });
  } else {
    response = store;
  }

  res.json(response);
});

// app.get('/', function(req, res){
//   res.send('Hello World!')
// });

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
});
