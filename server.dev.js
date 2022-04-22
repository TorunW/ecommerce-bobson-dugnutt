"use strict";

var express = require('express');

var db = require('./models');

var app = express();
db.sequelize.sync().then(function () {
  app.listen(8080, function () {
    console.log('server is running on port 8080');
  });
});
/*
database:

  Pages
    Titlte
    Link
    Order
    CONSTRAINT link_unique UNIQUE (link)


  Post
    Post id
    page id
    title optional
    content
    type (image text link)
    order
     CONSTRAINT post_id_unique UNIQUE (post_id)

  Store





*/