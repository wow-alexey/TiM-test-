;(function () {
    var link = $(".buy-btn");

    link
        .mouseover(function () {
            $(this).parent(".buy-btn-wrapper").siblings(".title").addClass("title-hover");
        })
        .mouseout(function () {
            $(this).parent(".buy-btn-wrapper").siblings(".title").removeClass("title-hover");
        })
})(jQuery);