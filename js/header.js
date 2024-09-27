$(function () {
    var current = location.pathname;
    $('li a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href').indexOf(current) !== -1) {
            $this.parent().addClass('active');
        }
    })
})



$(document).ready(function () {
    $(".header__menu-icon").click(function () {
        $(".header__dropdown-menu").toggleClass("open")
    })
})


$(document).ready(function () {
    $(".header__logo").click(function () {
        window.location = ('../pages/homepage.html')
    })
})