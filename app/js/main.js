$('.corusel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>'
});

$("#comment-form").validate({
    rules:{
        email:{
            required: true,
            email: true
        },
        name:{
            required: true,
            minlength: 3
        }
    }
});

$(function(){
    $('#menu').slicknav({
        label: '',
        prependTo: '.container',
    });
});