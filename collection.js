var MongoClient = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
    //'mongodb://<adunne>:<1234>@ds151004.mlab.com:51004/unidatabase';

MongoClient.connect(url,function(err,db){
    
    if(err) throw err;
    db.createCollection("customers",function(err, res){
        
        if(err) throw err;
            console.log("Collection created");
            db.close();
    });
});

var myobj = [
    {"_id": 001, "name": "Josh", "address": "flat 101 central park", "phone": "Iphone"},
    
    {"_id": 002, "name": "Poppy", "address": "flat 195 central park", "phone": "Iphone"},
    
    {"_id": 003, "name": "James", "address": "flat 90 central park", "phone": "Samsung"},
    
    {"_id": 004, "name": "charles", "address": "flat 100 central park", "phone": "Samsung"},
    
    {"_id": 005, "name": "Alex", "address": "flat 86 central park", "phone": "Sony"},
    
    {"_id": 006, "name": "Jay", "address": "flat 30 cnetral park", "phone": "Samsung",//[
        
//        {"hair colour": "black", "eye colour": "blue"},
//        
//    ]
    }];