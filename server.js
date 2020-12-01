var express = require("express");
var mongodb = require("mongodb");
var app = express();
var ObjectID = mongodb.ObjectID;
var database;
var products;
const LOCAL_DATABASE = "mongodb://localhost:27017/";
const client = mongodb.MongoClient;
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/*", function(req, res) {
    let lastFile = req.originalUrl.split("/")[req.originalUrl.split("/").length - 1];
    if (lastFile.toLowerCase().indexOf(".jpg") > -1) {
        res.sendFile(__dirname + "/" +req.originalUrl);
        return;
    }
    if (lastFile.indexOf(".") > -1) {
        res.sendFile(__dirname+"/lehlo_react/build"+req.originalUrl);
        return;
    }
    res.sendFile(__dirname+"/lehlo_react/build/index.html");
});

let db_manager;
client.connect(LOCAL_DATABASE, function(err, db) {
    if (err) throw err; //can throw error
    db_manager = db;
    database = db_manager.db("BrandDB");
    database.collection('productCollection', function(err, collection) {
       products = collection;
    });
    http.listen(3000, ()=>{
        console.log("Now listening on port 3000");
    });
});

io.on("connection", (socket) => {
    console.log("new client connected");
    socket.on("get_product_ts", onGetProduct);
    socket.on("submit_order", submitOrder);
});

function submitOrder(data) {
    database.collection('salesCollection', function(err, collection){
        collection.insertOne(data);
    });
}

function onGetProduct(data){
    let findObject = {};
    let sortObject = {};
    if ( data.sort) {
        if (data.sort == "name") {
            sortObject = {"name": 1};
        } else if (data.sort == "priceLow") {
            sortObject = {"price":1};
        } else if (data.sort == "priceHigh") {
            sortObject = {"price":-1};
        }
    }
    console.log(sortObject);
    if (data.productID) {
        findObject._id = data.productID;
    }
    products.find(findObject).sort(sortObject).toArray((err, result) => {
        if (err) throw err;
        let rtn = [];
        for (var i = 0; i < result.length; i++) {
            let elemen = {};
            elemen._id = result[i]._id;
            elemen.name = result[i].name;
            elemen.type = result[i].type;
            elemen.longDescription = result[i].longDescription;
            elemen.picfilename = result[i].picfilename;
            elemen.price = result[i].price;
            if (result[i].size){
                elemen.size = [];
                for (var j = 0; j < result[i].size.length; j++) {
                    elemen.size.push(result[i].size[j]);
                }
            }
            rtn.push(elemen);
        }
        this.emit("get_product_tc", {"products":rtn});
    });
}