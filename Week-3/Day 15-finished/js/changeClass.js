function changeClass(id){

   var footers = document.getElementsByClassName("footer-green");


   for(var i = 0; i < footers.length; i++){
     console.log(footers[i].id);
     if(footers[i].id == id){
       footers[i].className = "col-33 footer-green active";
     } else {
       footers[i].className = "col-33 footer-green"
     }
   }
}
