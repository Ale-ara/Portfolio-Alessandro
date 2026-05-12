//////////////////////////////////////////////////////
// PAGE LOAD
//////////////////////////////////////////////////////

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

//////////////////////////////////////////////////////
// FADE ENTRE PÁGINAS
//////////////////////////////////////////////////////

const links = document.querySelectorAll("a");

links.forEach(link => {

    const href = link.getAttribute("href");

    if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("https://") ||
        link.target === "_blank"
    ) return;

    link.addEventListener("click", function (e) {

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = href;

        }, 400);

    });

});

//////////////////////////////////////////////////////
// REVEAL AUTOMÁTICO
//////////////////////////////////////////////////////

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("load", () => {

    reveals.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("active");

        }, index * 120);

    });

});

//////////////////////////////////////////////////////
// COUNTERS
//////////////////////////////////////////////////////

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 35;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 40);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

//////////////////////////////////////////////////////
// HEADER SCROLL
//////////////////////////////////////////////////////

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

//////////////////////////////////////////////////////
// HERO PARALLAX
//////////////////////////////////////////////////////

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x =
        (window.innerWidth / 2 - e.pageX) / 45;

    const y =
        (window.innerHeight / 2 - e.pageY) / 45;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

//////////////////////////////////////////////////////
// VIDEO HOVER
//////////////////////////////////////////////////////

const featuredCase =
    document.querySelector(".featured-case");

if (featuredCase) {

    const video =
        featuredCase.querySelector(".preview-video");

    featuredCase.addEventListener("mouseenter", () => {

        video.currentTime = 0;

        video.play();

    });

    featuredCase.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

}

//////////////////////////////////////////////////////
// ACTIVE NAVBAR
//////////////////////////////////////////////////////

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});