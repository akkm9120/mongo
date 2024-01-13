const { application } = require("express");

// require in the MongoDB client
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const mongoURL = process.env.MONGO_URL;


async function main() {
 
 const client = await MongoClient.connect(mongoURL, {
    "useUnifiedTopology": true // it's for using the latest version of MongoDB
 });
 // connection
 const db = client.db("sample_airbnb");
 console.log("database connected");
 // mongoshell: db.listingsAndReviews.find().limit(10)
 const listings = await db.collection("listingsAndReviews").find({})
                  .project({  "name":true, "address.street":1 , "address.country":1,   "property_type":1,   "room_type":1,   "bedrooms":1,   "beds":1,   "price":1})
                  .limit(10).toArray();

 console.log(listings);
}
main();



application.get("view-food/:foodid", async function(req,res){
   const foodRecord= await db.collection(COLLECTION).findOne();
   
})