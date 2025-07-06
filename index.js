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
