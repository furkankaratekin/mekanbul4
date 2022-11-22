var mongoose = require("mongoose");
require("./mekansema");
//var dbURI = "mongodb://localhost/mekanbul";
var dbURI = 'mongodb+srv://furkankaratekin:Amerhaba060214@cluster0.atfpa0d.mongodb.net/mekanbul?retryWrites=true&w=majority';

mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
}

);

}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı!",function(){
            process.exit(0);
    }
    );
}
);
mongoose.connection.on("connected",function(){
console.log(dbURI+" adresindeki veritabanına bağlanıldı")
}




);
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" adresindeki veritabanı bağlantısı koptu");
}

);
mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası");
}
);