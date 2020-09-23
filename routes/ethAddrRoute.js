const express = require('express');
const router = express.Router();
const ethRoute = require('../services/ethAddrHandler');


router.post('/createaddress/:numberofaddress', function(req, res){
    ethRoute.Createaddresses(req,res);
});

router.get('/getaddresswithprivatekey/:numberofaddress', function(req, res){
    ethRoute.Getaddresswithprivatekeys(req,res);
});

router.get('/getaddress/:numberofaddress', function(req, res){
    ethRoute.Getaddresses(req,res);
});

module.exports = router;