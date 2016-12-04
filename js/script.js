function scrollToAnchor(aid){
    var aTag = $("div[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'normal');
}

/* Toggle Navigation */
$(document).ready(function(){
    var menu = "closed";
    $("#menu-button").click(function() {
        if (menu == "closed") {
            document.getElementById("mySidenav").style.left = "0px";
            document.getElementById("main").style.marginLeft = "270px";
            document.getElementById("menu-button").style.marginLeft = "294px";
            $(".parallax").css("background-position", "135px center");
            menu = "open";
        } else {
            document.getElementById("mySidenav").style.left = "-270px";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("menu-button").style.marginLeft = "24px";
            $(".parallax").css("background-position", "center");
            menu = "closed";
        };
    });

    $("#about-me-button").click(function() {
        scrollToAnchor("about-me-box");
    });

    $("#contact-me-button").click(function(){
        scrollToAnchor("contact-me-box");
    });

    $("#my-work-button").click(function() {
        scrollToAnchor("portfolio-box");
    });
});
/* end of navigation toggle */
