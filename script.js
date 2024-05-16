window.addEventListener("DOMContentLoaded", function() {
    const appearingDiv = document.getElementById("appear-on-scroll");
    const triggerOffset = 1;
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const divTop = appearingDiv.getBoundingClientRect().top;
  
      if (scrollPosition > divTop - triggerOffset) {
        appearingDiv.style.opacity = 1;
      } else {
        appearingDiv.style.opacity = 0;
      }
    });
  });
  
  