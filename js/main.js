let imageList = [];
let titleList = [];
let priceList = [];
let currentImageIndex = 0;
let countdown = 5;
const imageElement = document.getElementById('animated-image');
const countdownElement = document.getElementById('countdown');
const titleFrame = document.getElementById('title-frame');
const imageChangeDuration = 8000;
const fadeDuration = 1000;

// Function to update the countdown timer display
function updateCountdown() {
  countdownElement.innerText = countdown;
}

// Function to send the title to the iframe
function sendTitleToFrame(title) {
  if (titleFrame.contentWindow) {
    titleFrame.contentWindow.postMessage(title, '*');
  }
}

// Function to change the image with animations
function showNextImage() {
  // Reset countdown for the new image
  countdown = 5;
  updateCountdown();

  // Fade out the current image
  imageElement.classList.remove('animate__fadeIn');
  imageElement.classList.add('animate__fadeOut');

  // After the fadeOut animation completes (1s), change the image and fade it in
  setTimeout(() => {
    // Update the image source and send the new title
    imageElement.src = imageList[currentImageIndex];
    var formatted_text = `${titleList[currentImageIndex]} - ${priceList[currentImageIndex]}`;
    sendTitleToFrame(formatted_text);

    // Move to the next image in the list
    currentImageIndex = (currentImageIndex + 1) % imageList.length;

    // Replace the fadeOut class with fadeIn to show the new image
    imageElement.classList.remove('animate__fadeOut');
    imageElement.classList.add('animate__fadeIn');
  }, fadeDuration); // This duration must match the CSS animation time for fadeOut
}

async function main() {
  try {
    const response = await fetch('resources/list.json');
    const data = await response.json();
    imageList = data.data.products.map(product => product.cover.url_list[0]);
    titleList = data.data.products.map(product => product.title);
    priceList = data.data.products.map(product => product.format_price);

    // --- Initial Setup ---
    titleFrame.onload = () => {
      // Set the very first image and title without animations
      imageElement.src = imageList[currentImageIndex];
      var formatted_text = `${titleList[currentImageIndex]} - ${priceList[currentImageIndex]}`;
      sendTitleToFrame(formatted_text);
      imageElement.style.display = 'block'; // This is the crucial fix to make the image visible
      currentImageIndex = (currentImageIndex + 1) % imageList.length;

      // Add the required Animate.css classes and fade in the first image
      imageElement.classList.add('animate__animated', 'animate__fadeIn');

      // Set the initial countdown value
      updateCountdown();

      // --- Timers ---
      // A timer to update the countdown display every second
      setInterval(() => {
        countdown--;
        updateCountdown();
      }, imageChangeDuration / 5);

      // A timer to change the image on a 5-second interval
      setInterval(showNextImage, imageChangeDuration);
    };

  } catch (error) {
    console.error('Error fetching or processing image list:', error);
  }
}

main();
