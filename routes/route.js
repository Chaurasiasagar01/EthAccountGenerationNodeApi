const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.json({result:"get connected sucessfully"})
});

router.post('/', function(req, res){
    res.json({result:"post connected sucessfully"})
});
module.exports = router;