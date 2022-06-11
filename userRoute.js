const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.post('/register', userController.userRegisteration);
router.get('/records' , userController.userRecords);
router.get('/search/:username', userController.userSearch);
router.get('/first10', userController.userPagination);
router.get('/sort/asce', userController.userAsceSort)
router.get('/sort/desc', userController.userDescSort)

module.exports = router;