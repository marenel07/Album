document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons and containers
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.gallery-container').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show selected category
        const category = this.getAttribute('data-tab');
        if (category === 'all') {
            document.querySelectorAll('.photo-card').forEach(card => {
                card.style.display = 'block';
            });
        } else {
            document.querySelectorAll('.photo-card').forEach(card => {
                card.style.display = card.dataset.category === category ? 'block' : 'none';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
