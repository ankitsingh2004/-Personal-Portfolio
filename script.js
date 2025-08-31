// ===== Mobile Menu =====
const sidemenu = document.getElementById("sidemenu");
document.getElementById("openMenu").addEventListener("click", () => sidemenu.style.right = "0");
document.getElementById("closeMenu").addEventListener("click", () => sidemenu.style.right = "-200px");

// ===== Tabs =====
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contains");

tabLinks.forEach(link => {
  link.addEventListener("click", function () {
    tabLinks.forEach(l => l.classList.remove("active-link"));
    tabContents.forEach(c => c.classList.remove("active-tab"));

    this.classList.add("active-link");
    document.getElementById(this.dataset.tab).classList.add("active-tab");
  });
});

// ===== Typewriter Effect =====
function typeWriterEffect(element, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

const typeText = document.getElementById("typewriter");
typeWriterEffect(typeText, "UI/UX Designer | Web Developer");

// ===== Contact Form =====
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.innerHTML = "Message sent successfully!";
  setTimeout(() => msg.innerHTML = "", 4000);
  form.reset();
});
