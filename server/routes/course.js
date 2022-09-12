const express=require('express')
const {createCourse,getAllCourse} = require('../controllers/course.js')
const router = express.Router();

router.get('/',getAllCourse)
router.post('/',createCourse)

module.exports=router;