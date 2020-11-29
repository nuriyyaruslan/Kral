/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.header-menu nav').toggleClass('transform00');
    }); 
    $('.header-bag-js').click(function(e){
        $('.bag-dropdown').toggleClass('bag-dropdown-block');
        e.stopPropagation();
    })
    $('html').click(function(){
        $('.bag-dropdown').removeClass('bag-dropdown-block');
    })
    $('.bag-dropdown').click(function(e){
        e.stopPropagation();
    })

       /* starts contact map */
       if ($('#map').length > 0) {
        function initMap(getId) {
        if (document.getElementById(getId)) {
            let lat = parseFloat(document.getElementById(getId).getAttribute("lat"));
            let lng = parseFloat(document.getElementById(getId).getAttribute("lng"));
            let markerIcon = $('.map-content .markerIcon').attr('src');
            console.log(markerIcon);
            var location = { lat, lng }
            map = new google.maps.Map(document.getElementById(getId), {
            zoom: 16,
            disableDefaultUI: true,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles:[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            });
            marker = new google.maps.Marker({
            map: map,
            position: location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
            });
            marker.addListener('click', function () {
            $('.contact_details').removeClass('dnonemobile');
            });
            marker.addListener('click', toggleBounce);
        }
        }
        function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
        }
        initMap("map");
        google.maps.event.addDomListener(window, "load", initMap);
    }
    /* ends contact map */
    
    $('.phc-js').click(function(){
        $('.products-menu').addClass('transform00');
    })
    $('.mobile-cat').click(function(){
        $('.products-menu').removeClass('transform00');
    })


    $('.owl-products-single').owlCarousel({
        margin: 8,
        dots: false,
        nav: true,
        lazyLoad: true,
        autoplay: false,
        loop: true,
        startPosition: 0,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        smartSpeed: 800,
        responsiveClass: true,
        autoWidth:true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items:4
            }
        }
    })

    $('.prs-prev-js').click(function(){
        $('.prs-images .owl-prev').click();
    })
    $('.prs-next-js').click(function(){
        $('.prs-images .owl-next').click();
    })

    $('.prs-sprev-js').click(function(){
        $('.similar-products .owl-prev').click();
    })
    $('.prs-snext-js').click(function(){
        $('.similar-products .owl-next').click();
    })

    $(".fancybox").fancybox();

    // $('.prs-img').click(function(){
    //     var prsImgSrc=$(this).find('img').attr('src');
    //     $('.prs-mega-img img').attr('src',prsImgSrc);
    // })

    $('.similar-products-owl').owlCarousel({
        margin: 8,
        dots: false,
        nav: true,
        lazyLoad: true,
        autoplay: false,
        loop: true,
        startPosition: 0,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        smartSpeed: 800,
        responsiveClass: true,
        autoWidth:true,
        autoplay:true
    })


    $(document).on('click', '.qty-plus', function () {
        $(this).prev().val(+$(this).prev().val() + 1);
     });
     $(document).on('click', '.qty-minus', function () {
        if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
     });

     new WOW().init();

     if (window.matchMedia("(max-width: 992px)").matches) {
       $('.services-mob-li').click(function(e){
           e.preventDefault();
       }) 
    } 
    
});