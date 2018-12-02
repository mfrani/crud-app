const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); //Imports routes for
//for the products
app.set("view engine", "ejs");
var methodOverride = require('method-override');

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://doghands:blahblah2014@ds145043.mlab.com:45043/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/products', product);



var methodOverride = require('method-override')
 
/**
 * using custom logic to override method
 * 
 * there are other ways of overriding as well
 * like using header & using query value
 */ 
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));




let port = 8080;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});