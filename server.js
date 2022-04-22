const express = require('express');
const db = require('./models');
const app = express();

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
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
