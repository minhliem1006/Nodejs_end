const meController = require('../app/controllers/MeController');
const express = require('express');
const router = express.Router();
router.get('/:_id/edit',meController.edit);
router.put('/:_id',meController.update);
router.get('/stored-courses',meController.storedCourse);
module.exports = router