//   navbar滑動指定高度更換配色
$(function () {
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    // $("span.qScrollTop").text(scrollVal);
    // console.log(scrollVal);
    if (scrollVal < 113) {
      // 如果滾動的物件捲動 < 700 則觸發指定的動作。
      $("#navbar").css("transition", "background-color 0.2s ease-in");
      $("#navbar").css("background-color", "unset");
      $(".nav-link").css("color", "var(--color1)");
      $("#navbarLogo").prop("src", "/images/blue_logo.svg");
      $("#navbarShoppingCart").prop("src", "/images/blue_cart.svg");
    }
    if (scrollVal >= 700) {
      // 如果滾動的物件捲動 >= 700 則觸發指定的動作。
      $("#navbar").css("transition", "background-color 0.2s ease-in");
      $("#navbar").css("background-color", "var(--color1)");
      $(".nav-link").css("color", "white");
      $("#navbarLogo").prop("src", "/images/white_logo.svg");
      $("#navbarShoppingCart").prop("src", "/images/white_cart.svg");
    }
    if (113 <= scrollVal && scrollVal < 700) {
      // 如果滾動的物件捲動 < 700 則觸發指定的動作。
      $("#navbar").css("transition", "background-color 0.2s ease-in");
      $("#navbar").css("background-color", "white");
      $(".nav-link").css("color", "var(--color1)");
      $("#navbarLogo").prop("src", "/images/blue_logo.svg");
      $("#navbarShoppingCart").prop("src", "/images/blue_cart.svg");
    }
  });
});

//   訂閱零食箱連結到首頁訂閱區塊
$("#navbarSubLink").click(function () {
  $("html,body").animate(
    { scrollTop: $("#indexmemberSubPlanChoose").offset().top },
    1600
  );
});

// 載入頁面 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function () {
  var cart = {};
  cart.prodId = [];
  var storageData = localStorage.getItem("cart");
  // 判斷localStorage是否為空；如是，加上預設cart
  if (storageData === null) {
    runone(cart);
  }
  // 轉化資料格式（Data type Required） => {prodId:["1", "2","3","4","5"]};
  var JSONData = JSON.parse(storageData);
  // 處理載入，給紅色小標籤的值
  var loadingCount = JSONData.prodId.length;
  $(".CartCount").text(loadingCount);

  // console.log(JSONData);
  getInfo(JSONData);

  // 購物車下拉~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $(".cart").on("click", () => {
    $(".cartGocontainer").fadeToggle("fast").removeClass("show");
  });

  // Pushing the data from localStorage into Cart
  // 請用dataType, contentType嚴格規範了client <=> server之前的傳送，
  // 務必記住，它們是雙向的，所以最後「送」與「回」都有明確的type
  // 舉例來說，dataType要求{prodId: '5'}的格式，再加個JSON.stringify，因為，它必定為string的傳送
  // 而如果是「the same key with multiple value」,using : {prodId:["1", "2","3","4","5"]}
  function getInfo(JSONData) {
    $.ajax({
      url: "http://localhost:3000/product/localStorageReset",
      type: "post",
      data: JSON.stringify(JSONData),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      crossDomain: true,
      success: function (result) {
        // console.log(result);
        for (index in result) {
          $(".cartTitle").after(function () {
            return `<div class="cartItem" id="${result[index].prodId}"><div class="cartImage" style="background-image: url(${result[index].prodPhoto1})"></div><div class="cartContent"><p>${result[index].prodName}</p><div>NT$${result[index].prodPrice}</div></div><div class="garbageCan"></div></div>`;
          });
        }
      },
      error: function (err) {
        throw err;
      },
      complete: function (response, textStatus) {
        return;
      },
    });
  }

  // 處理購物車 => counting ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var reduceBtnCount = JSON.parse(localStorage.getItem("cart"));
  var localStorageList = reduceBtnCount.prodId;
  $(".cartBtn").on("click", (e, CartCount, localStorageList) => {
    var CartCount = parseInt($(".CartCount").text());
    var prodId = e.target.id;

    adding(CartCount);
    localStoragePush(prodId);
    createProduct(prodId);
    // garbageBtn(localStorageList, CartCount)
  });
  $("body").on("click", ".garbageCan", function () {
    garbageBtn();
  });

  function adding(CartCount) {
    // console.log(CartCount);
    CartCount++;
    $(".CartCount").text(CartCount);
  }

  function localStoragePush(productItem) {
    if (localStorage && localStorage.getItem("cart")) {
      var cart = JSON.parse(localStorage.getItem("cart"));
      cart.prodId.push(productItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // console.log(productItem)
    // console.log(cart)
  }

  function createProduct(id) {
    let deleteId = id;
    // let count = CartCount;
    // 要求購物車資料
    $.ajax({
      url: "http://localhost:3000/product/cart/" + deleteId,
      type: "get",
      contentType: "application/json",
      success: function (result) {
        $(".cartTitle").after(function () {
          return `<div class="cartItem" id="${result[0].prodId}"><div class="cartImage" style="background-image: url(${result[0].prodPhoto1})"></div><div class="cartContent"><p>${result[0].prodName}</p><div>NT$${result[0].prodPrice}</div></div><div class="garbageCan"></div></div>`;
        });
      },
      error: function (err) {
        throw err;
      },
      complete: function (response, textStatus) {
        return;
      },
    });
  }

  function garbageBtn() {
    $(".garbageCan").click(function (deleteCartCount) {
      let reduceBtnCount = JSON.parse(localStorage.getItem("cart"));
      let List = reduceBtnCount.prodId;
      let listLength = List.length - 1;
      let removingDiv = $(this).parent();
      let garbageCanId = removingDiv.attr("id");

      // 刪除購物車item
      removingDiv.remove();

      // 刪除localStorage裡的值
      for (index in List) {
        if (parseInt(List[index]) === parseInt(garbageCanId)) {
          List.splice(index, 1);
          reduceBtnCount.prodId = List;
          localStorage.setItem("cart", JSON.stringify(reduceBtnCount));
        }
      }

      // 減法紅色提示
      if (listLength < 0) {
        return;
      } else if (listLength === 0) {
        $(".CartCount").text(0);
        return;
      } else {
        $(".CartCount").text(listLength);
      }
    });
  }
});

function runone(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
