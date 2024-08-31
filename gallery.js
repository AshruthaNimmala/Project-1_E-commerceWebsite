 // Prevent access to dashboard if not logged in

 if (localStorage.getItem("isLoggedIn") !== "true") {

    window.location.href = "index.html";

  }

// Access the Images and Videos
let slideItems = document.querySelectorAll('.slides img, .slides video');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

let counter = 0;
let numberOfItems = slideItems.length;

// Function to show the current slide
function showSlide(index) {
    // Pause any playing video
    const activeVideo = document.querySelector('.slides video.active');
    if (activeVideo) {
        activeVideo.pause();
        activeVideo.currentTime = 0; // Reset video to start
    }

    // Remove active class from all images and videos, and hide them
    slideItems.forEach((item, i) => {
        item.classList.remove('active');
        item.style.display = 'none';
    });

    // Show the current image or video
    slideItems[index].style.display = 'block';
    slideItems[index].classList.add('active');

    // Update the dots
    indicators();
}

// Initial setup to show the first slide
document.addEventListener('DOMContentLoaded', function() {
    showSlide(counter);
});

// Code for next button
next.addEventListener('click', slideNext);
function slideNext() {
    counter = (counter + 1) % numberOfItems; // Loop back to first item
    showSlide(counter);
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
    counter = (counter - 1 + numberOfItems) % numberOfItems; // Loop back to last item
    showSlide(counter);
}


// Add and remove active class from the indicators
function indicators() {
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === counter) {
            dot.classList.add('active');
        }
    });
}

// Add click event to the indicator
function switchImage(currentImage) {
    let imageId = parseInt(currentImage.getAttribute('attr'));
    counter = imageId;
    showSlide(counter);
}

// Handle video playback
const videoElement = document.querySelector('.slides video');
if (videoElement) {
    videoElement.addEventListener('ended', slideNext); // Move to the next slide when video ends
}

function logout() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
  }
  