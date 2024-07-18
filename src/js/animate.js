import 'animate.css';





// Animate on Scroll with Intersection observers
const fadeUps = document.querySelectorAll(".fade-up");
const slideFromLefts = document.querySelectorAll(".slide-fleft");
const slideFromRights = document.querySelectorAll(".slide-fright");
const option = { 
    threshold: 0.4
}

const scrollObserver = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // scrollObserver.unobserve(entries);
        }
            else {
                entry.target.classList.remove('show');
            }
    })
}, option
);






fadeUps.forEach(fadeUp => {
    scrollObserver.observe(fadeUp);
})
slideFromLefts.forEach(slideFromLeft => {
    scrollObserver.observe(slideFromLeft);
})
slideFromRights.forEach(slideFromRight => {
    scrollObserver.observe(slideFromRight);
})