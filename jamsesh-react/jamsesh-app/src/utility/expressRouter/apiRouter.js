const express = require('express');

const apiRouter = express.Router();

const getProfiles = (req, res) => {
  res.sendFile(process.cwd() + '/api/profileSearch.json');
}

apiRouter.get('/api', getProfiles);

module.exports = apiRouter;