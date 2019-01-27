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

  // Calculate sentences density
  if (req.query.mode === 'verbose') {
    const sentences = req.body.lexic.split('.');
    const results = sentences.map(sentence => {
      const words = sentence.split(' ');
      return checker.lexicalDensity(words);
    });
    const index = results.indexOf("NaN");
    if (index > -1) {
      results.splice(index, 1);
    }
    res.send({
      data: {
        sentence_ld: results,
        overall_ld: checker.lexicalDensity(words)
      }
    })
  } else {
    const result = checker.lexicalDensity(words);
    res.send({
      data: {
        overall_ld: result
      }
    })
  }
})

module.exports = router;
