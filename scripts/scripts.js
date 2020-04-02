$(document).ready(function () {
    new WOW().init();


    /*loading*/
    $("#loading").fadeOut(5000, function () {
        $("body").css("overflow-y", 'auto');
        $(this).remove();
    });



    /*scroll top*/
    var _scrollTop  = $("#scrollToTop");

    $(window).on('scroll', function () {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 500) {
            _scrollTop.show(300);
        } else {
            _scrollTop.hide(300);
        }
    })
    
    // scrollTo Top
    _scrollTop.on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1100);
    })
    



    //my modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      });


})