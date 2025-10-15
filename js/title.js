window.addEventListener('message', (event) => {
  const titleTextElement = document.getElementById('title-text');
  const titleContainer = document.getElementById('title-container');

  if (titleTextElement && titleContainer) {
    // Fade out the current title
    titleContainer.classList.remove('animate__fadeIn');
    titleContainer.classList.add('animate__fadeOut');

    // After the fadeOut animation completes, update the text and fade in
    setTimeout(() => {
      titleTextElement.innerHTML = event.data; // Use innerHTML to allow for complex formatting
      titleContainer.classList.remove('animate__fadeOut');
      titleContainer.classList.add('animate__fadeIn');
    }, 1000); // Must match the fadeOut duration
  }
});
