
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});


function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const jobTitle = document.querySelector('#about h2');
typeWriter(jobTitle, jobTitle.textContent, 100);
jobTitle.textContent = '';


document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
});


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('submitted');
    setTimeout(() => {
        form.reset();
        form.classList.remove('submitted');
    }, 3000);
});


window.addEventListener('load', () => {

    const loadingOverlay = document.getElementById('loading-overlay');
    const header = document.querySelector('header');
    const mainContent = document.querySelector('main');
    

    const sequence = async () => {

        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.visibility = 'hidden';
        

        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
        

        await new Promise(resolve => setTimeout(resolve, 400));
        mainContent.style.transform = 'scale(1)';
        mainContent.style.opacity = '1';
        

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('reveal');
                section.style.transform = 'translateY(0)';
                section.style.opacity = '1';
            }, 200 * (index + 1));
        });
    };


    sequence();
    document.body.classList.add('loaded');
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    

    document.querySelectorAll('.clickable-image').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
           
            setTimeout(() => modal.classList.add('show'), 10);
        });
    });
    

    closeBtn.addEventListener('click', closeModal);
    

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); 
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const letterElements = document.querySelectorAll('.letter-animation');
    
    letterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        

        [...text].forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.1}s`;
            element.appendChild(span);
        });
    });
    

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'none';
                entry.target.offsetHeight; 
                entry.target.style.animation = null;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-text').forEach(text => {
        observer.observe(text);
    });
});
