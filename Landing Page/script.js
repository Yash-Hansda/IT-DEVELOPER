document.addEventListener('DOMContentLoaded', () => {
    // Loading screen animation
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        fadeOut(loadingScreen, 500, () => {
            loadingScreen.style.display = 'none';
        });
    }, 1000); // Reduced to 1 second

    // Existing animations
    const heroContent = document.querySelector('.content');
    heroContent.style.opacity = '0';
    setTimeout(() => {
        fadeIn(heroContent, 500);
    }, 1500); // Start fading in shortly after loading screen fades out

    // Animate feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            fadeIn(item, 300);
            slideUp(item, 300);
        }, 2000 + index * 100); // Reduced delay between items
    });

    // Animate form on hover
    const form = document.querySelector('.form');
    form.addEventListener('mouseenter', () => {
        form.style.transform = 'scale(1.03)'; // Reduced scale for subtler effect
        form.style.transition = 'transform 0.2s ease'; // Faster transition
    });
    form.addEventListener('mouseleave', () => {
        form.style.transform = 'scale(1)';
    });
});

function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 20; // Reduced interval for smoother animation
    const gap = interval / duration;

    function animate() {
        opacity += gap;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fading);
        }
    }

    const fading = setInterval(animate, interval);
}

function fadeOut(element, duration, callback) {
    let opacity = 1;
    const interval = 20; // Reduced interval for smoother animation
    const gap = interval / duration;

    function animate() {
        opacity -= gap;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fading);
            if (callback) callback();
        }
    }

    const fading = setInterval(animate, interval);
}

function slideUp(element, duration) {
    let position = 20;
    const interval = 20; // Reduced interval for smoother animation
    const gap = (interval / duration) * 20;

    function animate() {
        position -= gap;
        element.style.transform = `translateY(${position}px)`;

        if (position <= 0) {
            clearInterval(sliding);
            element.style.transform = 'translateY(0)';
        }
    }

    const sliding = setInterval(animate, interval);
}
