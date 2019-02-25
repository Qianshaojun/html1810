; //轮播图
(function() {
    var $box = $('#banner');
    var $pics = $('.list li');
    var $btns = $('ol li');
    var $num = 0;
    var $autoplaytimer = null;
    $btns.hover(function() {
        $num = $(this).index();
        $btns.eq($num).addClass('active').siblings('li').removeClass('active');
    }, function() {})
    $btns.on('click', function() {
        $num = $(this).index();
        picChange();
    })
    $box.hover(function() {
        clearInterval($autoplaytimer);
    }, function() {
        $autoplaytimer = setInterval(function() {
            $num++;
            if ($num > $btns.length - 1) {
                $num = 0;
            }
            picChange();
        }, 4000)
    })

    function picChange() {
        $btns.eq($num).addClass('active').siblings('li').removeClass('active');
        $pics.eq($num).animate({
            opacity: 1
        }).siblings('li').animate({
            opacity: 0
        })
    }
})();
//侧边栏
(function() {
    var $backtop = $('.backtop');
    var $shopcart = $('.shopcart');
    $(window).on('scroll', function() {
        var $top = $(window).scrollTop();
        if ($top >= 157) {
            $backtop.show()
        } else {
            $backtop.hide()
        }
    })
    $backtop.on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    })
    $shopcart.on('click', function() {
        $(window).attr('location', 'cart.html');
    })
})()
//拼接图片
! function() {
    $.ajax({
        url: 'http://127.0.0.1:8080/html-1810/vivomall/php/vivodata.php',
        dataType: 'json',
    }).done(function(data) {
        var $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += ` 
            <li>
               <a href="details.html?sid=${value.sid}" target="_blank"><img src="${value.url}"></a>
               <div class="prodinfo">
                   <p class="name">${value.title}</p>
                   <p class="give">${value.detail}</p>
               </div>
               <div class="color">
                   <p class="name"> U1 全面屏 3GB+32GB-极光色</p>
                   <ul class="color-list">
                       <li></li>
                   </ul>
               </div>
               <p class="price">${value.price}</p>
           </li>
       `;
        })
        $('.peijian').html($strhtml);
    });
}()