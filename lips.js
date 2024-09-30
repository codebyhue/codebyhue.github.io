const images = document.querySelectorAll('.image');
const card = document.querySelector('.card');
let currentIndex = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function animateImages() {
  if (currentIndex < images.length) {
    images[currentIndex].classList.add('active');
    card.style.display = 'none'; // Hide the card initially

    setTimeout(() => {
      images[currentIndex].classList.remove('active');
      currentIndex++;
      card.style.display = 'block'; // Show the card after the image fades out
      animateImages();
    }, 1000); // Adjust the delay as needed
  }
}

// Shuffle the images randomly
shuffleArray(images);

animateImages();