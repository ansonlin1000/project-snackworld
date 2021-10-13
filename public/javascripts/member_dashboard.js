// 會員後台選單切換
$("#memberLab_personalInfo").click(function () {
  $("#memberInfo").css("display", "flex");
  $("#memberShoppingCart").css("display", "none");
  $("#memberSubscription").css("display", "none");
  $("#memberOrder").css("display", "none");
  $("#memberCollectProd").css("display", "none");
  $("#memberFeedback").css("display", "none");
  $("#memberLab_personalInfo").css("background-color", "var(--color1");
  $("#memberLab_personalInfo").css("color", "white");
  $("#memberLab_personalInfo").css(
    "transition",
    "background-color 0.2s ease-in"
  );
  $("#memberShoppingCart").css("display", "none");
  $("#memberLab_shoppingCart").css("background-color", "var(--color2");
  $("#memberLab_shoppingCart").css("color", "var(--color1)");
  $("#memberLab_subscription").css("background-color", "var(--color2");
  $("#memberLab_subscription").css("color", "var(--color1)");
  $("#memberLab_order").css("background-color", "var(--color2");
  $("#memberLab_order").css("color", "var(--color1)");
  $("#memberLab_collectProd").css("background-color", "var(--color2");
  $("#memberLab_collectProd").css("color", "var(--color1)");
  $("#memberLab_feedback").css("background-color", "var(--color2");
  $("#memberLab_feedback").css("color", "var(--color1)");
});
$("#memberLab_shoppingCart").click(function () {
  $("#memberInfo").css("display", "none");
  $("#memberShoppingCart").css("display", "flex");
  $("#memberSubscription").css("display", "none");
  $("#memberOrder").css("display", "none");
  $("#memberCollectProd").css("display", "none");
  $("#memberFeedback").css("display", "none");
  $("#memberLab_personalInfo").css("background-color", "var(--color2");
  $("#memberLab_personalInfo").css("color", "var(--color1)");
  $("#memberLab_shoppingCart").css("background-color", "var(--color1");
  $("#memberLab_shoppingCart").css("color", "white");
  $("#memberLab_shoppingCart").css(
    "transition",
    "background-color 0.2s ease-in"
  );
  $("#memberLab_subscription").css("background-color", "var(--color2");
  $("#memberLab_subscription").css("color", "var(--color1)");
  $("#memberLab_order").css("background-color", "var(--color2");
  $("#memberLab_order").css("color", "var(--color1)");
  $("#memberLab_collectProd").css("background-color", "var(--color2");
  $("#memberLab_collectProd").css("color", "var(--color1)");
  $("#memberLab_feedback").css("background-color", "var(--color2");
  $("#memberLab_feedback").css("color", "var(--color1)");
});
$("#memberLab_subscription").click(function () {
  $("#memberInfo").css("display", "none");
  $("#memberShoppingCart").css("display", "none");
  $("#memberSubscription").css("display", "flex");
  $("#memberOrder").css("display", "none");
  $("#memberCollectProd").css("display", "none");
  $("#memberFeedback").css("display", "none");
  $("#memberLab_personalInfo").css("background-color", "var(--color2");
  $("#memberLab_personalInfo").css("color", "var(--color1)");
  $("#memberLab_subscription").css("background-color", "var(--color1");
  $("#memberLab_subscription").css("color", "white");
  $("#memberLab_subscription").css(
    "transition",
    "background-color 0.2s ease-in"
  );
  $("#memberLab_shoppingCart").css("background-color", "var(--color2");
  $("#memberLab_shoppingCart").css("color", "var(--color1)");
  $("#memberLab_order").css("background-color", "var(--color2");
  $("#memberLab_order").css("color", "var(--color1)");
  $("#memberLab_collectProd").css("background-color", "var(--color2");
  $("#memberLab_collectProd").css("color", "var(--color1)");
  $("#memberLab_feedback").css("background-color", "var(--color2");
  $("#memberLab_feedback").css("color", "var(--color1)");
});
$("#memberLab_order").click(function () {
  $("#memberInfo").css("display", "none");
  $("#memberShoppingCart").css("display", "none");
  $("#memberSubscription").css("display", "none");
  $("#memberOrder").css("display", "block");
  $("#memberCollectProd").css("display", "none");
  $("#memberFeedback").css("display", "none");
  $("#memberLab_personalInfo").css("background-color", "var(--color2");
  $("#memberLab_personalInfo").css("color", "var(--color1)");
  $("#memberLab_order").css("background-color", "var(--color1");
  $("#memberLab_order").css("color", "white");
  $("#memberLab_order").css("transition", "background-color 0.2s ease-in");
  $("#memberLab_subscription").css("background-color", "var(--color2");
  $("#memberLab_subscription").css("color", "var(--color1)");
  $("#memberLab_shoppingCart").css("background-color", "var(--color2");
  $("#memberLab_shoppingCart").css("color", "var(--color1)");
  $("#memberLab_collectProd").css("background-color", "var(--color2");
  $("#memberLab_collectProd").css("color", "var(--color1)");
  $("#memberLab_feedback").css("background-color", "var(--color2");
  $("#memberLab_feedback").css("color", "var(--color1)");
});
$("#memberLab_collectProd").click(function () {
  $("#memberInfo").css("display", "none");
  $("#memberShoppingCart").css("display", "none");
  $("#memberSubscription").css("display", "none");
  $("#memberOrder").css("display", "none");
  $("#memberCollectProd").css("display", "flex");
  $("#memberFeedback").css("display", "none");
  $("#memberLab_personalInfo").css("background-color", "var(--color2");
  $("#memberLab_personalInfo").css("color", "var(--color1)");
  $("#memberLab_collectProd").css("background-color", "var(--color1");
  $("#memberLab_collectProd").css("color", "white");
  $("#memberLab_collectProd").css(
    "transition",
    "background-color 0.2s ease-in"
  );
  $("#memberLab_subscription").css("background-color", "var(--color2");
  $("#memberLab_subscription").css("color", "var(--color1)");
  $("#memberLab_order").css("background-color", "var(--color2");
  $("#memberLab_order").css("color", "var(--color1)");
  $("#memberLab_shoppingCart").css("background-color", "var(--color2");
  $("#memberLab_shoppingCart").css("color", "var(--color1)");
  $("#memberLab_feedback").css("background-color", "var(--color2");
  $("#memberLab_feedback").css("color", "var(--color1)");
});
$("#memberLab_feedback").click(function () {
  $("#memberInfo").css("display", "none");
  $("#memberShoppingCart").css("display", "none");
  $("#memberSubscription").css("display", "none");
  $("#memberOrder").css("display", "none");
  $("#memberCollectProd").css("display", "none");
  $("#memberFeedback").css("display", "flex");
  $("#memberLab_personalInfo").css("background-color", "var(--color2");
  $("#memberLab_personalInfo").css("color", "var(--color1)");
  $("#memberLab_feedback").css("background-color", "var(--color1");
  $("#memberLab_feedback").css("color", "white");
  $("#memberLab_feedback").css("transition", "background-color 0.2s ease-in");
  $("#memberLab_subscription").css("background-color", "var(--color2");
  $("#memberLab_subscription").css("color", "var(--color1)");
  $("#memberLab_order").css("background-color", "var(--color2");
  $("#memberLab_order").css("color", "var(--color1)");
  $("#memberLab_shoppingCart").css("background-color", "var(--color2");
  $("#memberLab_shoppingCart").css("color", "var(--color1)");
  $("#memberLab_collectProd").css("background-color", "var(--color2");
  $("#memberLab_collectProd").css("color", "var(--color1)");
});

