// Responsive Store Locator Layout JavaScript

function adjustStoreLocatorLayout() {
    const row = document.querySelector('.row');
    const leftBanner = document.querySelector('.left-banner');
    const rightBanner = document.querySelector('.right-banner');
    const map = document.getElementById('map');

    if (window.innerWidth <= 991) {
        // Stack vertically on small screens
        if (row) row.style.flexDirection = 'column';
        if (leftBanner) leftBanner.style.maxWidth = '100%';
        if (rightBanner) rightBanner.style.maxWidth = '100%';
        if (map) map.style.height = '260px'; // Adjust map height for mobile
    } else {
        // Side-by-side on desktop
        if (row) row.style.flexDirection = 'row';
        if (leftBanner) leftBanner.style.maxWidth = '370px';
        if (rightBanner) rightBanner.style.maxWidth = '';
        if (map) map.style.height = '420px'; // Desktop map height
    }
}

// Run on page load and when resizing
window.addEventListener('DOMContentLoaded', adjustStoreLocatorLayout);
window.addEventListener('resize', adjustStoreLocatorLayout);
