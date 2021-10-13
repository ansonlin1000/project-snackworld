const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const nodemailer = require('nodemailer');
var sha256 = require('sha256');

const router = express.Router();





// 基本路由
router.get("/", function (req, res, next) {
  res.render("member_login", {
    title: "會員登入",
    memberPhone: req.session.memberPhone || "Guest",
  });
});
router.get("/logout", function (req, res, next) {
  delete req.session.memberPhone;
  res.redirect("/");
});

router.get("/forget", function (req, res, next) {
  res.render("member_forget", {
    title: "忘記密碼",
    memberPhone: req.session.memberPhone || "Guest",
  });
});









// 會員註冊
router.get("/register", function (req, res, next) {
  res.render("member_register", {
    title: "會員註冊",
    memberPhone: req.session.memberPhone || "Guest",
  });
});













// 會員登入

router.get("/login", function (req, res, next) {
  getcollectedProd(req, res);
  getinfotest(req, res);
  mySqlOrderListData(req, res);
  res.render("member_login", {
    title: "會員登入",
    messages: "",
    memberPhone: req.session.memberPhone || "Guest",
    password: req.body.password || "",
  });
});
















//會員登入'0912076954', 'test123'
var messages = "";
router.post("/login", function (req, res, next) {
  var memberPhone = req.body["memberPhone"];
  var password = req.body["password"];
  req.mysql.query(
    "SELECT * FROM member WHERE memberPhone = ?",
    [memberPhone],
    function (err, results) {
      if (err) throw err;
      if (results.length == 0) {
        //帳號不存在

        res.render("member_login", {
          title: "會員登入",
          messages: "帳號不正確！",
          memberPhone: "Guest",
        });
      } else if (results[0].password != password) {
        //密碼不正確

        res.render("member_login", {
          title: "會員登入",
          messages: "密碼不正確！",
          memberPhone:"Guest",
          password: password,
        });
      } else {
        //帳號及密碼皆正確
        req.session.memberPhone = req.body.memberPhone;
        req.session.password = req.body.password; //設定session
        res.redirect("http://localhost:3000/member/dashboard"); //開啟管理頁面
      }
    }
  );
});













// 01會員資料
router.get("/dashboard", function (req, res, next) {
  var memberPhone = req.session.memberPhone || "Guest";
  // if (memberPhone == "Guest") {
  //   res.redirect("/member/login");
  //   return;
  // }
  getcollectedProd(req, res);
  getinfotest(req, res);
  mySqlOrderListData(req, res);
  res.render("member_dashboard_0920honda.ejs", {
    sqlMenberdata: sqlMenberdata,
    collectedProd: collectedProd,
    memberPhone: req.session.memberPhone || "Guest",
  });
});

// 會員資料：取得、編輯
router.post("/dashboard/edit", function (req, res, next) {
  req.body.memberName = req.body.memberName || 0;
  req.mysql.query(
    "UPDATE member SET memberName = ?, memberTel= ?, memberPhone = ?, memberAddress = ? WHERE member.memberId = ? ",
    [
      req.body.memberName,
      req.body.memberTel,
      req.body.memberPhone,
      req.body.memberAddress,
      req.body.memberId,
    ],
    res.redirect("/member/dashboard/info")
  );
});

//會員資料轉跳
router.get("/dashboard/info", function (req, res, next) {
  getinfotest(req, res);
  res.redirect("/member/dashboard");
  // res.render("member_dashboard_0920honda.ejs", {
  //   sqlMenberdata: sqlMenberdata,
  //   memberPhone: req.session.memberPhone || "Guest",
  // });
});
























//02購物車 router
router.get("/dashboard/shoppingcart", function (req, res, next) {
  res.render("member_dashboard_02.ejs", {
    memberPhone: req.session.memberPhone || "Guest",
  });
});


