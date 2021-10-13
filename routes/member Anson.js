const express = require("express");
const router = express.Router();


router.get("/", function (req, res, next) {
  res.render("member_login", { title: "會員登入",memberPhone:req.session.memberPhone ||"Guest"});
});
router.get("/login", function (req, res, next) {
  res.render("member_login", { title: "會員登入" ,messages:"",memberPhone:req.session.memberPhone ||"Guest",password:req.body.password ||""});
});

router.get('/logout', function(req, res, next) {
  delete req.session.memberPhone;
  res.redirect('/');
});


router.get("/forget", function (req, res, next) {
  res.render("member_forget", { title: "忘記密碼",memberPhone:req.session.memberPhone ||"Guest"});
});
router.get("/register", function (req, res, next) {
  res.render("member_register", { title: "會員註冊",memberPhone:req.session.memberPhone ||"Guest"});
});
router.get("/dashboard", function (req, res, next) {
  var memberPhone = req.session.memberPhone || "Guest";
  if (memberPhone == "Guest") {
    res.redirect("/member/login");
    return;
  }
  getcollectedProd(req, res);
  getinfotest(req, res);
  mySqlOrderListData(req, res);
  res.render("member_dashboard_0920honda.ejs", {
    sqlMenberdata: sqlMenberdata,
    collectedProd: collectedProd,
    memberPhone: req.session.memberPhone || "Guest"
  });
});

router.delete("dashboard/delete/", function(req, res, next){
  deletecollection(req, res)
  res.send("router connection")
})

function deletecollection(req, res){
  req.mysql.query(
    "DELETE FROM collectedProd WHERE prodId = ?",
    [req.body.prodId],
    function(success, fail){
      console.log(success)
    })
  res.send("delete")
}

router.post("/dashboard/edit", function (req, res, next) {
  editinfo(req, res);
});

//會員登入'0912076954', 'test123'

var messages =''; 
router.post('/login', function(req, res, next) {
  var memberPhone = req.body['memberPhone'];
  var password = req.body['password'];
  req.mysql.query("SELECT * FROM memberAccount WHERE memberPhone = ?", [memberPhone],
    function(err, results) {
      if(err) throw err;
      if(results.length == 0) {  //帳號不存在
      
      res.render("member_login", {title: "會員登入" ,messages:"帳號不正確！",memberPhone:memberPhone})
        
      } else if(results[0].password != password) {  //密碼不正確
       
        res.render("member_login", {title: "會員登入" ,messages:"密碼不正確！",password:password})
        
      } else {  //帳號及密碼皆正確
        req.session.memberPhone = req.body.memberPhone;
        req.session.password = req.body.password; //設定session
        res.redirect('http://localhost:3000/member/dashboard');  //開啟管理頁面
      }
  })
});

// 訂閱制
router.get("/dashboard/subscription", function (req, res, next) {
  res.render("member_dashboard_03.ejs", { 
    memberPhone: req.session.memberPhone || "Guest",
  });
});
router.post("/dashboard/subscription/finish", function (req, res, next) {
  res.render("member_dashboard_03_finish.ejs", { 
    memberPhone: req.session.memberPhone || "Guest",
  });
});



// 訂單管理與訂單清單
router.get("/dashboard/order", function (req, res, next) {
  mysqlOrderListDetail(req, res);
  res.render("member_dashboard_04.ejs", { 
    sqlorderlist: sqlOrderListTestdata , 
    memberPhone: req.session.memberPhone || "Guest",
  });
});

router.get("/dashboard/order/:no", function (req, res, next) {
    orderNo = req.params.no;
    res.render("member_dashboard_04_orderlist.ejs", {
      orderListDetail : orderListDetail,
      orderListDetail1 : orderListDetail1,
      memberPhone: req.session.memberPhone || "Guest",
  });
})


// 取會員資料，編輯會員資料
var sqlMenberdata =  [] ; 
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

function editinfo(req, res) {
  var body = req.body;
  req.mysql.query(
    `UPDATE member SET memberName = ?, memberGender = ?, memberTel= ?, memberPhone = ?, memberAddress = ? WHERE memberId = ?`,
    [
      body.memberId,
      body.memberName,
      body.memberGender,
      body.memberTel,
      body.memberPhone,
      body.memberAddress,
    ],
    function (err, result) {
      if (err) {
        res.send(JSON.stringify(err));
        return;
      }
      res.send(result);
      // res.redirect("/member/dashboard");
    }
  );
}

// 從MySQL取得會員編號100938467的訂單
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

// 我的收藏商品相關
var collectedProd = [];
function getcollectedProd(req, res) {
  req.mysql.query(
    "SELECT prodList.prodPhoto1, prodList.prodName, prodList.prodPrice, prodList.prodId, collectedProd.memberId  FROM prodList,collectedProd WHERE prodList.prodId = collectedProd.prodId",    
    [],
    function (err, result) {
      if (err) throw err;
      collectedProd = result;
      console.log(collectedProd);
    }

  );
}

// 從MySQL取得單一訂單購物清單
var orderListDetail= [];
var orderListDetail1 = [];
function mysqlOrderListDetail(req, res) {
  req.mysql.query(
    "SELECT * FROM orderList, normalorder ,prodList  WHERE orderList.orderNo = normalorder.orderNo AND orderList.prodId = prodList.prodId; ",
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




// ANSON註冊功能實驗中,,,,,,,,,,,,,,,,,,,,,,,,,,,

// memberName  memberBirthday memberGender memberEmail memberAddress memberTel memberPhone password
// router.post('/register', function(req, res){
// var memberName = req.body.memberName;
// // var memberBirthday = req.body.memberBirthday;
// // var memberGender = req.body.memberGender;
// var memberEmail = req.body.memberEmail;
// var memberAddress = req.body.memberAddress;
// var memberTel = req.body.memberTel;
// var memberPhone = req.body.memberPhone;
// var password = req.body.password;
// req.mysql.query("insert into `member` (memberName,memberEmail ,memberAddress ,memberTel ,memberPhone ,password) values ('memberName','memberEmail' ,'memberAddress' ,'memberTel' ,'memberPhone' ,'password')", 
//  [ memberName,
//   memberEmail ,
//   memberAddress,
//   memberTel,
//   memberPhone,
//   password
//  ], function(err, results) {
//               if (err) {
//                 res.end('新增失敗：' + err);

//               } else {
//                   res.redirect('/dashboard')}}
// )})


module.exports = router;
