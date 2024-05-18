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
  
  
// Function to create option buttons dynamically
function createOptions() {
    const optionsContainer = document.querySelector('.options-container');
  
    // Replace with your actual list of 20 options
    const options = [
      "Baked",
      "Polo Beach Club",
      "Lake Club Gh",
      "Taag Ghana",
      "La’Kia Collection",
      "Finessed by Frempz",
      "Butterfly Swimwear",
      "Djoulde",
      "Minu Minks",
      "Phil & Joe",
      "Niiney Beauty Store",
      "Keshia Danso",
      "Prikels Hair Ltd",
      "Nadsglam",
      "KayLuxe Extensions",
      "Swims by Didi",
      "Milirv",
      "JayClaud Beauty",
      "Bold Pieces",
      "KS Jewelry",
      // ... all 20 options within quotes
    ];
  
    options.forEach(option => {
      const button = createOptionButton(option);
      optionsContainer.appendChild(button);
    });
  }
  
  // Function to create a button with selection handling and data attribute
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
  

    // Call the function to create options on page load
    createOptions();










/*
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const selectedOptions = [...document.querySelectorAll('.options-container .selected')] // Assuming selected buttons have "selected" class
      .map(button => button.textContent)
      .join(', ');

  if (!name || !email) { // Check for required fields
    alert('Please enter your name and email address.');
    return; // Prevent further processing if required fields are empty
  }

  // Replace with your deployed Google Apps Script URL
  /const submitToSheetUrl = 'https://script.google.com/macros/s/AKfycbwLW3XljduYDqAak2NM4DrjwabVNBjHT-fZ__7_CBZovgAPU2BM7MNAOpN96eSYVSqI/exec';

  fetch(submitToSheetUrl, {
    method: 'POST',
    mode: 'no-cors', // Disable CORS for this request (consider server-side CORS for production)
    body: JSON.stringify({
      name,
      email,
      selectedOptions
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Data submitted successfully!');
    } else {
      alert('Error submitting data!');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again later.');
  });
});

*/


const form1 = document.getElementById('myForm');
const selectedOptionsField = document.getElementById('selectedOptionsField');

const scriptURL = 'https://script.google.com/macros/s/AKfycbwLW3XljduYDqAak2NM4DrjwabVNBjHT-fZ__7_CBZovgAPU2BM7MNAOpN96eSYVSqI/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  const selectedButtons = [...document.querySelectorAll('.options-container .selected')];

  // Extract text content of selected buttons
  const selectedOptions = selectedButtons.map(button => button.textContent).join(', ');

  // Update hidden field value
  selectedOptionsField.value = selectedOptions;

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
}) 