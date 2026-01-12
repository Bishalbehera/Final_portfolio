let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("heaader nav a");

// Toggle menu when clicking menu icon
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Function to remove active class from all nav links
function removeActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// Function to add active class to the correct nav link
function highlightActiveSection() {
  let scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust for better accuracy
  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  removeActiveClass();

  if (currentSection) {
    let activeLink = document.querySelector(
      `heaader nav a[href="#${currentSection}"]`
    );
    if (activeLink) {
      console.log(activeLink);
      activeLink.classList.add("active");
    }
  }
}

// Event listener for scroll
window.addEventListener("scroll", highlightActiveSection);

// Initial call to highlight the active section when the page loads
document.addEventListener("DOMContentLoaded", highlightActiveSection);

// emailjs.init("0p9tpQdy8w4wavvwQ");
// document.getElementById("ContactForm").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const title = document.getElementById("title").value;
//   const message = document.getElementById("msg").value;
//   const phone = document.getElementById("phone").value;

//   // Send the email
//   emailjs
//     .send("service_0ujky8t", "template_bpdxiwr", {
//       name,
//       email,
//       msg: message,
//       title,
//       phone,
//     })
//     .then((response) => {
//       console.log("Success!", response);
//       alert("Your message has been sent successfully!");
//     })
//     .catch((error) => {
//       console.log("Failed...", error);
//       alert("Sorry, something went wrong.");
//     });
// });



document.getElementById("ContactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload bandh kariba

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("title").value;
    let message = document.getElementById("msg").value;

    // Tumara WhatsApp number (India example)
    let whatsappNumber = "9348354438"; // ← eta change kara

    let whatsappMessage =
        `Hello, I got a new contact message:%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Subject: ${subject}%0A` +
        `Message: ${message}`;

    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});

