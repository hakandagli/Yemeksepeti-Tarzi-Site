var Kullanici= require('./kullanici');
var Restoran = require('./restorantdeneme');
var Yorumlar = require('./yorumlar');
var path = require('path');

module.exports.restorantList = function(req,res){ 
    Restoran.find(function(err,results){
        res.render('restorantList', {restorants:results});
    });
}

module.exports.yorumlarSayfaGet = function(req,res){
    Yorumlar.find(function(err,results){
        const id = req.params.id;
        Restoran.findById(id,function(err,restoran){
            res.render('yorumlar',{restorantid: req.params.id,restorantadi:restoran.ad,yorumlar:results});
        });
   });
}

module.exports.yorumEkle = function(req,res){
    var yeniYorum = new Yorumlar({
        restoranId:req.body.restoranId,
        yorumYapan:req.body.yorumYapan,
        yorum: req.body.yorum,
        puan: req.body.puan
    });

    yeniYorum.save(function(err,restoranId){
        if(err){
            console.log("kaydedilemedi");
        }else{
            res.redirect('restorantlist');
        }
    });
}

module.exports.yorumDuzenleKaydet =function(req,res){
    let id = req.params.id;
    Yorumlar.findById(id,function(err,result){
        console.log("buraya geldi");
        console.log(result);
        result.yorum=req.body.yorum;
        result.save(function(err){
            res.redirect('/restorantList');
        });
        
    });
}

module.exports.yorumSil = function(req,res){
    console.log('silindi');
    let id = req.params.id;
    Yorumlar.findByIdAndRemove(id,function(err){
        if(err){
            console.log('silmede hata var');
        }   
        res.redirect('/restorantList'); 
    });
}

module.exports.yorumDuzenle = function(req,res){
    const id = req.params.id;
    Yorumlar.findById(id,function(err,results){
        res.render('yorumDuzenle',{yorums:results});
    });
}


