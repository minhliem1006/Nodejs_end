const siteController = require('../app/controllers/SiteController');
const express = require('express');
const router = express.Router();
router.get('/search',siteController.search);
router.get('/news',siteController.news);
router.get('/',siteController.home);
module.exports = router