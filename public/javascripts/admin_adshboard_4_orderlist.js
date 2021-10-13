
neworderStateNo = 0;
neworderPaymentNo = 0;
neworderSendStateNo = 0;

$orderStateNo=$('#orderStateNo').val();
$orderPaymentNo=$('#orderPaymentNo').val();
$orderSendStateNo=$('#orderSendStateNo').val();


$(orderStateNo).change(function(){ neworderStateNo = $(orderStateNo).val(); selectOrderList()})
$(orderPaymentNo).change(function(){ neworderPaymentNo = $(orderPaymentNo).val();  selectOrderList()})
$(orderSendStateNo).change(function(){ neworderSendStateNo = $(orderSendStateNo).val(); selectOrderList()})


function selectOrderList(){
    $('.admin-productListDetail').show();
    $('.admin-productListDetail').not(`.orderStateNo${neworderStateNo}.orderPaymentNo${neworderPaymentNo}.orderSendStateNo${neworderSendStateNo}`).hide();
}