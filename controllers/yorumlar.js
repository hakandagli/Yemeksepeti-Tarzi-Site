var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var yorumlarSchema = new Schema({
    //restoranId: {type: mongoose.Schema.Types.ObjectId,ref:'Restoran'},
    restoranId:String,
    yorumYapan:String,
    yorum: String,
    puan:Number
},{collection: 'yorumlar'});

var Yorumlar = mongoose.model('Yorumlar',yorumlarSchema);
module.exports = Yorumlar;


