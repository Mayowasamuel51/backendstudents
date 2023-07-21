const express = require('express');
const router = express.Router();
const classcontroller = require('../Controllers/class-controller')

router.post('/', classcontroller.createClass)



module.exports = router;