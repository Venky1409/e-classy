import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<admin>@cluster0-mivcc.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   console.log("connected");
//   const collection = client.db("eclassydb").collection("categories");
//   console.log(collection);
 
//   // perform actions on the collection object
//   client.close();
// });

  return console.log(`server is listening on ${port}`);
});
