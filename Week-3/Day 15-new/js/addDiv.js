var addButton = document.getElementById("addDiv"); //targets the button which gets clicked

//addEventListener is a function which adds a listener which listens for the click event
//everytime the button gets click the following function gets executed
//it's an anonymus function (it has no name) declared below
addButton.addEventListener("click", function(){

  var text; //declaring the variable but without value
  var height = 500; //this variable will store the height of the parent div (class="first") which will grow dinamically

  //getElementsByClassName will return an array containing all the html elements which have the box-wrapper class
  var boxWrapper = document.getElementsByClassName("box-wrapper"); //getting the wrapper div on wich we want to append the newly created element

  var newDiv = document.createElement("div"); //parent div which will hold all the child elements
  newDiv.className = "col-33 feature-right";

  var dateSpan = document.createElement("span");
  text = document.createTextNode("8/10/2016");
  dateSpan.appendChild(text); //puts the value of text variable in the span element

  var dateDiv = document.createElement("div");
  dateDiv.className = "div-small";
  dateDiv.appendChild(dateSpan); //this div will now contain the span created above

  newDiv.appendChild(dateDiv);

  var newH4 = document.createElement("h4");
  text =  document.createTextNode("project:internship");
  newH4.appendChild(text);

  newDiv.appendChild(newH4);

  newDiv.appendChild(document.createElement("hr"));

  var newP = document.createElement("p");
  text =  document.createTextNode("I will rock this internship. I will rock this internship. I will rock this internship. ");
  newP.appendChild(text);

  newDiv.appendChild(newP);

  //height = height + 258;
  document.getElementsByClassName('first')[0].style.height = "758px";

  //boxWrapper will be an array
  //we target the first element and add to it the div
  boxWrapper[0].appendChild(newDiv);

});
