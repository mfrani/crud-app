const Product = require('../models/product.model');

exports.product_index = function(req, res) {
    /*res.send('Greetings from the Test controller!');*/
    /*res.render('create');*/
    Product.find({}, function(err, allProducts) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { products: allProducts });
        }

    });
};

exports.product_form = function(req, res){
    res.render('create');
};



/*exports.product_list = function(req, res) {
    Product.find({}, function(err, allProducts) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { products: allProducts });
        }

    });
};*/

exports.product_create = function(req, res) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    Product.create(product, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            
            res.redirect("/products/");
        }
    })
};

//show details
exports.product_details = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
//update product
exports.product_update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
//delete product
exports.product_delete = function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
