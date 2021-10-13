var express = require("express");
var router = express.Router();
const multer = require('multer');

router.get("/", function (req, res, next) {
  res.render("admin_login", { title: "管理員後台",memberPhone:"Guest"  });
});

router.get("/login", function (req, res, next) {
  mySqlMembers(req, res);
  mySqlNormalorder(req, res);
  mySqlSuborder(req, res);
  mySqlProd(req, res);
  mysqlSuborderProdList(req,res);
  res.render("admin_login", { title: "管理員登入",messages:"",memberPhone:"Guest" });
});
router.get("/dashboard", function (req, res, next) {
  mySqlMembers(req, res);
  mySqlNormalorder(req, res);
  mySqlSuborder(req, res);
  mySqlProd(req, res);
  mysqlOrderListDetail(req, res);
  mysqlSuborderProdList(req,res);
  res.render("admin_dashboard_1_productlist.ejs", {
    title: "管理員後台",
    // sqlmemberlist: sqlmemberlist,
    sqlnormalorderlist: sqlnormalorderlist,
    memberData: memberDataresult,
    sqlsuborderlist:sqlsuborderlist ,
    sqlAllProd:sqlAllProd,
    
  });
  // res.render("admin_dashboard", { title: "管理員後台" });
});

router.get("/dashboard/productlist", function (req, res, next) {
  res.render("admin_dashboard_1_productlist.ejs", 
  {title: "管理員後台",
  // sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult ,
  sqlsuborderlist:sqlsuborderlist ,
  sqlAllProd:sqlAllProd,
});
});




router.get("/dashboard/orderlist", function (req, res, next) {
  mysqlOrderListDetail(req, res);
  mysqlSuborderProdList(req, res);
  res.render("admin_dashboard_3_orderlist.ejs", 
  { title: "管理員後台",
  // sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult,
  sqlsuborderlist:sqlsuborderlist ,
  sqlAllProd:sqlAllProd,
});
});



router.get("/dashboard/order/:no", function (req, res, next) {
  orderNo = req.params.no;
  res.render("admin_dashboard_6_orderDetail.ejs", {
    orderListDetail: orderListDetail,
    orderListDetail1: orderListDetail1,
    memberPhone: req.session.memberPhone || "Guest",
  });
});



router.get("/dashboard/suborderlist", function (req, res, next) {
  res.render("admin_dashboard_4_suborderlist.ejs", 
  {title: "管理員後台",
  // sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult,
  sqlsuborderlist:sqlsuborderlist ,
  sqlAllProd:sqlAllProd,
 });
});








router.get("/dashboard/memberlist", function (req, res, next) {
  
  res.render("admin_dashboard_5_memberlist.ejs", 
  {title: "管理員後台",
  sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult,
  sqlsuborderlist:sqlsuborderlist ,
  sqlAllProd:sqlAllProd,
  
});
});

router.get("/dashboard/orderDetail", function (req, res, next) {
  mysqlSuborderProdList(req,res);
  res.render("admin_dashboard_6_orderDetail.ejs",  {title: "管理員後台",
  // sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult,
  sqlsuborderlist:sqlsuborderlist ,
  sqlAllProd:sqlAllProd,
  orderListDetail: orderListDetail,
  orderListDetail1: orderListDetail1,
});
});

router.get("/dashboard/suborderDetail/:no", function (req, res, next) {
  res.render("admin_dashboard_7_suborderDetail.ejs",  {title: "管理員後台",
  // sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult,
  sqlsuborderlist:sqlsuborderlist,
  sqlAllProd:sqlAllProd,
  subOrderProdList:subOrderProdList,
});
});




router.get("/dashboard/editProductDetail", function (req, res, next) {
  res.render("admin_dashboard_8_editProductDetail.ejs", {title: "管理員後台",
  // sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult,
  sqlsuborderlist:sqlsuborderlist ,
  sqlAllProd:sqlAllProd,
});
});



// 商品列表--新增商品

