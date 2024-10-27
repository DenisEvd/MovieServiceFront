(function() {
    const startTime = performance.now();

    window.addEventListener('load', function() {
        const endTime = performance.now();
        const loadTime = (endTime - startTime).toFixed(2);

        const footer = document.querySelector('footer');
        const loadTimeElement = document.createElement('p');
        loadTimeElement.textContent = `Page load time: ${loadTime} ms`;
        loadTimeElement.style.color = '#FFFFFF';

        footer.appendChild(loadTimeElement);

        const menuItems = document.querySelectorAll('.movies-lists__item');
        const currentLocation = document.location.pathname;

        menuItems.forEach(item => {
            if (currentLocation.includes(item.id)) {
                item.classList.add('active');
            }
        });
    });
})();