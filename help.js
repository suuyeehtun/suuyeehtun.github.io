/**
 * this method is used for go to feed me page
 */
$(document).ready(function () {
  $("#ulli").slideDown(5000);
  $("#playBtn").click(function () {
    $("body").fadeOut(2000, function () {
      window.location.href = "cards.html";
    });
  });
});