router.get("/dashboard/addproduct", function (req, res, next) {
  res.render("admin_dashboard_2_addproduct.ejs", 
  { title: "管理員後台",
  // sqlmemberlist: sqlmemberlist,
  sqlnormalorderlist: sqlnormalorderlist,
  memberData: memberDataresult,
  sqlsuborderlist:sqlsuborderlist ,
  sqlAllProd:sqlAllProd,
});
});

router.post("/dashboard/addproduct", function (req, res, next) {
  req.mysql.query(
  "INSERT INTO prodList values (?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?)",
  [
    req.body.prodName,
    req.body.prodPrice,
    req.body.prodCountry,
    req.body.prodCountryNo,
    req.body.prodStock,
    req.body.prodId,
    req.body.prodTaste,
    req.body.prodTasteNo,
    req.body.prodType,
    req.body.prodTypeNo,
    req.body.prodInfo,
    req.body.prodPhoto1,
    req.body.prodPhoto2,
    req.body.prodPhoto3
  ], 
  function (err, result) {
    if (err) {
      res.send(JSON.stringify(err))
      return;
    }
   
    mySqlProd(req, res);
    res.redirect("/admin/dashboard/productlist");
  }
  );
});




















// 商品列表---點"編輯"
var prodId = 0;
var sqladminProd = [] ; 

router.get("/dashboard/editProductDetail/:no", function (req, res, next) {
  prodId = req.params.no ;
  req.mysql.query(
    "SELECT * FROM prodList where prodId =?",
    [prodId],
    function (err, result) {
      if (err) throw err;
      sqladminProd = result[0];
      res.render('admin_dashboard_8_editProductDetail', { title:"管理員後台" , sqladminProd: sqladminProd});
  }
  );
});

router.post("/dashboard/editproduct", function (req, res) {
  req.mysql.query(
     "UPDATE prodList SET prodName = ?, prodPrice= ?, prodCountry = ?, prodType = ?, prodStock= ?,prodInfo= ? WHERE prodList.prodId = ? ",
    [ req.body.prodName,
      req.body.prodPrice,
      req.body.prodCountry,
      req.body.prodType,
      req.body.prodStock,
      req.body.prodInfo,
      req.body.prodId], 
    function (err, result) {
      if (err) {
        res.send(JSON.stringify(err))
        return;
      }
     
      mySqlProd(req, res);
      res.redirect("/admin/dashboard/productlist");
      // res.render("admin_dashboard_5_memberlist.ejs",{ title: "管理員後台",sqlmemberlist: sqlmemberlist});
    }
  )
})






// 商品列表---點"刪除"

var prodId = 0;
var sqladminProd = [] ; 
router.get('/dashboard/delproduct/:no', function(req, res, next) {
  prodId = req.params.no ;
  req.mysql.query(
    "SELECT * FROM prodList where prodId =?",
    [prodId],
    function (err, result) {
      if (err) throw err;
      sqladminProd = result[0];
      res.render('admin_dashboard_11_deleteProductDetail', { title:"管理員後台" , sqladminProd: sqladminProd});
  }
  );
});

router.post("/dashboard/delproduct", function (req, res) {
    // res.send("OK");
    // return;
    req.mysql.query(
      "delete from prodList where prodId = ? ",
      [prodId], 
      function (err, result) {
        if (err) {
          res.send(JSON.stringify(err))
          return;
        }
        
        mySqlProd(req, res);
        res.redirect("/admin/dashboard/productlist");
        // res.render("admin_dashboard_5_memberlist.ejs",{ title: "管理員後台",sqlmemberlist: sqlmemberlist});
      }
    )
  })



// 訂單列表---點"刪除"

var memberId = 0;
var memberDataresult = [];
router.get("/dashboard/delmember/:memberId", function (req, res) {
  // res.send(req.params.id);
  memberId = req.params.memberId
  // console.log(memberId);
  req.mysql.query(
    "select * from member where memberId = ? ",
    [memberId],
    function (err, result) {
      if (err) {
        res.send(JSON.stringify(err))
        return;
      }
      memberDataresult = result[0];
      res.render("admin_dashboard_10_deleteMemberDetail.ejs", { memberData: result[0],title: "管理員後台"});
    }
  )
})