router.post("/dashboard/shoppingcart/create", function (req, res) {
  req.body.orderNo = req.body.orderNo || 0;
  req.mysql.query(
    "INSERT INTO normalorder values (?,CURDATE() ,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?)",
    [
      req.body.orderNo, 
      req.body.orderName,
      req.body.orderPhone,
      req.body.orderPrice,
      req.body.orderPayment,
      req.body.orderDeli,
      req.body.orderState,
      req.body.orderSendState,
      req.body.orderMemo,
      req.body.memberId,
      req.body.orderType,
      req.body.orderPaymentNo,
      req.body.orderStateNo,
      req.body.orderSendStateNo,
      req.body.orderTypeNo,
    ],
    res.redirect("/member/dashboard/shoppingcart/finish"),
    );
  mySqlOrderListData(req, res);
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: 'thesnackworld1@gmail.com',
      clientId: '82529102330-085qkj9pna3durf9nate92iu2n4enaqq.apps.googleusercontent.com',
      clientSecret: 'ZKQaIZ3qnod3qyDbLQfefRQW',
      refreshToken: '1//04gguNSTMD48uCgYIARAAGAQSNwF-L9IrDb80Ww6AC0Y9NEdlt2XXHBJB1KvDv8jgetiXFEoSe41mtSVyZhM4lPs8td7Evk-uvJM',
    },
  });
  const mailOptions = {
    from: '"小食界"<thesnackworld1@gmail.com>',
    to: `${req.body.orderEmail}`,
    subject: `小食界-訂單成立(編號：${req.body.orderNo})`,
    text: `親愛的 ${req.body.orderName} 會員您好：<br/> 以下為您的訂購資訊<br/> 訂購日期：${req.body.orderDate}<br/> <br/>配送方式：${req.body.orderDeli}<br/><br/>謝謝您的訂購，小食界敬上`,
    html:`親愛的 ${req.body.orderName} 會員您好：<br/> <br/>
    感謝您對小食界的支持，以下為您的訂購資訊<br/> <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;訂購日期：${req.body.orderDate}<br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;訂購金額：${req.body.orderPrice}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;配送方式：${req.body.orderDeli}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;我們將於訂購後完成3-5個工作天進行出貨。<br/>
    <br/>
    謝謝您的訂購，小食界敬上<br/><br/>
    <a href="http://localhost:3000/"><img width="200px" src="https://lh3.google.com/u/2/d/1D3W69meVWnqpAeuZ1vDaYP3GvvtPxHlQ=w1954-h2066-iv1" ></a>`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
  });
})

router.get("/dashboard/shoppingcart/finish", function (req, res, next) {
  res.render("member_dashboard_02_finish.ejs", {
    memberPhone: req.session.memberPhone || "Guest",
  });
});





















// 03訂閱制 router
router.get("/dashboard/subscription", function (req, res, next) {
  res.render("member_dashboard_03.ejs", {
    memberPhone: req.session.memberPhone || "Guest",
  });
});

// router.get('/dashboard/subscription/finish',function(req,res,next){

//   res.redirect("/member/dashboard/subscription/finish");

// })

