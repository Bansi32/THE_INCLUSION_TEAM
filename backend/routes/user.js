const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.post('/register', user.creatUser);
router.post('/login',user.getUser)

module.exports = router;