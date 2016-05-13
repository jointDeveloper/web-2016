const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profile');

module.exports = function(app, mountPoint) {
  router.get('/', profileController.home);

  app.use(mountPoint, router)
}
