window.addEventListener("load", init);

function init() {
  var Lista = document.getElementsByTagName('img');


  for (var i = 0; i < Lista.length; i++) {
    Lista[i].addEventListener("mouseover", function () {
      this.style.border = "5px solid black";
    });

    Lista[i].addEventListener("mouseout", function () {
      this.style.border = "none";
    });
  }
  
}

