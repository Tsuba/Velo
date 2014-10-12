(function($){

    var box = $('.box');

    var fadeInUp = [{
        elements : box,
        properties: {
            translateY : [0, 500]
        },
        options: {
            duration : 800,
            display : 'block',
            easing : [100, 8]
        }
    }];

    $.Velocity.RunSequence(fadeInUp);
    box.velocity('reverse', {delay : 3000});


})(jQuery);
