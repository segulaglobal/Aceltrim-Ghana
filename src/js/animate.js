import 'animate.css';

// Animate on Scroll with Intersection observers
const elementsToAnimate = document.querySelectorAll(".fade-up, .slide-fleft, .slide-fright");
const options = { threshold: 0.4 };

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            scrollObserver.unobserve(entry.target); // Unobserve the target right after it is observed
        }
    });
}, options);

elementsToAnimate.forEach(element => {
    scrollObserver.observe(element);
});