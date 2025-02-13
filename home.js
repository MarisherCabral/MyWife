// JavaScript to handle the click event on gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle visibility of the overlay for the clicked item
        const overlay = item.querySelector('.overlay');
        
        // If the overlay is already visible, hide it
        if (overlay.style.opacity === '1') {
            overlay.style.opacity = '0';
        } else {
            // Show the overlay when clicked
            overlay.style.opacity = '1';
            
            // Show the letter inside the overlay for all images
            const letter = item.querySelector('.letter');
            letter.textContent = item.getAttribute('data-letter');  // Get the letter from the data attribute

            // If it's the first item, show the message
            if (item.getAttribute('data-letter') === 'A') {
                item.querySelector('.message').style.display = 'block';
            } else {
                item.querySelector('.message').style.display = 'none';
            }
        }
    });
});
