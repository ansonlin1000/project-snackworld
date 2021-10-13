var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首頁',memberPhone:req.session.memberPhone ||"Guest" });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: '關於我們',memberPhone:req.session.memberPhone ||"Guest" });
});
router.get('/snack_test', function(req, res, next) {
  res.render('snack_test', { title: '零食診斷',memberPhone:req.session.memberPhone ||"Guest"});
});
router.get('/shopping_cart', function(req, res, next) {
  res.render('shopping_cart', { title: '購物車',memberPhone:req.session.memberPhone ||"Guest" });
});

//
router.get('/remove/:id', function(req, res, next) {
  var prodId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
 
  cart.remove(prodId);
  req.session.cart = cart;
  res.redirect('/shopping_cart');
 });

 router.get('/shopping_cart', function(req, res, next) {
  if (!req.session.cart) {
   return res.render('shopping_cart', {
    products: null
   });
  }
  var cart = new Cart(req.session.cart);
  res.render('shopping_cart', {
   title: '購物車',
   products: cart.getItems(),
   totalPrice: cart.totalPrice
  });
 });
module.exports = router;

