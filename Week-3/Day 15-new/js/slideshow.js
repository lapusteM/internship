//the changeElem function gets executed every time a click event happens
function changeElem(direction) {

  //slideElems variable will hold all HTML elements that have the slide-elem class
  //slideElems is an array
  var slideElems = document.getElementsByClassName("slide-elem");

  //len will hold the length of the slideElems array
  var len = slideElems.length;
  for (var i = 0; i < len; i++) {

    var item = slideElems[i];

    //if the current element doesn't have the opacity class - meaning it is displayed
    //we are looking for the element which is currently displayed
    if (!item.classList.contains("opacity")) {
      item.className = "slide-elem opacity"; //the visible element will receive opacity 0

      if (direction == 'prev') {
        //verifies if the first element was visible then the last should become visible
        if (i == 0) {
          slideElems[len - 1].className = "slide-elem";
          return; //stops execution
        }
        slideElems[i - 1].className = "slide-elem"; //the previous element will become visible
        return;
      }

      if (direction == 'next') {
        //verifies if the visible element is the last one - then the first one should become visible
        if (i == len - 1) {
          slideElems[0].className = "slide-elem";
          return; //stops execution
        }
        slideElems[i + 1].className = "slide-elem"; //the next element becomes visible
        return;
      }
    }
  }
}
