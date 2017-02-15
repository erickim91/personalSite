var navbar = $(".navbar");

$(window).scroll(function() {
    if( $(this).scrollTop() > ($("header").height())) {
        navbar.addClass("navbar-scrolled");
    }
    else {
        navbar.removeClass("navbar-scrolled");
    }
});
