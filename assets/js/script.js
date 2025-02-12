
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
