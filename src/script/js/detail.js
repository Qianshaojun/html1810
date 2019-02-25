(function() {
    var $sid = location.search.substring(1).split('=')[1];

    $.ajax({
        url: 'http://127.0.0.1:8080/html-1810/vivomall/php/detail.php',
        data: {
            sid: $sid
        },
        dataType: 'json'
    }).done(function(data) {
        $.each($(data), function(index, value) {
            $('.smallpic').attr('src', value.url);
            $('h1').html(value.title);
            $('.summary-price').html(value.price);
            $('.colorbox').html(value.color);
            var arrpic = value.urls.split(',');
            var strhtml = '';
            $.each(arrpic, function(index, value) {
                strhtml += `<li><img src=${value}></li>`
            });
            $('.list ul').html(strhtml);
        })
    })
})()