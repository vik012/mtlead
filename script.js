document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.16,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach((item) => {
    observer.observe(item);
});

// Hero video: autoplay when visible and allowed
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
    const vidObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                // try play (muted autoplay should work)
                heroVideo.play().catch(() => {});
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 });
    vidObserver.observe(heroVideo);
}

// Lottie: if lottie-player isn't loaded from CDN the element will be ignored
// No-op here; the <lottie-player> will autoplay if available.
