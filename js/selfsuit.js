
//根据浏览器宽高动态改变div的宽高，两种方法都可以
$(function () {
    $(window).resize(function () {
        var cliWidth = document.body.clientWidth; //浏览器宽
        var cliHeight = document.body.clientHeight;//浏览器高
        console.log('宽'+cliWidth+',高'+cliHeight)
        // $('#main').width(cliWidth);
        var cheight=$(#main).height
        $("#main").height(cliHeight-100);
        // $('#main').css('width',cliWidth);
        // $("#main").css('height',cliHeight);
        
    })
});