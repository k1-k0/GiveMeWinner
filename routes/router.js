const express = require('express');
const { pickWinner } = require('./picker.js');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now().toString());
  next();
});

router.param('videoId', (req, resp, next, value) => {
  console.log(`Get: ${value}`);
  next();
});

router.get('/:videoId', (req, resp) => {
  const videoId = req.params.videoId;
  if (videoId) {
    pickWinner(videoId)
      .then((result) => {
        resp.json(result);
      });
  }
});

module.exports = router;
