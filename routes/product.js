var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  mySqlProd(req, res);
  // getLocalStorage(req, res)
});

router.get("/cart/:prodId", function (req, res, next) {
  getCartInfo(req, res);
});

router.post("/localStorageReset", function (req, res, next) {
  storageReset(req, res);
});


var prodNo = 0;
router.get("/:no", function (req, res, next) {
  mySqlProd2(req, res);
  prodNo = req.params.no - 1;
});

router.post("/toCollect", function (req, res) {
  toCollect(req, res);
});

router.post("/toSingleToCollect", function (req, res) {
  singleToCollect(req, res);
});





function getCartInfo(req, res) {
  req.mysql.query(
    "SELECT prodName, prodPrice, prodPhoto1, prodId FROM prodList WHERE prodId in (?)",
    [req.params.prodId],
    function (err, result) {
      res.json(result);
    },
    console.log(req.params.prodId),
  );
}

function singleToCollect(req, res) {
  req.mysql.query(
    "INSERT INTO collectedProd (prodId, isCollect, memberId) VALUES (?, 'T', 100938467)",
    [parseInt(req.body.prodId)],
    console.log(`show prodId: ${req.body.prodId}`),

    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
      }
    }
  );
}

function toCollect(req, res) {
  req.mysql.query(
    "INSERT INTO collectedProd (prodId, isCollect, memberId) VALUES (?, 'T', 100938467)",
    [parseInt(req.body.prodId)],
    // console.log(`3 show prodId: ${req.body.prodId}`),

    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
      }
    }
  );
}

// function(err, result){}的格式請好好記牢，每段code底也都要標記「;」或「，」，不然就得花上大半天，質疑自己早已正確的觀念...
function storageReset(req, res) {
  req.mysql.query(
    "SELECT prodName, prodPrice, prodPhoto1, prodId FROM prodList WHERE prodId  in  (?)",
    [req.body.prodId],
    function (err, result) {
      res.json(result);
      // console.log(result);
    },
    console.log(req.body.prodId),
  );
}


// 從MySQL取得所有商品
var sqlAllProd = [];
function mySqlProd(req, res) {
  req.mysql.query("SELECT * FROM prodList", [], function (err, result) {
    if (err) throw err;
    sqlAllProd = result;
    // console.log(sqlAllProd);
    res.render("product.ejs", {
      sqlAllProd: sqlAllProd,
      memberPhone: req.session.memberPhone || "Guest",
    });
  });
}
// 從MySQL取得指定頁面的商品
var sqlAllProd2 = [];
function mySqlProd2(req, res) {
  req.mysql.query("SELECT * FROM prodList ", [], function (err, result) {
    if (err) throw err;
    var temp = result;
    sqlAllProd2 = temp[prodNo];
    var prodName = "";
    prodName = sqlAllProd2.prodName;
    // console.log(sqlAllProd2);
    var prodNoRandom1 = 0;
    var prodNoRandom2 = 0;
    var prodNoRandom3 = 0;
    var prodNoRandom4 = 0;
    prodNoRandom1 = Math.round(Math.random() * 37 + 1);
    prodNoRandom2 = Math.round(Math.random() * 37 + 1);
    prodNoRandom3 = Math.round(Math.random() * 37 + 1);
    prodNoRandom4 = Math.round(Math.random() * 37 + 1);
    var rendomProdCard1 = [];
    var rendomProdCard2 = [];
    var rendomProdCard3 = [];
    var rendomProdCard4 = [];
    rendomProdCard1 = temp[prodNoRandom1];
    rendomProdCard2 = temp[prodNoRandom2];
    rendomProdCard3 = temp[prodNoRandom3];
    rendomProdCard4 = temp[prodNoRandom4];
    console.log(prodNoRandom1);
    console.log(prodNoRandom2);
    console.log(prodNoRandom3);
    console.log(prodNoRandom4);

    res.render("product_no.ejs", {
      title: prodName,
      sqlAllProd2: sqlAllProd2,
      rendomProdCard1: rendomProdCard1,
      rendomProdCard2: rendomProdCard2,
      rendomProdCard3: rendomProdCard3,
      rendomProdCard4: rendomProdCard4,
      memberPhone: req.session.memberPhone || "Guest",
    });
  });
}

module.exports = router;
