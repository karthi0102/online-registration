const express=require('express')
const {signUp,login,editProfile} = require('../controllers/user')
const router = express.Router();

router.post('/signup',signUp)
router.post('/login',login)
router.patch("/profile",editProfile)
module.exports=router;