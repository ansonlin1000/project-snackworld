
const articleCard = $(".articleItselfContainer");
const btnHandler = $(".btn");

btnHandler.on('click', ()=>{
    alert("Connected")
    // if(buttonHandler.prop())
    articleCard.prop('style','display:none');
    
})

articleCard.on("click", ()=>{
    alert("ok")
})

