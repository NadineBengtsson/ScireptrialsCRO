const form = document.querySelector("#info")
const email = document.querySelector("#Mail")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (email.value === " " || password.value ===" ") {
        if (email.value === " "){
            emailHelp.innerText = "Por favor, completar mail";
        }
    else {
        form.submit();
    }}
});

$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 140) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
});

$(window).on("load", function () {
    $("body").append("<script src='script.js'>");
});

window.onscroll = function() {myFunction()};

