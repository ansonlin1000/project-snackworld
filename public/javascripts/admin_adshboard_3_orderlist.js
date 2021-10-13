
neworderStateNo = 0;
neworderPaymentNo = 0;
neworderSendStateNo = 0;

$orderStateNo=$('#orderStateNo').val();
$orderPaymentNo=$('#orderPaymentNo').val();
$orderSendStateNo=$('#orderSendStateNo').val();


$(orderStateNo).change(function(){ neworderStateNo = $(orderStateNo).val(); console.log(neworderStateNo); selectOrderList()})
$(orderPaymentNo).change(function(){ neworderPaymentNo = $(orderPaymentNo).val(); console.log(neworderPaymentNo); selectOrderList()})
$(orderSendStateNo).change(function(){ neworderSendStateNo = $(orderSendStateNo).val(); console.log(neworderSendStateNo); selectOrderList()})


function selectOrderList(){
    $('.admin-productListDetail').show();
    $('.admin-productListDetail').not(`.orderStateNo${neworderStateNo}.orderPaymentNo${neworderPaymentNo}.orderSendStateNo${neworderSendStateNo}`).hide();
    // $('.admin-productListDetail').not(`.taste${tasteTemp}.prodCountry${countryTemp}.prodType${typeTemp}`).hide();
}