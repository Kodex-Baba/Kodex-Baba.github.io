const quoteText = document.querySelector('.quote-text p');

const options = {
    root: null,
    threshold: 0.5, // trigger when 50% of the element is in view
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class when the quote is in view
            quoteText.style.animationPlayState = 'running';
            observer.unobserve(entry.target); // stop observing once animated
        }
    });
}, options);

// Start observing the quote section
observer.observe(quoteText);
