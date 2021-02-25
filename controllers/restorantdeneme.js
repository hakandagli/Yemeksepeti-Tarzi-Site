var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var restorantSchema = new Schema({
    ad: String,
    kategori: String,
    puan:Number
},{collection: 'restorants'});

var Restoran = mongoose.model('Restoran',restorantSchema);

module.exports = Restoran;