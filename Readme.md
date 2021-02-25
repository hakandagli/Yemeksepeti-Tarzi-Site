 
Arkadaşlar merhabalar, buraya proje ile ilgili bazı bilgileri yazıyorum, lütfen okuyun!

ÖNEMLİ!!!  lütfen package.json kısmındaki url parametresini kendinize
göre değiştirin.
 
                1.Kurulum

Öncelikle proje içinde yer alan paketleri edinmek için
proje dizininde `npm install` komutunu çalıştırın, bu sizde eksik
olan node.js paketlerini hızlıca yüklemenizi sağlar.

Ayrıca değişiklik yaptıktan sonra server'ı yeniden başlatmak
ile uğraşmak istemiyorsanız nodemon isimli bir paket kullanabilirsiniz,
bu paketi proje ile direkt olarak alakalı olmadığı için package.json
dosyasına eklemedim `npm install -g nodemon` komutu ile indirirseniz
diğer projelerde de kullanabilirsiniz.

Server'ı çalıştırmak için `node server.js` veya nodemon yüklediyseniz 
`nodemon server.js` komutlarını çalıştırabilirsiniz.

              2. Paketler 

Bu Bölüm projede yer alan paketler hakkında kısa bilgiler verip daha 
kapsamlı bilgiler için link bulundurur. Yeni bir paket eklenmesi halinde
güncellenebilir
    
Body parser: Gelen post İsteklerini parse etmek için kullanıyoruz
link: https://expressjs.com/en/resources/middleware/body-parser.html

Mongoose: Veritabanı ile çalışmak için kullanacağız.
link: https://mongoosejs.com/

Axios: Bir http kütüphanesi. Server'a http isteği 
göndermemize olanak sağlar. 
link: https://www.npmjs.com/package/axios


EJS: Front end'e data vermek için maalesef bir view engine kullanmamız gerekiyor. Bunu çok fazla dert
edinmeyin, html dosyalarının uzantılarını .html yerine .ejs yapın 
link: https://ejs.co/

Vue.js: Bunu esas olarak chatbot için indirdim, ama isterseniz kullanabilirsiniz.
EJS ile çalışabiliyor olması lazım.
link: https://vuejs.org/v2/guide/


            3.Dosyalar.
    
Bu bölüm, projenin dosya hiyerarşisi hakkında bilgi vermek amacıyla
yazılmıştır. Proje yapısının bu şekilde olmasının nedeni kısmen
express.js'in çalışma şekli, kısmen de karmaşanın oluşmamasını
sağlamaktır.

 Public 

Bu klasörde kullanıcıya gösterilecek statik dosyalar bulunmakta.
(CSS,Resim dosyaları v.b) css dosyalarına erişim için index.ejs dosyasına bakabilirsiniz

Views

Bu klasörde EJS dosyaları bulunmakta. Başka yere koymayın, çalışmaz.

Routes 

Kullanılan Route bilgileri bu klasörde tutulmaktadır. 

Controllers 

Server tarafındaki işlemlerin iş mantığı burada yer almaktadır.

Models

Veritabanı için kullanılan modellerin bulunduğu klasör.

Eğer döküman güncellenirse ben telegramdan size mesaj atarım. Herkese başarılar dilerim.

                                            