// 訂閱制方案切換
$("#aStealPlan").click(function () {
  $("#aStealPlan").css("background-color", "var(--color4)");
  $("#aStealPlan").css("width", "400px");
  $("#aStealPlan").css("height", "550px");
  $("#aStealPlan").css("color", "white");
  $("#aStealPlan").css("transition", "background-color 0.2s ease-in");
  $("#enjoyPlan").css("background-color", "var(--color2)");
  $("#enjoyPlan").css("width", "350px");
  $("#enjoyPlan").css("height", "500px");
  $("#enjoyPlan").css("color", "var(--color1)");
  $("#partyPlan").css("background-color", "var(--color2)");
  $("#partyPlan").css("width", "350px");
  $("#partyPlan").css("height", "500px");
  $("#partyPlan").css("color", "var(--color1)");
  $("#aStealPlanImg").prop("src", "/images/subplan_astealplan_box_white.svg");
  $("#enjoyPlanImg").prop("src", "/images/subplan_enjoyplan_box_blue.svg");
  $("#partyPlanImg").prop("src", "/images/subplan_partyplan_box_blue.svg");
});

$("#enjoyPlan").click(function () {
  $("#aStealPlan").css("background-color", "var(--color2)");
  $("#aStealPlan").css("width", "350px");
  $("#aStealPlan").css("height", "500px");
  $("#aStealPlan").css("color", "var(--color1)");
  $("#enjoyPlan").css("background-color", "var(--color4)");
  $("#enjoyPlan").css("width", "400px");
  $("#enjoyPlan").css("height", "550px");
  $("#enjoyPlan").css("color", "white");
  $("#enjoyPlan").css("transition", "background-color 0.2s ease-in");
  $("#partyPlan").css("background-color", "var(--color2)");
  $("#partyPlan").css("width", "350px");
  $("#partyPlan").css("height", "500px");
  $("#partyPlan").css("color", "var(--color1)");
  $("#aStealPlanImg").prop("src", "/images/subplan_astealplan_box_blue.svg");
  $("#enjoyPlanImg").prop("src", "/images/subplan_enjoyplan_box_white.svg");
  $("#partyPlanImg").prop("src", "/images/subplan_partyplan_box_blue.svg");
});

$("#partyPlan").click(function () {
  $("#aStealPlan").css("background-color", "var(--color2)");
  $("#aStealPlan").css("width", "350px");
  $("#aStealPlan").css("height", "500px");
  $("#aStealPlan").css("color", "var(--color1)");
  $("#enjoyPlan").css("background-color", "var(--color2)");
  $("#enjoyPlan").css("width", "350px");
  $("#enjoyPlan").css("height", "500px");
  $("#enjoyPlan").css("color", "var(--color1)");
  $("#partyPlan").css("background-color", "var(--color4)");
  $("#partyPlan").css("width", "400px");
  $("#partyPlan").css("height", "550px");
  $("#partyPlan").css("color", "white");
  $("#partyPlan").css("transition", "background-color 0.2s ease-in");
  $("#aStealPlanImg").prop("src", "/images/subplan_astealplan_box_blue.svg");
  $("#enjoyPlanImg").prop("src", "/images/subplan_enjoyplan_box_blue.svg");
  $("#partyPlanImg").prop("src", "/images/subplan_partyplan_box_white.svg");
});
