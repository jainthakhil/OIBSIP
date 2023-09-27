const themeBtn = document.getElementById("theme");
$(".theme").on("click", function (event) {
  event.preventDefault();
  $(".header").toggleClass("dark");
  $(".icons").toggleClass("light-icons");
  $("h1, h3, p, .circle").toggleClass("dark-text");
  $(".right-img").toggleClass("blend-head");
  $(".contact").toggleClass("shadow");
  $("footer-img").toggleClass("blend-foot");
});
