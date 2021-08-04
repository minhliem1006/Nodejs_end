const courseController = require('../app/controllers/CourseController');
const express = require('express');
const router = express.Router();
router.get('/create',courseController.createCourse);
router.post('/stored',courseController.stored);
router.get('/:slug',courseController.slug);
router.get('/',courseController.show);
module.exports = router