var express = require('express');
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("admin_login", { title: "管理員後台" });
  });

// 取得全部商品資料
router.get('/prodlist', function (req, res, next) {
    res.render("admin_dashboard_2_addproduct", { title: "管理員後台" });
  });

// 從MySQL取得所有商品資料
function mySqlProduct(req, res) {
    req.mysql.query("SELECT * FROM `prodlist`", [], function (err, result) {
      res.render("admin_dashboard_2_addproduct.ejs", {
        sqlprodlist: result,
        title: "管理員後台",
      });
    });
  }

//增加資料
router.post('/prodlist', function (req, res) {
    //獲取及處理增加的資料
    var post = '';
    req.on('data', function (chunk) {
        post += chunk;
        console.log(post)
    });
    req.on('end', function () {
        post = querystring.parse(post);
        var sql = 'insert into prodlist set prodName=? , prodPrice=? , prodCountry=? , prodCountryNo=? , prodStock? , prodId? , prodTaste? , prodType? , prodInfo? , prodPhoto1? , prodPhoto2? , prodPhoto3?'
        var add_value = [post.prodName, post.prodPrice, post.prodCountry, post.prodCountryNo, post.prodStock, post.prodId, post.prodTaste, post.prodType, post.prodInfo, post.Photo1, post.Photo2, post.Photo3]
        connection.query(sql, add_value, function (err, result) {
            if (err) {
                console.log('新增資料失敗');
            }
            res.send('增加資料成功') 
        });
    });
})

//修改資料
router.post('/prodlist', function (req, res) {
    //處理請求修改的資料和條件
    var update = '';
    req.on('data', function (chunk) {
        update += chunk;
        console.log(update)
    });
    req.on('end', function () {
        update = querystring.parse(update);
        var sql = 'update prodlist set  prodName=? , prodPrice=? , prodCountry=? , prodCountryNo=? , prodStock? , prodId? , prodTaste? , prodType? , prodInfo? , prodPhoto1? , prodPhoto2? , prodPhoto3?'
        var update_value = [update.prodName, update.prodPrice, update.prodCountry, update.prodCountryNo, update.prodStock, update.prodId, update.prodTaste, update.prodType, update.prodInfo, update.prodPhoto1, update.prodPhoto2, update.prodPhoto3]
        connection.query(sql, update_value, function (err, result) {
            if (err) {
                console.log('修改資料失敗', err.message);
            }
            res.send('修改資料成功') 
        });
    });
})

//刪除資料
router.delete('/prodlist', function (req, res) {
    var params = req.query
    var sql = 'delete from prodlist  where prodName=?'
    var where_value = [params.prodName];
    // console.log(sql)
    connection.query(sql, where_value, function (err, result) {
        if (err) {
            console.log('刪除失敗', err.message);
        }
        res.send('刪除成功')
    });
})


module.exports = router;