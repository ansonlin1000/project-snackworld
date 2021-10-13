// 訂閱制方案切換
$('#aStealPlan').click( function(){
    $('#aStealPlan').css('background-color','var(--color4)');
    $('#aStealPlan').css('width','300px');
    $('#aStealPlan').css('height','510px');
    $('#aStealPlan').css('color','white');
    $('#aStealPlan').css('transition' , 'background-color 0.2s ease-in');
    $('#enjoyPlan').css('background-color','var(--color2)');
    $('#enjoyPlan').css('width','300px');
    $('#enjoyPlan').css('height','470px');
    $('#enjoyPlan').css('color','var(--color1)');
    $('#partyPlan').css('background-color','var(--color2)');
    $('#partyPlan').css('width','300px');
    $('#partyPlan').css('height','470px');
    $('#partyPlan').css('color','var(--color1)');
    $('#aStealPlanImg').prop('src','/images/subplan_astealplan_box_white.svg')
    $('#enjoyPlanImg').prop('src','/images/subplan_enjoyplan_box_blue.svg')
    $('#partyPlanImg').prop('src','/images/subplan_partyplan_box_blue.svg')
} );

$('#enjoyPlan').click( function(){
    $('#aStealPlan').css('background-color','var(--color2)');
    $('#aStealPlan').css('width','300px');
    $('#aStealPlan').css('height','470px');
    $('#aStealPlan').css('color','var(--color1)');
    $('#enjoyPlan').css('background-color','var(--color4)');
    $('#enjoyPlan').css('width','300px');
    $('#enjoyPlan').css('height','510px');
    $('#enjoyPlan').css('color','white');
    $('#enjoyPlan').css('transition' , 'background-color 0.2s ease-in');
    $('#partyPlan').css('background-color','var(--color2)');
    $('#partyPlan').css('width','300px');
    $('#partyPlan').css('height','470px');
    $('#partyPlan').css('color','var(--color1)');
    $('#aStealPlanImg').prop('src','/images/subplan_astealplan_box_blue.svg')
    $('#enjoyPlanImg').prop('src','/images/subplan_enjoyplan_box_white.svg')
    $('#partyPlanImg').prop('src','/images/subplan_partyplan_box_blue.svg')
} );

$('#partyPlan').click( function(){
    $('#aStealPlan').css('background-color','var(--color2)');
    $('#aStealPlan').css('width','300px');
    $('#aStealPlan').css('height','470px');
    $('#aStealPlan').css('color','var(--color1)');
    $('#enjoyPlan').css('background-color','var(--color2)');
    $('#enjoyPlan').css('width','300px');
    $('#enjoyPlan').css('height','470px');
    $('#enjoyPlan').css('color','var(--color1)');
    $('#partyPlan').css('background-color','var(--color4)');
    $('#partyPlan').css('width','300px');
    $('#partyPlan').css('height','510px');
    $('#partyPlan').css('color','white');
    $('#partyPlan').css('transition' , 'background-color 0.2s ease-in');
    $('#aStealPlanImg').prop('src','/images/subplan_astealplan_box_blue.svg')
    $('#enjoyPlanImg').prop('src','/images/subplan_enjoyplan_box_blue.svg')
    $('#partyPlanImg').prop('src','/images/subplan_partyplan_box_white.svg')
} );