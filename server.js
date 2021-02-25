const express = require('express');
const path= require('path');
const app = express();
const ejs=require('ejs');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');
var ctrlHakan = require('./controllers/hakanControllers');

mongoose.connect("mongodb://localhost:27017/apropos",{useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.listen(3000);
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
    res.render('index');
});


app.get('/restorantlist',ctrlHakan.restorantList);
app.get('/yorumlar/:id',ctrlHakan.yorumlarSayfaGet);
app.post('/yorumEkle',ctrlHakan.yorumEkle);
app.get('/yorumSil/:id',ctrlHakan.yorumSil);
app.get('/yorumDuzenle/:id',ctrlHakan.yorumDuzenle);
app.post('/yorumDuzenleKaydet/:id',ctrlHakan.yorumDuzenleKaydet);








