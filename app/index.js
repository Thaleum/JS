var click = false;


document.body.querySelector(".drop").addEventListener("click", function (){
    click=!click;

    if(click){
    document.body.querySelector(".menu").style.top="60px";


    }else {
        document.body.querySelector(".menu").style.top = "-600px";
    }
})


