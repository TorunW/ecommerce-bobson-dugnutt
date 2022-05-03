const express = require('express');
const router = express.Router();
const { Pages } = require('../models');

router.get('/', async (req, res) => {
  const listOfPages = await Pages.findAll();
  res.json(listOfPages);
});

router.post('/', async (req, res) => {
  const post = req.body;
  await Pages.create(post);
  res.json(post);
});

module.exports = router;
