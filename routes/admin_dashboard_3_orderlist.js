var express = require('express');
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("admin_login", { title: "管理員後台" });
  });

// 取得全部訂單資料
router.get('/orderlist', function (req, res, next) {
    res.render("admin_dashboard_3_orderlist", { title: "管理員後台" });
  });



// 從MySQL取得所有訂單資料
function mySqlMembers(req, res) {
    req.mysql.query("SELECT * FROM `orderlist`", [], function (err, result) {
      res.render("admin_dashboard_3_orderlist.ejs", {
        sqlorderlist: result,
        title: "管理員後台",
      });
    });
  }

// 判斷該筆訂單是否存在
var checkOrderData = function (orderListID, memberID, prodID) {
  return new Promise((resolve, reject) => {
      req.mysql.query('SELECT * FROM orderlist WHERE order_id = ? AND member_id = ? AND product_id = ?', [orderListID, memberID, prodID],
       function (err, rows) {
          if (rows[0] === undefined) {
              resolve(false);
          } else {
              resolve(true);
          }
      })
  })
}

// 判斷該筆訂單是否已完成
var checkOrderComplete = function (orderListID, memberID, prodID) {
  return new Promise((resolve, reject) => {
     req.mysql.query('SELECT * FROM orderlist WHERE order_id = ? AND member_id = ? AND product_id = ? AND is_complete = 0', [orderListID, memberID, prodID], 
      function (err, rows) {
          if (rows[0] === undefined) {
              resolve(false);
          } else {
              resolve(true);
          }
      })
  })
}

// 更改單筆訂單資料
router.put('/orderlist', function (req, res, next) {
  // res.render("admin_dashboard_3_orderlist", { title: "管理員後台" });
  });

// 刪除訂單資料
router.delete('/orderlist', function (req, res, next) {
  // res.render("admin_dashboard_3_orderlist", { title: "管理員後台" });
  });

module.exports = router;