var express = require('express');
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("admin_login", { title: "管理員後台" });
  });

// 取得全部商品資料
router.get('/prodlist', function (req, res, next) {
    res.render("admin_dashboard_1_productlist", { title: "管理員後台" });
  });

// 從MySQL取得所有商品資料
function mySqlProduct(req, res) {
    req.mysql.query("SELECT * FROM `prodlist`", [], function (err, result) {
      res.render("admin_dashboard_1_productlist.ejs", {
        sqlprodlist: result,
        title: "管理員後台",
      });
    });
  }

  module.exports = router;
