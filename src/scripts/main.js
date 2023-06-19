
window.onload = function(){
    let menu = document.querySelector("nav .menu");
    let icon_menu = document.querySelector(".icon_menu");
    let icon_close = document.querySelector(".icon_close");

    icon_menu.addEventListener("click",() => {
        menu.style.width = "256px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; 
    });
    icon_close.addEventListener("click",() => {
        menu.style.width = "0";
        document.body.style.backgroundColor = "#FFFDFA"; 
    });
    
}


window.addEventListener("load",() => {

    let html = document.querySelector("html");
    let viewHeight = window.innerHeight;
    let mainContainer = document.querySelector(".mainContainer");
    let bodyHeight = document.body.clientHeight;

    if (bodyHeight < viewHeight)
    {
        html.style.height = "100vh";
        html.classList.add("d-flex","justify-content-center","align-items-center");
    }
});