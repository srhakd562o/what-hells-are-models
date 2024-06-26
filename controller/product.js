const path = require('path');
const Product = require('../models/product');



exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{
        pageTitle:'Add Product',
        path:'/admin/add-product',
        formsCss : true,
        productCss: true,
        activeAddProduct: true
    });
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop', 
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true   
        });
    });
};

