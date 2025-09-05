document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {

        const lastModified = new Date(document.lastModified);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        lastUpdatedElement.textContent = lastModified.toLocaleDateString('en-GB', options);
    }
});