let currentImageIndex = 0;
let countdown = 5;

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = countdown;
}

function showNextImage() {
    const imageElement = document.getElementById('animated-image');
    imageElement.src = `img/${imageList[currentImageIndex]}`;
    imageElement.style.display = 'block';

    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    countdown = 5;
    updateCountdown();
}

// Countdown timer
setInterval(() => {
    countdown--;
    if (countdown < 0) {
        countdown = 5;
    }
    updateCountdown();
}, 1000);


// Show the first image immediately
showNextImage();

// Change image every 5 seconds
setInterval(showNextImage, 5000);
