// JavaScript to toggle dark and light mode
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Check if the light mode is active and update the icon accordingly
    const isLightMode = document.body.classList.contains('light-mode');
    const themeIcon = document.querySelector('.theme-icon');
    
    console.log("Is Light Mode:", isLightMode);
    console.log("Setting icon to:", isLightMode ? 'images/moon-icon.png' : 'images/Vector.png');

    // Update the src and alt attributes of the theme icon based on the mode
    themeIcon.src = isLightMode ? 'images/moon-icon.png' : 'images/Vector.png';
    themeIcon.alt = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
});

    // Add event listener for scrolling
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        // Add or remove 'scrolled' class based on scroll position
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    //for scrooll to image
    document.getElementById('more-analytics-btn').addEventListener('click', function () {
        document.getElementById('analytics-section').scrollIntoView({
            behavior: 'smooth'
        });
    });


   
// Toggle additional contributors
document.getElementById("toggleContributorsBtn").addEventListener("click", function() {
    const additionalContributors = document.querySelectorAll(".additional-contributor");
    const isExpanded = additionalContributors[0].style.display === "list-item";
    
    additionalContributors.forEach(contributor => {
        contributor.style.display = isExpanded ? "none" : "list-item";
    });
    
    // Update the button text
    this.textContent = isExpanded ? "+3 more" : "Show less";
});

// Toggle additional project cards
const toggleButton = document.getElementById("toggleCardsBtn");
const additionalCards = document.querySelectorAll(".additional-card");
let isExpanded = false;

toggleButton.addEventListener("click", () => {
    isExpanded = !isExpanded;
    additionalCards.forEach(card => card.style.display = isExpanded ? "flex" : "none");
    toggleButton.innerHTML = isExpanded 
        ? '<span class="icon"><img src="images/Expand less.png" alt=""></span> Collapse'
        : '<span class="icon"><img src="images/Expand more.png" alt=""></span> More';
});




