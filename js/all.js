$(document).ready(function() {
    // 漢堡選單
    $('.hamber-menu').click(function(e) {
        e.preventDefault();
        $('.menu').toggleClass('active');
    })
})