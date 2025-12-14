const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* Scroll Animation */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeUp 0.8s ease forwards";
    }
  });
});

cards.forEach(card => observer.observe(card));

/* Fake Contact Submit */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully! 🚀");
});
