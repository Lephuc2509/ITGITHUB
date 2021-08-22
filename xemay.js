window.onscroll= function(){
    console.info(document.documentElement.scrollTop);
    var gototop = document.getElementById("MyHome");
    if(document.documentElement.scrollTop > 100||document.body.scrollTop > 100){
       gototop.style.display="block";
    }else{
        gototop.style.display="none";
    }
}
function goToTop(){
    var timer = setInterval(function(){
        document.documentElement.scrollTop--;
        if(document.documentElement.scrollTop<=0)
              clearInterval(timer)
    },1);
}
function init(){
    setInterval(function() {
        var c= document.getElementById("clock");
        var d= new Date();
        c.innerText=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    } ,1000);
    setInterval(function() {
        var a=document.getElementById("today");
        var b= new Date();
        a.innerText=`${b.toDateString()}`
    });
}
$(window).scrollTop(function(){
    
})
