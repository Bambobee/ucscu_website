
// Show or hide button based on scroll position
window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
};

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}



// Initialize EmailJS
(function () {
    emailjs.init("S-koLqVckenKsPo-C"); // Replace with your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form values
    const templateParams = {
        name: document.getElementById("name").value,
        sacco_name: document.getElementById("saccoName").value,
        department: document.getElementById("department").value,
        sacco_email: document.getElementById("saccoEmail").value,
        mobile_number: document.getElementById("mobileNumber").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_k5oxp0c", "template_7oouijp", templateParams)
        .then(function (response) {
            alert("Email sent successfully!");
            document.getElementById("contactForm").reset(); // Clear form after success
        })
        .catch(function (error) {
            alert("Error sending email. Please try again.");
            console.error("EmailJS Error:", error);
        });
});


//JS for menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const menuIcon = menuToggle.querySelector("i");
    const menuLinks = document.querySelectorAll(".menu a"); // Select all menu links

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from reaching document
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");

        // Change icon between ☰ (menu) and ✖ (close)
        if (menu.classList.contains("active")) {
            menuIcon.classList.replace("bx-menu", "bx-x");
        } else {
            menuIcon.classList.replace("bx-x", "bx-menu");
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });

    function closeMenu() {
        menu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
});

// autoscrolling to different section
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
  