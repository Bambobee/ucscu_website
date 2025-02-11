document.addEventListener("DOMContentLoaded", function () {
    // Select all menu links
    const menuLinks = document.querySelectorAll(".menu a");
  
    menuLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        
        const targetId = this.getAttribute("href").substring(1); // Get section ID
        const targetSection = document.getElementById(targetId); // Find target section
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
        }
      });
    });
  });
  