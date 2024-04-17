document.addEventListener('DOMContentLoaded', function() {
    // Function to setup the toggle functionality
    function setupToggleForContainerFull(container) {
        const contentFull = container.querySelector('.content-full');
        const toggleButton = container.querySelector('.toggle-btn-full');

        // Initially hide the content
        contentFull.style.display = 'none';

        // Event listener for the toggle button
        toggleButton.addEventListener('click', function() {
            // Check the current state and toggle accordingly
            if (contentFull.style.display === 'none') {
                // If hidden, show the content
                contentFull.style.display = '';
                toggleButton.querySelector('span').textContent = 'Collapse';
                toggleButton.querySelector('img').classList.remove('-rotate-90');
                toggleButton.querySelector('img').classList.add('rotate-90');
            } else {
                // If shown, hide the content
                contentFull.style.display = 'none';
                toggleButton.querySelector('span').textContent = 'More Info';
                toggleButton.querySelector('img').classList.remove('rotate-90');
                toggleButton.querySelector('img').classList.add('-rotate-90');
            }
        });
    }

    // Setup toggle functionality for the specified container
    document.querySelectorAll('.toggle-container-full').forEach(setupToggleForContainerFull);

    const swiper = new Swiper('.swiper', {
        autoHeight: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
      
});