router.post("/dashboard/delmember", function (req, res) {
  // res.send("OK");
  // return;
  req.mysql.query(
    "delete from member where memberId = ? ",
    [memberId], 
    function (err, result) {
      if (err) {
        res.send(JSON.stringify(err))
        return;
      }
      
      mySqlMembers(req, res);
      res.redirect("/admin/dashboard/memberlist");
      // res.render("admin_dashboard_5_memberlist.ejs",{ title: "管理員後台",sqlmemberlist: sqlmemberlist});
    }
  )
})









//管理員後台登入('admin', 'adminpassword');
var messages =''; 
router.post('/login', function(req, res, next) {
  var adminId = req.body['adminId'];
  var password = req.body['password'];
  req.mysql.query("SELECT * FROM adminAccount WHERE adminId = ?", [adminId],
    function(err, results) {
      if(err) throw err;
      if(results.length == 0) {  //帳號不存在
      
      res.render("admin_login", {title: "管理員登入" ,messages:"帳號不正確！",memberPhone:"Guest",adminId:adminId})
        
      } else if(results[0].password != password) {  //密碼不正確
       
        res.render("admin_login", {title: "管理員登入" ,messages:"密碼不正確！",memberPhone:"Guest",password:password})
        
      } else {  //帳號及密碼皆正確
        req.session.adminId = req.body.adminId;
        req.session.password = req.body.password; //設定session
        res.redirect('/admin/dashboard');  //開啟管理頁面
      }
  })
});

// 從MySQL取得所有會員資料---到管理員後台
var sqlmemberlist = [];
function mySqlMembers(req, res) {
  req.mysql.query("SELECT * FROM `member`", [], function (err, result) {
      sqlmemberlist = result;
      // title: "管理員後台",
      // sqlnormalorderlist: normalorderresult
  });
}
// 從MySQL取得ㄧ般訂單資料---到管理員後台
var sqlnormalorderlist = [];
function mySqlNormalorder(req, res) {
  req.mysql.query( "SELECT * FROM normalorder  WHERE orderTypeNo = 1 ORDER BY orderDate DESC ", [], function (err,result) {
    sqlnormalorderlist = result;

  });
}
// 從MySQL取得訂閱制訂單資料---到管理員後台
var sqlsuborderlist = [];
function mySqlSuborder(req, res) {
  req.mysql.query( `SELECT * FROM normalorder  WHERE orderTypeNo in ( 2 , 3 , 4 ) ORDER BY orderDate DESC `, [], function (err,result) {
    sqlsuborderlist = result;

  });
}


//從SQL取訂閱清單

var subOrderProdList = [];
function mysqlSuborderProdList(req,res){
  req.mysql.query('SELECT * FROM orderlist,prodList WHERE orderNo=210030001 AND orderlist.prodId=prodList.prodId',[],
  function(err,result){
    subOrderProdList = result;
    console.log(subOrderProdList);
  });
}

// 從MySQL取得商品列表
var sqlAllProd =  [] ; 
function mySqlProd(req, res) {
  req.mysql.query(
    "SELECT * FROM prodList",
    [],
    function (err, result) {
      if (err) throw err;
      sqlAllProd =  result ; 
     
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
      // console.log(orderListDetail1);
    }
  );
}









//圖片上傳
var myStorage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "upload");    // 保存的路徑 (需先自己創建)
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);  // 自定義檔案名稱
  }
});

var upload = multer({
  storage: myStorage,  // 設置 storage
  fileFilter: function (req, file, cb) {  // 檔案過濾
      if (file.mimetype != 'image/jpeg'|'image/png') {
          return cb(new Error('Wrong file type'));
      }
      cb(null, true)
  }
});

// router.post('/dashboard/addproduct/upload_file', upload.single('myfile'), function (req, res, next) {
//   res.send("上傳成功");
// });


module.exports = router;
