const GoogleController =  require("../controller");
var express = require('express');
var router = express.Router();

/// API GOOGLE ROUTES ///

// get message from whatsapp.
router.post('/api/messages', GoogleController.sendMessage);

module.exports = router;
