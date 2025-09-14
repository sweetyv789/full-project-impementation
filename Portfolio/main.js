// Simple JS for navbar toggle (for mobile view)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const burger = document.createElement("div");
  burger.classList.add("burger");
  burger.innerHTML = "&#9776;";
  document.querySelector(".navbar").appendChild(burger);

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
// Navbar toggle (already added above)

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        status.textContent = "✅ Thank you! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Please fill out all fields.";
        status.style.color = "red";
      }
    });
  }
});
