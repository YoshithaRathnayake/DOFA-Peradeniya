// Function to load navbar and footer
$(function () {
    $("#footer").load("../assets/content/static/footer.html");
});

$(function () {
    $("#navbar").load("../assets/content/static/navbar.html");
});


// Back to Top button 
var btn = $('#backToTop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
