const mongoose = require('mongoose');

//might be obsolete after torus implementation
let ethAddrStore = new mongoose.Schema({
public_key: {type: String, require: true, unique: true},
private_key: {type: String, require: true, unique: true},
});

module.exports = mongoose.model('ethAddrStores', ethAddrStore);