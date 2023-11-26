document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("myHeader");
    var prevScrollPos = window.pageYOffset;
  
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
  
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        header.style.transform = "translateY(0)";
      } else {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
      }
  
      prevScrollPos = currentScrollPos;
    };
  });
  