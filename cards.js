/**
 * this method is used for go to game page
 */
$(document).ready(function () {
  $(".card").click(function () {
    $("body").fadeOut(1000, function () {
      window.location.href = "game.html";
    });
  });
});

/**
 * this method is used for add the card to localStorage
 */
function addCard(obj) {
  let id = obj.id;
  localStorage.setItem("card", id);
}
