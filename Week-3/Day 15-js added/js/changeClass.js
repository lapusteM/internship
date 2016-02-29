// function changeClass(id) {
//
//   var footers = document.getElementsByClassName("footer-green");
//
//
//   for (var i = 0; i < footers.length; i++) {
//     console.log(footers[i].id);
//     if (footers[i].id == id) {
//       footers[i].className = "col-33 footer-green active";
//     } else {
//       footers[i].className = "col-33 footer-green"
//     }
//   }
// }
//
//
// var firstTab = document.getElementById('firstTab');
// var secondTab = document.getElementById('secondTab');
// var thirdTab = document.getElementById('thirdTab');
//
// firstTab.addEventListener("click", changeClass);
// secondTab.addEventListener("click", changeClass);
// thirdTab.addEventListener("click", changeClass);

var footers = document.getElementsByClassName("footer-green");
for(var i = 0; i < footers.length; i++){
  footers[i].addEventListener("click", changeClass);
  var round = footers[i].querySelector(".round");
  round.addEventListener("click", changeClass);
  var icon = footers[i].querySelector(".fa");
  icon.addEventListener("click", changeClass);
}

function changeClass(event){
  event.stopPropagation();

  var clickedElement = event.target;
  var ancestor = null;

  //we look for the parent element with the class footer-green
  //if the clicked element doesnt have that class it means we have clicked on a child element (class round or class fa)
  if (!clickedElement.classList.contains("footer-green")) {

    //we go up on the DOM until we find the element with the class footer-green
    //we start from the element that was clicked and go up
    while(ancestor == null){
      var findAncestor =  clickedElement.parentNode;

      if(findAncestor.classList.contains("footer-green")){
        ancestor = findAncestor;
      } else {
        clickedElement = findAncestor;
      }
    }

    clickedElement = ancestor;
  }

  for(var i = 0; i < footers.length; i++){
    if (clickedElement.id == footers[i].id) {
      footers[i].className = "col-33 footer-green active";
    } else {
      footers[i].className = "col-33 footer-green";
    }
  }
}
