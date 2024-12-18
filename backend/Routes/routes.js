const express = require('express');
const { testApi } = require('../Controllers/Api-controller/api-controller');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to your new Node.js project!');
});

router.get('/test', (req, res) => {
    testApi(req,res)
});

module.exports = router;
