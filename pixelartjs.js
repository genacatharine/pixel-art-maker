// function createPixel(text){
//

// let pixel=document.createElement('pixel')
// pixel.innerHTML = text;
// div.appendChild(pixel);
// }
//
//

// let button= document.getElementById('red-button');
// button.addEventListener("click", function() {
//   console.log("you click the button!!", button)
//   createDiv("bill's excellent")
//
//   })
// })

// var container=document.createElement("div");
// container.setAttribute("class", "container");
//
// var colorSelector= document.createElement("div");
// colorSelector.setAttribute("class", "colorSelector");

document.addEventListener("DOMContentLoaded", function () {
  function addDiv() {
    var container = document.getElementById("container");

    for (var i = 0; i < 1000; i++) {
      var id = `pixel-${i}`;
      var pixel= document.createElement("div");
      pixel.setAttribute("id", id);
      pixel.classList.add("pixelClass")
      container.appendChild(pixel);
    }
  }

  addDiv();
});

// pixel.style.float="left";
// pixel.style.border="1px solid black";
// pixel.style.width="15px";
// pixel.style.height="15px";
// }
// })


//   toAdd.appendChild(newDiv);
// }
// document.appendChild(toAdd);
// }

//   img.addEventListener('click' imgLog);
// });

// body
// div with colors
// div with pixels
