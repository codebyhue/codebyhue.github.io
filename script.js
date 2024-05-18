window.addEventListener("DOMContentLoaded", function() {
    const appearingDiv = document.getElementById("appear-on-scroll");
    const triggerOffset = 1;
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const divTop = appearingDiv.getBoundingClientRect().top;
  
      if (scrollPosition > divTop - triggerOffset) {
        appearingDiv.style.opacity = 1;
      } else {
        appearingDiv.style.opacity = 0;
      }
    });
  });
  
  
  const optionsContainer = document.querySelector('.options-container');

  // Replace with your actual list of 20 options
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    // ... all 20 options within quotes
  ];
  
  function createOptionButton(optionText) {
    const button = document.createElement('button');
    button.textContent = optionText;
    button.classList.add('option-button');
    button.dataset.selected = false;
  
    // Prevent form submission on click
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const isSelected = this.dataset.selected === 'true';
      if (isSelected) {
        this.dataset.selected = 'false';
        this.classList.remove('selected');
      } else {
        const selectedCount = document.querySelectorAll('.options-container .selected').length;
        if (selectedCount < 7) {
          this.dataset.selected = 'true';
          this.classList.add('selected');
        } else {
          alert('You can only select up to 7 options!');
        }
      }
    });
  
    return button;
  }
  
  options.forEach(option => {
    const optionButton = createOptionButton(option);
    optionsContainer.appendChild(optionButton);
  });
  
  // Add form submission logic (e.g., using JavaScript or server-side scripting)
  
  // Example (assuming server-side processing)
  const submitButton = document.querySelector('.submit-btn');
  submitButton.addEventListener('click', function(event) {
    // Collect form data and send to server using AJAX or other methods
    // ... code for data processing and submission
  });
  
  