router.post("/dashboard/subscription/create", function (req, res) {
    var MerchantTradeNo=req.body.MerchantTradeNo;
  var MerchantTradeDate=req.body.MerchantTradeDate;
  var TotalAmount=req.body.TotalAmount;
  var TradeDesc=req.body.TradeDesc;
  var ItemName=req.body.ItemName;
  var check = req.body.CheckMacValue0;
  console.log(check);
  const sha = sha256(check).toUpperCase();
  console.log(sha);
  res.render('member_dashboard_03_send.ejs' , { sha,
    ItemName,
    MerchantTradeDate,
    MerchantTradeNo,
    TotalAmount,
    TradeDesc,
    memberPhone:req.session.memberPhone ||"Guest"} );

  req.body.orderNo = req.body.orderNo || 0;
  req.mysql.query(
    "INSERT INTO normalorder values (?,CURDATE() ,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?)",
    [
      req.body.orderNo, 
      req.body.orderName,
      req.body.orderPhone,
      req.body.orderPrice,
      req.body.orderPayment,
      req.body.orderDeli,
      req.body.orderState,
      req.body.orderSendState,
      req.body.orderMemo,
      req.body.memberId,
      req.body.orderType,
      req.body.orderPaymentNo,
      req.body.orderStateNo,
      req.body.orderSendStateNo,
      req.body.orderTypeNo,
    ],
    );
  mySqlOrderListData(req, res);
  // res.redirect("/member/dashboard/subscription/finish");
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: 'thesnackworld1@gmail.com',
      clientId: '82529102330-085qkj9pna3durf9nate92iu2n4enaqq.apps.googleusercontent.com',
      clientSecret: 'ZKQaIZ3qnod3qyDbLQfefRQW',
      refreshToken: '1//04gguNSTMD48uCgYIARAAGAQSNwF-L9IrDb80Ww6AC0Y9NEdlt2XXHBJB1KvDv8jgetiXFEoSe41mtSVyZhM4lPs8td7Evk-uvJM',
    },
  });
  const mailOptions = {
    from: '"小食界"<thesnackworld1@gmail.com>',
    to: `${req.body.orderEmail}`,
    subject: `小食界訂閱制零食箱-${req.body.orderType}訂閱成立(編號：${req.body.orderNo})`,
    text: `親愛的 ${req.body.orderName} 會員您好：<br/> 以下為您的訂閱資訊<br/> 訂閱日期：${req.body.orderDate}<br/> 訂閱方案：${req.body.orderType}<br/>配送方式：${req.body.orderDeli}<br/>預計開始配送日：${req.body.orderStartTime}<br/>謝謝您的訂閱，小食界敬上`,
    html:`親愛的 ${req.body.orderName} 會員您好：<br/> <br/>
    感謝您對零食箱的支持，以下為您的訂閱資訊<br/> <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;訂閱日期：${req.body.orderDate}<br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;訂閱方案：${req.body.orderType}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;配送方式：${req.body.orderDeli}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;預計開始配送日：${req.body.orderStartTime}<br/>
    <br/>
    謝謝您的訂閱，小食界敬上<br/><br/>
    <a href="http://localhost:3000/"><img width="200px" src="https://lh3.google.com/u/2/d/1D3W69meVWnqpAeuZ1vDaYP3GvvtPxHlQ=w1954-h2066-iv1" ></a>`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
  });
})

router.get("/dashboard/subscription/finish", function (req, res, next) {
  res.render("member_dashboard_03_finish.ejs", {
    memberPhone: req.session.memberPhone || "Guest",
  });
});























// 04訂單管理與訂單清單 router
router.get("/dashboard/order", function (req, res, next) {
  mysqlOrderListDetail(req, res);
  res.render("member_dashboard_04.ejs", {
    sqlorderlist: sqlOrderListTestdata,
    memberPhone: req.session.memberPhone || "Guest",
  });
});

router.get("/dashboard/order/:no", function (req, res, next) {
  orderNo = req.params.no;
  res.render("member_dashboard_04_orderlist.ejs", {
    orderListDetail: orderListDetail,
    orderListDetail1: orderListDetail1,
    memberPhone: req.session.memberPhone || "Guest",
  });
});



















//05收藏商品：取得、刪除
router.get("/dashboard/collect", function (req, res, next) {
  res.render("member_dashboard_05.ejs", {
    memberPhone: req.session.memberPhone || "Guest",
    collectedProd: collectedProd,
  });
});

router.delete("/dashboard/delete", (req, res) => {
  req.mysql.query(
    "DELETE FROM collectedProd WHERE collectNo = ?",
    [req.body.collectNo],
    function (err, result) {
      if (err) {
        res.send(JSON.stringify(err));
        return;
      }
      getcollectedProd(req, res);
      res.redirect("/member/dashboard/collect");
    }
  );
});




















//06意見回饋
router.get("/dashboard/feedback", function (req, res, next) {
  getOrderList(req, res);
  res.render("member_dashboard_06.ejs", {
    memberPhone: req.session.memberPhone || "Guest",
    orderList: data,
  });
});

