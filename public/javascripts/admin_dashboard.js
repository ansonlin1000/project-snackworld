// -------------------------左側選單收合效果-----------------------
$("#productBtn").click(function (e) {
  e.preventDefault();
  $("#productBtn").toggleClass("active");
  $("#productList").slideToggle();
});


$("#orderBtn").click(function (e) {
  e.preventDefault();
  $("#orderBtn").toggleClass("active");
  $("#orderList").slideToggle();
});


$("#memberBtn").click(function (e) {
  e.preventDefault();
  $("#memberBtn").toggleClass("active");
  $("#memberList").slideToggle();
});


$("#articleBtn").click(function (e) {
  e.preventDefault();
  $("#articleBtn").toggleClass("active");
  $("#articleList").slideToggle();
});
// -------------------------點擊左側選單,右側內容換頁效果-----------------------


//   $(document).on('click', '#a-productList1', function(){ 
//   $('#li-productList1').addClass('smallListfixed');
//   $('#a-productList1').css('color', 'var(--color1)');

//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');
//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');
// })

// $(document).on('click', '#a-productList2', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');

//   $('#li-productList2').addClass('smallListfixed');
//   $('#a-productList2').css('color', 'var(--color1)');

//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');
// })

// $(document).on('click', '#a-orderList1', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');
//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');

//   $('#li-orderList1').addClass('smallListfixed');
//   $('#a-orderList1').css('color', 'var(--color1)');

//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');
// })
 
// $(document).on('click', '#a-orderList2', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');
//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');
//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');

//   $('#li-orderList2').addClass('smallListfixed');
//   $('#a-orderList2').css('color', 'var(--color1)');

//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

// })

// $(document).on('click', '#a-memberList1', function(){
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');
//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');
//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');

//   $('#li-memberList1').addClass('smallListfixed');
//   $('#a-memberList1').css('color', 'var(--color1)');

//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

// })






// // -------------------------點擊右側新增商品-----------------------
// $('#a-productList2-1').click(function () {
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');

//   $('#li-productList2').addClass('smallListfixed');
//   $('#a-productList2').css('color', 'var(--color1)');

//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

//   $('#productcontainer').css('display', 'none');
//   $('#addproductcontainer').css('display', 'block');
//   $('#ordercontainer').css('display', 'none');
//   $('#returnordercontainer').css('display', 'none');
//   $('#membercontainer').css('display', 'none');
//   $('#articlecontainer').css('display', 'none');
//   $('#addarticlecontainer').css('display', 'none');

//   $('#checkorderdetailcontainer').css('display', 'none');
//   $('#returnorderdetailcontainer').css('display', 'none');
//   $('#editProductDetailcontainer').css('display', 'none');
//   $('#editMemberDetailcontainer').css('display', 'none');
//   $('#deleteMemberDetailcontainer').css('display', 'none');
// })










// $(document).on('click', '#checkorderdetailBtn', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');

//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');

//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

//   $('#productcontainer').css('display', 'none');
//   $('#checkorderdetailcontainer').css('display', 'block');
//   $('#returnorderdetailcontainer').css('display', 'none');
//   $('#editProductDetailcontainer').css('display', 'none');
//   $('#editMemberDetailcontainer').css('display', 'none');
//   $('#deleteMemberDetailcontainer').css('display', 'none');
//   $('#addproductcontainer').css('display', 'none');
//   $('#ordercontainer').css('display', 'none');
//   $('#returnordercontainer').css('display', 'none');
//   $('#membercontainer').css('display', 'none');
//   $('#articlecontainer').css('display', 'none');
//   $('#addarticlecontainer').css('display', 'none');
// })



// $(document).on('click', '#returnorderdetailBtn', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');

//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');

//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

//   $('#productcontainer').css('display', 'none');
//   $('#checkorderdetailcontainer').css('display', 'none');
//   $('#returnorderdetailcontainer').css('display', 'block');
//   $('#editProductDetailcontainer').css('display', 'none');
//   $('#editMemberDetailcontainer').css('display', 'none');
//   $('#deleteMemberDetailcontainer').css('display', 'none');
//   $('#addproductcontainer').css('display', 'none');
//   $('#ordercontainer').css('display', 'none');
//   $('#returnordercontainer').css('display', 'none');
//   $('#membercontainer').css('display', 'none');
//   $('#articlecontainer').css('display', 'none');
//   $('#addarticlecontainer').css('display', 'none');
// })



// $(document).on('click', '#editProductDetailBtn', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');

//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');

//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

//   $('#productcontainer').css('display', 'none');
//   $('#checkorderdetailcontainer').css('display', 'none');
//   $('#returnorderdetailcontainer').css('display', 'none');
//   $('#editProductDetailcontainer').css('display', 'block');
//   $('#editMemberDetailcontainer').css('display', 'none');
//   $('#deleteMemberDetailcontainer').css('display', 'none');
//   $('#addproductcontainer').css('display', 'none');
//   $('#ordercontainer').css('display', 'none');
//   $('#returnordercontainer').css('display', 'none');
//   $('#membercontainer').css('display', 'none');
//   $('#articlecontainer').css('display', 'none');
//   $('#addarticlecontainer').css('display', 'none');
// })

// $(document).on('click', '#editMemberDetailBtn', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');

//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');

//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

//   $('#productcontainer').css('display', 'none');
//   $('#checkorderdetailcontainer').css('display', 'none');
//   $('#returnorderdetailcontainer').css('display', 'none');
//   $('#editProductDetailcontainer').css('display', 'none');
//   $('#editMemberDetailcontainer').css('display', 'block');
//   $('#deleteMemberDetailcontainer').css('display', 'none');
//   $('#addproductcontainer').css('display', 'none');
//   $('#ordercontainer').css('display', 'none');
//   $('#returnordercontainer').css('display', 'none');
//   $('#membercontainer').css('display', 'none');
//   $('#articlecontainer').css('display', 'none');
//   $('#addarticlecontainer').css('display', 'none');
// })

// $(document).on('click', '#deleteMemberDetailBtn', function(){ 
//   $('#li-productList1').removeClass('smallListfixed');
//   $('#a-productList1').css('color', 'white');

//   $('#li-productList2').removeClass('smallListfixed');
//   $('#a-productList2').css('color', 'white');

//   $('#li-orderList1').removeClass('smallListfixed');
//   $('#a-orderList1').css('color', 'white');
//   $('#li-orderList2').removeClass('smallListfixed');
//   $('#a-orderList2').css('color', 'white');
//   $('#li-memberList1').removeClass('smallListfixed');
//   $('#a-memberList1').css('color', 'white');
//   $('#li-articleList1').removeClass('smallListfixed');
//   $('#a-articleList1').css('color', 'white');
//   $('#li-articleList2').removeClass('smallListfixed');
//   $('#a-articleList2').css('color', 'white');

//   $('#productcontainer').css('display', 'none');
//   $('#checkorderdetailcontainer').css('display', 'none');
//   $('#returnorderdetailcontainer').css('display', 'none');
//   $('#editProductDetailcontainer').css('display', 'none');
//   $('#editMemberDetailcontainer').css('display', 'none');
//   $('#deleteMemberDetailcontainer').css('display', 'block');
//   $('#addproductcontainer').css('display', 'none');
//   $('#ordercontainer').css('display', 'none');
//   $('#returnordercontainer').css('display', 'none');
//   $('#membercontainer').css('display', 'none');
//   $('#articlecontainer').css('display', 'none');
//   $('#addarticlecontainer').css('display', 'none');
  
// })


