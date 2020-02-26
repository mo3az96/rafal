

$(window).on("load", function () {
    $(".loader").fadeOut(1000, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });
    //map
    var adresse = "<img style='width:50px; text-align: left; display:inline-block; margin-right: 10px; vertical-align: sub;' src='img/logo.png'>";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,

        center: new google.maps.LatLng($("#map").attr("lat"), $("#map").attr("long")),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: 'images/pin.png',

    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
});


$(document).ready(function () {
    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#topBtnRef").offset().top
        }, 2000);
    });

    $('.menubtn').click(function () {
        $(this).toggleClass('open');
        $(".lang").toggleClass('open');
        $("nav").fadeToggle("300");
        $(".nav-ul").toggleClass('open');
        if ($(window).width() <= 767) {
            $("body").toggleClass("overflow");
        }
    });


    if ($(window).width() <= 991) {
        $(".services .service").wrap("<div class='item'></div>");
        $(".services").addClass("owl-carousel");
        $(".gallery .gallery-img").wrap("<div class='item'></div>");
        $(".gallery").addClass("owl-carousel");
        $(".clients .client").wrap("<div class='item'></div>");
        $(".clients").addClass("owl-carousel");

        $('.clients').owlCarousel({
            items: 2,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                500: {
                    items: 2,
                },
            }
        });
        $('.gallery').owlCarousel({
            items: 2,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                500: {
                    items: 2,
                },
            }
        });
        $('.services').owlCarousel({
            items: 2,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                500: {
                    items: 2,
                },
            }
        });
    }

    $(' .input').focus(function () {
        // console.log($(this).parent().find(".floating-label"));
        $(this).parent().find(".floating-label").addClass('label-active');
    });

    $(".input").focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().find(".floating-label").removeClass('label-active');
        };
    });


    $('.model-open').click(function () {
        $(".model-fixed").fadeIn(400)
        $(".have-modal").addClass("show-modal");
        $("body").addClass("overflow");
    });
    $('.model-fixed').click(function () {
        $(".model-fixed").fadeOut(500)
        $(".have-modal").removeClass("show-modal");
        $("body").removeClass("overflow");
    });
    $('.have-modal').click(function (e) {
        e.stopPropagation();
    });
});