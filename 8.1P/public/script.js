document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('scrollToContactBtn');
    const contactSection = document.getElementById('contact');

    if (contactButton && contactSection) {
        contactButton.addEventListener('click', function() {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});