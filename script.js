//These Script is taken from Chatgpt
particlesJS("particles-js", {
    particles: {
        number: {
            value: 120,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#FFA500" },
        shape: { type: "circle" },
        opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 2, opacity_min: 0 }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3 }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#800080",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 5,
            random: true,
            direction: "none"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" }
        },
        modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    retina_detect: true
});

gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 1
});

gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 1
});

gsap.from(".social-icon", {
    scrollTrigger: {
        trigger: ".social",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    },
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
// Target all elements with the data-animate attribute
const animateElements = document.querySelectorAll('[data-animate="true"]');

// Function to add animation class when element is in view
const animateOnScroll = () => {
    animateElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView) {
            element.classList.add('animate'); // Add 'animate' class when in view
        } else {
            element.classList.remove('animate'); // Remove the class if it's out of view
        }
    });
};

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial call to handle elements already in view
animateOnScroll();
