/**
 * Created by Administrator on 2017/2/13 0013.
 */
//设置html字体大小
(function () {
    var html=document.documentElement;
    var htmlwidth=html.getBoundingClientRect().width;
    html.style.fontSize=htmlwidth/15+"px";
})();
$(function(){
    $(".side_menu").find(".item").on("click",function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    $("#close_menu").on("click",function(){
        $(".side_menu").animate({left:"-100%"},500);
    });
    $("#show_menu").on("click",function(){
        $(".side_menu").animate({left:"0"},500);
    })
})