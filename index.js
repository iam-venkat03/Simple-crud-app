const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');


// Express middleware
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

console.log("HELLO")


// MongoDB connectivity
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://venkatvp2000:Sureshraina3!@backenddb.hhlzofe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log('Connected to MongoDB Database!');
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection to MongoDB not established");
    console.error(error);
  });

// Testing Node API
app.get('/', (req,res) => {
    res.send("Hello from node API Server");
});

// Routing
app.use("/api/products", productRoute);