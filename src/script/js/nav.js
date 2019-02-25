(function() {
    var $nav = $('.nav');
    var $blackbac = $('.blackbac');
    var $custom = $('.custom-box');
    var $hidden = $('.hidden');
    $nav.hover(function() {
        $blackbac.stop(true).animate({
            height: 190
        }, 400, 'swing')
    }, function() {
        $blackbac.stop(true).animate({
            height: 0
        }, 500, 'swing')
    });
    $custom.hover(function() {
            $hidden.show();
        }, function() {
            $hidden.hide();
        }

    )
})()