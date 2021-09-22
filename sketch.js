function showHidden() {
  var card = document.getElementById("cardstock");

  document.getElementById("preamble").style.visibility = "visible";

  $(document).ready(function () {
    var newHeight = 300;
    $(".card").height(newHeight);
  });
}

var animatingSidebar = document.querySelector(".sidebar");
// Entries array shows all the targeted elements and a few other options and information too;

$(document).ready(() => {
  const scrollObserve = new IntersectionObserver((entries) => {
    entries.forEach((element) => {
      // This is triggered when the specified element comes into the view of the screen.
      if (element.isIntersecting) {
        animatingSidebar.classList.add("width-height-outw");
      }
    });
  });
});

scrollObserve.observe(document.querySelector(".paragraphCont"));
// function hideHidden() {
//   document.getElementById("preamble").style.visibility = "hidden";
// }
