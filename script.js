const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));

            const current = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );
            if (current) {
                current.classList.add("active");
            }
        }
    });
}, { threshold: 0.6 });

sections.forEach((section) => observer.observe(section));