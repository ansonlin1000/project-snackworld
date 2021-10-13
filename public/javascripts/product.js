// 商品篩選功能
var tasteTemp = 0 ;
var countryTemp = 0 ;
var typeTemp = 0 ;
  
$('#prodTaste0').click(function(){ tasteTemp = 0 ; selectProd(); })
$('#prodTaste1').click(function(){ tasteTemp = 1 ; selectProd(); })
$('#prodTaste2').click(function(){ tasteTemp = 2 ; selectProd(); })
$('#prodTaste3').click(function(){ tasteTemp = 3 ; selectProd(); })
$('#prodCountry0').click(function(){ countryTemp = 0 ; selectProd(); })
$('#prodCountry1').click(function(){ countryTemp = 1 ; selectProd(); })
$('#prodCountry2').click(function(){ countryTemp = 2 ; selectProd(); })
$('#prodCountry3').click(function(){ countryTemp = 3 ; selectProd(); })
$('#prodCountry4').click(function(){ countryTemp = 4 ; selectProd(); })
$('#prodCountry5').click(function(){ countryTemp = 5 ; selectProd(); })
$('#prodCountry6').click(function(){ countryTemp = 6 ; selectProd(); })
$('#prodCountry7').click(function(){ countryTemp = 7 ; selectProd(); })
$('#prodCountry8').click(function(){ countryTemp = 8 ; selectProd(); })
$('#prodType0').click(function(){ typeTemp = 0 ; selectProd(); })
$('#prodType1').click(function(){ typeTemp = 1 ; selectProd(); })
$('#prodType2').click(function(){ typeTemp = 2 ; selectProd(); })
$('#prodType3').click(function(){ typeTemp = 3 ; selectProd(); })
$('#prodType4').click(function(){ typeTemp = 4 ; selectProd(); })
$('#prodType5').click(function(){ typeTemp = 5 ; selectProd(); })

function selectProd(){
    $('.prodCard').show();
    $('.prodCard').not(`.taste${tasteTemp}.prodCountry${countryTemp}.prodType${typeTemp}`).hide();
}
