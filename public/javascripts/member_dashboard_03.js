//用於產生訂單編號、訂購日期
var today = new Date() ;
var todayYYMMDD = `${today.getFullYear()}/${("0" + (today.getMonth() + 1)).slice(-2)}/${("0" + (today.getDate())).slice(-2)} ${today.getHours()}:${today.getMinutes()}:${("0" + (today.getSeconds())).slice(-2)}`

console.log('oKKKKKKKKKKKKK')


// var priceTemp = 0;

// 選取不同方案，帶入不同參數
$('#subaStealPlanBtn').click(function(){
    console.log("YOOOOOOOOOO")
    $('#memberSubPlanChoose').hide()
    $('#membersubPayandDeliBox').css('display','flex');
    $('#countBoxSubPlan').text('超值箱');
    $('.countBoxPrice').text(' 499 ');
    $('input[name=orderPrice]').val(499);
    // priceTemp = 499;
    // $('input[name=TotalAmount]').val(499);
    $('input[name=orderType]').val('超值箱');
    // $('input[name=ItemName]').val('超值箱');
    $('input[name=orderTypeNo]').val(2);
    // console.log(priceTemp)
    // $('input[name=TotalAmount]').val(priceTemp);
})

$('#subenjoyPlanBtn').click(function(){
    console.log("Yheaaaaaaaaa")
    $('#memberSubPlanChoose').hide()
    $('#membersubPayandDeliBox').css('display','flex');
    $('#countBoxSubPlan').text('享樂箱');
    $('.countBoxPrice').text(' 699 ');
    $('input[name=orderPrice]').val(699);
    // priceTemp = 699;
    // $('input[name=TotalAmount]').val(699);
    $('input[name=orderType]').val('享樂箱');
    // $('input[name=ItemName]').val('享樂箱');
    $('input[name=orderTypeNo]').val(3);
    // console.log(priceTemp)
    // $('input[name=TotalAmount]').val(priceTemp);
})

$('#subpartyPlanSlectBtn').click(function(){
    console.log("partyyyyyyyyyy")
    $('#memberSubPlanChoose').hide()
    $('#membersubPayandDeliBox').css('display','flex');
    $('#countBoxSubPlan').text('派對箱');
    $('.countBoxPrice').text(' 999 ');
    $('input[name=orderPrice]').val(999);
    // priceTemp = 999;
    // $('input[name=TotalAmount]').val(999);
    $('input[name=orderType]').val('派對箱');
    // $('input[name=ItemName]').val('派對箱');
    $('input[name=orderTypeNo]').val(4);
    // console.log(priceTemp)
    // $('input[name=TotalAmount]').val(priceTemp);
})


// 給訂單金額



// 建立訂單編號
// createOrderNo = `21${("0" + (today.getMonth() + 1)).slice(-2)}${today.getHours()*60*60+today.getMinutes()*60+today.getSeconds()}`;
// $('input[name=orderNo]').val(createOrderNo);
// $('input[name=MerchantTradeNo]').val(createOrderNo);
// console.log(createOrderNo);
// $('input[name=orderDate]').val(todayYYMMDD);
// $('input[name=MerchantTradeDate]').val(todayYYMMDD);
// console.log(today);




// 如果選宅配出現配送地點 
$('.sendplace').hide();
$(".menberPaymentOptionRadio").on("click", function (e){

$enable=$('input[name=orderDeli]:checked').val()
console.log($enable);
if( $enable == '宅配' ){
    $('.sendplace').show();
}else{
    $('.sendplace').hide();
}
})

// 如果訂購日為每月15號之後，首次配送日為次月20日
$('#startSubData').text(todayYYMMDD);
var startTime0 = `${today.getFullYear()} / ${today.getMonth()+1} / 20`;
var startTime = `${today.getFullYear()} / ${today.getMonth()+2} / 20`;
if(  today.getDate()>=15 ){
    $('#startSendTime').text(startTime);
    $('input[name=orderStartTime]').val(startTime);
}else{
    $('#startSendTime').text(startTime0);
    $('input[name=orderStartTime]').val(startTime0);
}


// 結帳頁面輸入資料會員資料同步

