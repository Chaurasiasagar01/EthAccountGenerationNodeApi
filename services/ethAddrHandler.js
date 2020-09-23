const ethAddrStore = require('../models/ethAddrStore');
const createError = require('http-errors');
const message = require('../config/message');
const WEB3 = require('web3');

async function Createaddresses(req, res) {
    try {
        var numOfAddr = req.params.numberofaddress;
        if (numOfAddr > 0) {
            console.log("numOfAddr", numOfAddr)
            for (var i = 0; i < numOfAddr; i++) {
                var web3 = new WEB3('https://rpc.gochain.io'); 
                var account = web3.eth.accounts.create();
                const ethAddrStoreVar = new ethAddrStore({
                    public_key: account.address,
                    private_key: account.privateKey,
                });
                await ethAddrStoreVar.save()
            }
            res.json({ response: " specified number of ethereum addresses generated and stored" });
        } else {
            res.json({ response: "please specify the number of addresses to be generated, make it more than 0" });
        }
    } catch (err) {
        console.log("error zone")
        res.json({ response: err });
    }

}

async function Getaddresswithprivatekeys(req, res) {
    try {
        var numOfAddr = req.params.numberofaddress;
        if (numOfAddr > 0) {
            console.log(numOfAddr)
            let addrList = await ethAddrStore.find({}, { _id: 0, __v: 0 }).limit(parseInt(numOfAddr));
            if (addrList != null) {
                res.json({ response: addrList })
            } else {
                res.json({ response: "no address found , try creating some" });
            }
        } else {
            res.json({ response: "please specify the number of addresses to be returned, make it more than 0" });

        }
    } catch (err) {
        res.json({ response: err });
    }
}

async function Getaddresses(req, res) {
    try {
        var numOfAddr = req.params.numberofaddress;
        if (numOfAddr > 0) {
            let addrList = await ethAddrStore.find({}, { _id: 0, __v: 0, private_key: 0 }).limit(parseInt(numOfAddr));
            
            if (addrList != null) {
                var resVar = []
            for(var i = 0 ; i < addrList.length ; i++){
                resVar.push(addrList[i].public_key)
            }
                res.json({ response: resVar })
            } else {
                res.json({ response: "no address found , try creating some" });
            }
        } else {
            res.json({ response: "please specify the number of addresses to be returned, make it more than one" });

        }
    } catch (err) {
        res.json({ response: err });
    }
}



module.exports = {
    Createaddresses,
    Getaddresswithprivatekeys,
    Getaddresses
}