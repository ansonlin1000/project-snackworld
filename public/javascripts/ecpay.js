// var sha256 = require('sha256');

//產生日期
var now = new Date();
var changeNow = `${now.getFullYear()}/${("0" + (now.getMonth() + 1)).slice(-2)}/${("0" + (now.getDate())).slice(-2)} ${now.getHours()}:${now.getMinutes()}:${("0" + (now.getSeconds() + 1)).slice(-2)}`
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



var MerchantID='2000132'  ;
var MerchantTradeNo=orderNo20 ;
MerchantTradeDate=changeNow;
PaymentType='aio';
TotalAmount=$('input[name=TotalAmount]').val();
TradeDesc=$('input[name=TradeDesc]').val();
ItemName=$('input[name=ItemName]').val();
ReturnURL='https://developers.ecpay.tw/AioMock/MerchantReturnUrl'
ChoosePayment='Credit';
// CheckMacValue=temp3;
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

$('input[name=CheckMacValue]').val(temp3);







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