$("#dataFromSql").change(function(){
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

// 切換到第三頁
$('#memberShoppingCartBtn').click(function(){
    if($("input[name=orderPayment]").is(':checked') == false){
        $('#checkRadioIsCheck').text('尚未選擇付款方式')
    }else if($("input[name=orderDeli]").is(':checked') == false){
        $('#checkRadioIsCheck').text('尚未選擇配送方式')
    }else{
    $('#membersubPayandDeliBox').hide();
    $('#memberSubOrderSendBoxBg').css('display','flex');
    $('#memberDashboard').css('height', '770px')
    }
})

$('#memberOrderSend').click(function(){
    $('#memberSubOrderSendBoxBg').hide();
    $('#memberSubOrderFinish').show();

})




// var sha256 = require('sha256');

//產生日期
var now = new Date();
var changeNow = `${now.getFullYear()}/${("0" + (now.getMonth() + 1)).slice(-2)}/${("0" + (now.getDate())).slice(-2)} ${now.getHours()}:${("0" + (now.getMinutes())).slice(-2)}:${("0" + (now.getSeconds())).slice(-2)}`
//設定日期
$('input[name=MerchantTradeDate]').val(changeNow);
$('input[name=orderDate]').val(changeNow);
// $('input[name=MerchantTradeDate]').val('2021/10/01 15:30:23');

console.log(now);
console.log(changeNow);

//產生20碼訂單編號
var orderNo20 = `LL${now.getFullYear()}${("0" + (now.getMonth() + 1)).slice(-2)}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}0e9a`
console.log(orderNo20);
// 設定訂單編號
$('input[name=orderNo]').val(orderNo20);
$('input[name=MerchantTradeNo]').val(orderNo20);
// $('input[name=MerchantTradeNo]').val('test20210312153023f');


TotalAmount=$('input[name=TotalAmount]').val();
ItemName=$('input[name=ItemName]').val();
var MerchantTradeNo=orderNo20 ;
MerchantTradeDate=changeNow;

TradeDesc=$('input[name=TradeDesc]').val();;
// TradeDesc='小食界零食箱訂閱';
var MerchantID='2000132'  ;
PaymentType='aio';
ReturnURL='https://developers.ecpay.tw/AioMock/MerchantReturnUrl'
ChoosePayment='Credit';
EncryptType = '1';



// HashKey=5294y06JbISpM5x9&ChoosePayment=Credit&EncryptType=1&ItemName=${ItemName}&MerchantID=2000132&MerchantTradeDate=${MerchantTradeDate}&MerchantTradeNo=${MerchantTradeNo}&PaymentType=aio&ReturnURL=${ReturnURL}&TotalAmount=${TotalAmount}&TradeDesc=${TradeDesc}&HashIV=v77hoKGq4kWxNNIS



//綠界demo
// var temp0 = `HashKey=5294y06JbISpM5x9&ChoosePayment=Credit&EncryptType=1&ItemName=Apple iphone 7 手機殼&MerchantID=2000132&MerchantTradeDate=2021/10/01 15:30:23&MerchantTradeNo=test20210312153023f&PaymentType=aio&ReturnURL=https://www.ecpay.com.tw/receive.php&TotalAmount=1000&TradeDesc=促銷方案&HashIV=v77hoKGq4kWxNNIS`
//TEST1
var temp0 = `HashKey=5294y06JbISpM5x9&ChoosePayment=Credit&EncryptType=1&ItemName=${ItemName}&MerchantID=2000132&MerchantTradeDate=${MerchantTradeDate}&MerchantTradeNo=${MerchantTradeNo}&PaymentType=aio&ReturnURL=${ReturnURL}&TotalAmount=${TotalAmount}&TradeDesc=${TradeDesc}&HashIV=v77hoKGq4kWxNNIS`
//歐付寶demo
// var temp0 = `HashKey=5294y06JbISpM5x9&ChoosePayment=Credit&ClientBackURL=https://developers.opay.tw/AioMock/MerchantClientBackUrl&CreditInstallment=&EncryptType=1&InstallmentAmount=&ItemName=MacBook 30元X2#iPhone6s 40元X1&MerchantID=2000132&MerchantTradeDate=2021/09/30 19:30:10&MerchantTradeNo=DX20210930193010f663&PaymentType=aio&Redeem=&ReturnURL=https://developers.opay.tw/AioMock/MerchantReturnUrl&StoreID=&TotalAmount=5&TradeDesc=建立信用卡測試訂單&HashIV=v77hoKGq4kWxNNIS`

//自己寫的
// var temp0 = `HashKey=5294y06JbISpM5x9&ChoosePayment=Credit&ItemName=${ItemName}&MerchantID=2000132&MerchantTradeDate=${MerchantTradeDate}&MerchantTradeNo=${MerchantTradeNo}&PaymentType=aio&ReturnURL=https://developers.opay.tw/AioMock/MerchantReturnUrl&TotalAmount=${TotalAmount}&TradeDesc=${TradeDesc}&HashIV=v77hoKGq4kWxNNIS`
console.log(temp0);
//轉UTF-8 URL encode
var temp2 = encodeURIComponent(temp0);
console.log(temp2);
//   改空格 轉小寫
var temp3 = temp2.replace(/%20/g,"+").toLowerCase();
console.log(temp3);

$('input[name=CheckMacValue0]').val(temp3);







// ItemName=$('input[name=ItemName]').val();
// MerchantTradeDate=changeNow;
// // 訂單編號
// MerchantTradeNo=orderNo20
// TotalAmount=$('input[name=TotalAmount]').val();
// TradeDesc=$('input[name=TradeDesc]').val();













// const ecpay = {
//   hashkey: '5294y06JbISpM5x9' ,
//   hashiv: 'v77hoKGq4kWxNNIS' ,
//   merchantid: '2000132',
// }

// MerchantID=2000132;
// ChoosePayment = 'Credit';


//   ItemName=$('input[name=ItemName]').val();
//   MerchantTradeDate=changeNow;
//   // 訂單編號
//   MerchantTradeNo=$('input[name=MerchantTradeNo]').val();
//   TotalAmount=$('input[name=TotalAmount]').val();
//   TradeDesc=$('input[name=TradeDesc]').val();

//   var checktemp0 = `ChoosePayment=${ChoosePayment}&ItemName=${ItemName}&MerchantID=2000132&MerchantTradeDate=${MerchantTradeDate}&MerchantTradeNo=DX202109301550374d6d&PaymentType=aio&ReturnURL=https://developers.opay.tw/AioMock/MerchantReturnUrl&TotalAmount=${TotalAmount}&TradeDesc=${TradeDesc}`
//   var checktemp1 = `HashKey=${ecpay.hashkey}&${checktemp0}&HashIV=${ecpay.hashiv}`
//   var checktemp2 = encodeURIComponent(checktemp1);
//   var checktemp3 = checktemp2.replace(/%20/g,"+").toLowerCase;
//   const sha = sha256(checktemp3).toUpperCase;
//   $('input[name=CheckMacValue]').val(sha);