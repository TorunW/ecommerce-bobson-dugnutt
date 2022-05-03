const express = require('express');
const db = require('./models');
const app = express();

app.use(express.json());

// Routers
const pageRouter = require('./routes/pages');
app.use('/pages', pageRouter);

const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

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



  Store
*/
