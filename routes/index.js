const express = require('express');
const router = express.Router();

const checker = require('../libs/checker');

router.post('/complexity', function (req, res) {
  // Split sentences into words
  const words = req.body.lexic.split(' ');
  // Validate text length
  if (words.length < 100) {
    res.status(500).send({
      data: {
        error: 'Text should be more than 100 words !'
      }
    })
  } else if (words.length > 1000) {
    res.status(500).send({
      data: {
        error: 'Text should be less than 1000 words !'
      }
    })
  }
})

module.exports = router;