router.post("/dashboard/feedback/upload", (req, res) => {
  console.log("getPost");
  uploadingQuery(req, res);
});


























//所有叫資料的function

// 01取會員資料，編輯會員資料
var sqlMenberdata = [];
function getinfotest(req, res) {
  req.mysql.query(
    "select * from member where memberId = 100938467",
    [],
    function (err, result1) {
      sqlMenberdata = result1;
      // console.log(sqlMenberdata);
    }
  );
}

// 04從MySQL取得會員編號100938467的訂單
var sqlOrderListTestdata = [];
function mySqlOrderListData(req, res) {
  req.mysql.query(
    "SELECT * FROM normalorder  WHERE memberId = 100938467 ORDER BY orderDate DESC",
    [],
    function (err, result) {
      if (err) throw err;
      sqlOrderListTestdata = result;
      // console.log(sqlOrderListTestdata);
    }
  );
}

// 04從MySQL取得單一訂單購物清單
var orderListDetail = [];
var orderListDetail1 = [];
function mysqlOrderListDetail(req, res) {
  req.mysql.query(
    "SELECT * FROM orderList, normalorder ,prodList  WHERE orderList.orderNo = normalorder.orderNo AND orderList.prodId = prodList.prodId AND orderList.orderNo='210913001' ",
    [],
    function (err, result) {
      if (err) throw err;
      orderListDetail = result;
      var temp = result;
      orderListDetail1 = temp[0];
      // console.log(orderListDetail);
      console.log(orderListDetail1);
    }
  );
}

// 05我的收藏商品相關
var collectedProd = [];
function getcollectedProd(req, res) {
  req.mysql.query(
    "SELECT prodList.prodPhoto1, prodList.prodName, prodList.prodPrice, prodList.prodId, collectedProd.collectNo, collectedProd.memberId  FROM prodList,collectedProd WHERE prodList.prodId = collectedProd.prodId",
    [],
    function (err, result) {
      if (err) throw err;
      collectedProd = result;
    }
  );
}

// 06意見回饋取得訂單資料
var data = [];
function getOrderList(req, res) {
  req.mysql.query(
    "SELECT orderNo, memberId  FROM normalorder  WHERE memberId = 100938467 ORDER BY orderNo DESC",
    [],
    function (err, result) {
      if (err) throw err;
      var dataToString = JSON.stringify(result);
      var dataToJson = JSON.parse(dataToString);
      data = dataToJson;
      console.log(data);
    }
  );
}

function uploadingQuery(req, res) {
  console.log("get Query");
  req.mysql.query(
    `INSERT INTO satisfaction (memberId, subNo, feedback1, feedback2, feedback3, feedback4, feedback_text) VALUES('100938467', ?, ?, ?, ?, ?, ?)`,
    [
      req.body.subNo,
      req.body.feedback1,
      req.body.feedback2,
      req.body.feedback3,
      req.body.feedback4,
      req.body.feedback_text,
    ],
    console.log(req.body.subNo),
    console.log(req.body.feedback1),
    console.log(req.body.feedback2),
    console.log(req.body.feedback3),
    console.log(req.body.feedback4),
    console.log(req.body.feedback_text),

    function (error, result) {
      console.log("EEEEEEEEEEEEEEEEEEEEEE");

      if (error) {
        console.log(error);
        return;
      }
      res.send(result);
    }
    );
}
















router.post('/register', function(req, res){
req.mysql.query(
"insert into member values (?,?,?,?,?,?,?,?,?,?)",
 [req.body.memberId,
  req.body.memberName,
  req.body.memberBirthday,
  req.body.memberGender,
  req.body.memberTel,
  req.body.memberPhone,
  req.body.memberAddress,
  req.body.memberEmail,
  req.body.memberSnackTestResult,
  req.body.password
 ], function(err, results) {
              if (err) {
                res.send(JSON.stringify(err))
                return;
              }
                  
  // res.redirect('/member/login')
})
});

module.exports = router;
