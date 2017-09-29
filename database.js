var MongoClient = require ('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb'
    //'mongodb://<adunne>:<1234>@ds151004.mlab.com:51004/unidatabase';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Database created");
    db.close();
});