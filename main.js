menu=$("nav ul");
toggle=$("nav ul .menu");

toggle.on("click", function(){
    if(menu.hasClass("active")){
        menu.removeClass("active");
    }
    else{
        menu.addClass("active");
    }
});


// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e)=>{
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// });