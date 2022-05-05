const express = require('express');
const router = express.Router();
const { Pages } = require('../models');

router.get('/', async (req, res) => {
  const listOfPages = await Pages.findAll();
  res.json(listOfPages);
});

router.post('/', async (req, res) => {
  const page = req.body;
  await Pages.create(page);
  res.json(page);
});

module.exports = router;
