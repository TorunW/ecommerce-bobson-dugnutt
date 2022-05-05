const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

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
