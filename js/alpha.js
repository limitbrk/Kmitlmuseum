 $(window).scroll(function() {
    if($(this).scrollTop() > 100)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});// JavaScript Document

