

document.addEventListener("DOMContentLoaded", function() {

      for (var i = 0; i < 806; i++) {
      // create pixel divs
      var element = document.createElement("div");
      // add class pixel to div
      element.classList.add("pixel");
      // locate the pixel container
      var pixelContainer= document.getElementById("pixelContainer");
      pixelContainer.appendChild(element);
      }

  var currentColor="";
  var sidebar= document.getElementById("sidebar");

  // Grab color and reassign current color
  sidebar.addEventListener('click', function(event){

     currentColor = window.getComputedStyle(event.target).backgroundColor;

  // Putting picked color onto pixel
  var pixelContainer1=document.getElementById("pixelContainer")

  pixelContainer1.addEventListener('click', function(event){
  event.target.style.backgroundColor= currentColor;

  })


   });
//   sidebar.addEventListener('click', function(event){
//   currentColor= window.getComputedStyle(event.target).backgroundColor;
//   console.log(currentColor)
// })
});
