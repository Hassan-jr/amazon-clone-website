const express = require('express')
const router = express.Router()
const { getelectronics,  getphones, getshoes, getaccessories} = require('../Controllers/homecontroller')


router.get('/electronics', getelectronics);
router.get('/phones', getphones);
router.get('/shoes', getshoes);
router.get('/accessories', getaccessories);
module.exports = router;