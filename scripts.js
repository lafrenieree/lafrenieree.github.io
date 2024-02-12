// Define a function to add a class to each card
	// Listen for when the whole page has loaded, then call the function
	function showCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
	card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
	    });

	}

document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('title');
    // Function to restart the animation
    function restartAnimation() {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger a reflow, flushing the CSS changes (necessary to reset the animation)
        element.style.animation = '';
		    }

    // Event listener for the end of the animation
	    element.addEventListener('animationend', function() {
        restartAnimation(); // Restart animation when it ends
		    });

	    restartAnimation(); // Start the animation initially
									});


	window.onload = showCards;
