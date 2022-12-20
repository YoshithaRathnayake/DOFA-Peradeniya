// Function to load navbar and footer
$(function () {
    $("#footer").load("assets/content/static/footer.html");
});

$(function () {
    $("#navbar").load("assets/content/static/navbar.html");
});


// Back to Top button 
var btn = $('#backToTop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// Nav-Links on-click colour
function home() {
    document.getElementById("home").style.color = "#1eff8f";
    document.getElementById("about").style.color = "white";
    document.getElementById("contact").style.color = "white";
}

function about() {
    document.getElementById("about").style.color = "#1eff8f";
    document.getElementById("home").style.color = "white";
    document.getElementById("contact").style.color = "white";
}

function contact() {
    document.getElementById("contact").style.color = "#1eff8f";
    document.getElementById("home").style.color = "white";
    document.getElementById("about").style.color = "white";
}
