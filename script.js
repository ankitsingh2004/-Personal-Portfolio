const sidemenu = document.getElementById("sidemenu");

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px";
}

// Tab Functionality
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contains");

tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabLinks.forEach((t) => t.classList.remove("active-link"));
        tabContents.forEach((c) => c.classList.remove("active-tab"));

        tab.classList.add("active-link");
        document.getElementById(tab.dataset.tab).classList.add("active-tab");
    });
});

// Typewriter Effect
const typewriterText = "Full Stack Developer & Problem Solver";
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
    let i = 0;
    typewriterElement.innerHTML = ""; // Clear any existing text
    
    function type() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Start typewriter when page loads
document.addEventListener('DOMContentLoaded', typeWriter);

// Contact Form Submission
const scriptURL = "https://script.google.com/macros/s/AKfycbzeo8tzK8aTT5CGrrcaDuFi9aVi35B8ljzrS-AoZNAic3DP6zsAfpZpZ1dXPAz99QzK/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

if (form && msg) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
            .then((response) => {
                msg.innerHTML = "✅ Message sent successfully!";
                msg.style.color = "#61b752";
                msg.style.display = "block";
                msg.style.padding = "10px";
                msg.style.marginTop = "15px";
                form.reset();

                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Show confetti
                if (typeof confetti === "function") {
                    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
                }

                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
            })
            .catch((error) => {
                msg.innerHTML = "❌ Something went wrong!";
                msg.style.color = "#ff004f";
                msg.style.display = "block";
                msg.style.padding = "10px";
                msg.style.marginTop = "15px";
                console.error("Error!", error.message);

                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Smooth Scrolling & Close Mobile Menu on Link Click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth",
            });

            if (window.innerWidth <= 768 && sidemenu) {
                sidemenu.style.right = "-200px";
            }
        }
    });
});

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        themeToggle.textContent = document.body.classList.contains("light-theme")
            ? "☀️"
            : "🌙";
    });
}

// Parallax Motion in Header
document.addEventListener("mousemove", (e) => {
    const header = document.getElementById("header");
    if (header) {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        header.style.backgroundPosition = `${x}px ${y}px`;
    }
});

// Scroll Reveal Animation
const revealItems = document.querySelectorAll(".achievement-card, .certificate-card");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1
});

revealItems.forEach((item) => revealObserver.observe(item));

// Add loading animation to skills
document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add hover effect to navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add scroll progress indicator
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can add a progress bar here if needed
    // console.log(scrolled + '% scrolled');
});

// Add page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
