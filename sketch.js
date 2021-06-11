function showHidden() {
  var card = document.getElementById("cardstock");

  document.getElementById("preamble").style.visibility = "visible";

  $(document).ready(function () {
    var newHeight = 300;
    $(".card").height(newHeight);
  });
}

// function hideHidden() {
//   document.getElementById("preamble").style.visibility = "hidden";
// }
