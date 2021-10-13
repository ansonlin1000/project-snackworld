//用於產生訂單編號、訂購日期
var today = new Date() ;
var todayYYMMDD = `${today.getFullYear()} / ${today.getMonth()+1} / ${today.getDate()}`;



$('input[name=payment]:checked').val()

$('#memberShoppingCartBtn1').click(function(){
    $('#memberShoppingCartList').css('display','none');
    $('#memberShoppingCartPayandDeli').css('display','flex');
    $('#memberShoppingCartBtn1').hide();
    $('#memberShoppingCartBtn2').css('display','flex');
})

$('#memberShoppingCartBtn2').click(function(){
    if($("input[name=payment]").is(':checked') == false){
        $('#checkRadioIsCheck').text('尚未選擇付款方式')
    }else if($("input[name=deliverychoose]").is(':checked') == false){
        $('#checkRadioIsCheck').text('尚未選擇配送方式')
    }else{
        $('#memberShoppingCartPayandDeli').css('display','none');
        $('#memberShoppingCartCountBox').css('display','none');
        $('#memberShoppingCartOrderSendBox').show();
        $('#memberDashboard').css('height', '1050px')
        $('#memberDashboardMain ').css('height', '1030px')
    }
})


// 建立訂單編號
createOrderNo = `21${("0" + (today.getMonth() + 1)).slice(-2)}${today.getHours()*60*60+today.getMinutes()*60+today.getSeconds()}`;
$('input[name=orderNo]').val(createOrderNo);
$('input[name=orderDate]').val(todayYYMMDD);



// 如果選宅配出現配送地點 
$('.sendplace').hide();
$(".menberPaymentOptionRadio").on("click", function (e){

$enable=$('input[name=orderDeli]:checked').val()
if( $enable == '宅配' ){
    $('.sendplace').show();
}else{
    $('.sendplace').hide();
}
})


// 結帳頁面輸入資料會員資料同步

$("#dataFromSqlshopping").change(function(){
    if(this.checked){
        $('input[name=orderName]').val('趙世昌');
        $('input[name=orderPhone]').val('0912076954');
        $('input[name=orderMemo]').val('台北市士林區福華路17巷1號');
        $('input[name=orderEmail]').val('4changzhao@gmail.com');
    }else{
        $('input[name=orderName]').val('');
        $('input[name=orderPhone]').val('');
        $('input[name=orderMemo]').val('');
        $('input[name=orderEmail]').val('');
    }
})


$('#pordItemCount').text('3 ');
$('#pordItemCount').text('3 ');

var price = $('#prodCountPrice').text();

$('input[name=deliverychoose]').click(function(){
    console.log($('input[name=deliverychoose]:checked').val());
    $('input[name=orderDeli]').val($('input[name=deliverychoose]:checked').val()) ;
})

$('input[name=payment]').click(function(){
    var paymemtTemp = $('input[name=payment]:checked').val()
    console.log($('input[name=payment]:checked').val());
    $('input[name=orderPayment]').val($('input[name=payment]:checked').val()) ;
    if (paymemtTemp == '信用卡' ){
        $('input[name=orderPaymentNo]').val('1') ;
        
    }
})


$('input[name=orderPrice]').val(price) ;


$('input[name=creditcardNo]').change(function(){
    $('#creditcardNoTable1').text($('input[name=creditcardNo]').val());
    // creditcardNoTable1
})