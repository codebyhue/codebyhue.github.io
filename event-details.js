
//-------------------------------------------------------//

// Get event details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const eventName = urlParams.get('name');
const eventDate = urlParams.get('date');
const eventTime = urlParams.get('time');
const eventVenue = urlParams.get('venue');
const eventDescription = urlParams.get('description'); // Assuming you added a description parameter
const eventImage = urlParams.get('image');
const eventImageElement = document.querySelector('.event-details img');

// Update the page title
document.title = `${eventName}`;

// Display event details on the page
document.getElementById('eventName').textContent = eventName;
document.getElementById('eventDate').textContent = eventDate;
document.getElementById('eventTime').textContent = eventTime;
document.getElementById('eventVenue').textContent = eventVenue;
document.getElementById('eventDescription').textContent = eventDescription;
eventImageElement.src = eventImage;


// Get a reference to the country select element
const countrySelect = document.getElementById('country');

// Fetch the list of countries from the RestCountries API
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        // Sort the countries alphabetically
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        // Populate the country input field
        const countryInput = document.getElementById('country');
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
 // Use ISO 3166-1 alpha-3 code
            option.text = country.name.common;
            countryInput.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching countries:', error);
    });



//----------------------------------------/ 





const form = document.getElementById('rsvpForm');

const scriptURL = 'https://script.google.com/macros/s/AKfycbz3B0ONYhNQ0NqizeYwiiOJrUWSH2FE9rQwPglOJLZDdZAWYJjK9vj7y-b_JYPhRU5n/exec '
//const scriptURL = 'https://script.google.com/macros/s/AKfycbwLW3XljduYDqAak2NM4DrjwabVNBjHT-fZ__7_CBZovgAPU2BM7MNAOpN96eSYVSqI/exec'
form.addEventListener('submit', e => {
  e.preventDefault()

  const fullNameField = document.getElementById('fullName');
  const emailField = document.getElementById('email');
  const phoneNumberField = document.getElementById('phoneNumber');
  const countryField = document.getElementById('country');
  const instagramHandleField = document.getElementById('instagramHandle');
  const jobBusinessField = document.getElementById('jobBusiness');
  const attendanceYesRadio = document.getElementById('attendanceYes');
  const attendanceNoRadio = document.getElementById('attendanceNo');
  const attendanceMaybeRadio = document.getElementById('attendanceMaybe');
  const maybeResponseTimeField = document.getElementById('maybeResponseTime');

  const formData = new FormData();
  formData.append('fullName', fullNameField.value);
  formData.append('email', emailField.value);
  formData.append('phoneNumber', phoneNumberField.value);
  formData.append('country', countryField.value);
  formData.append('instagramHandle', instagramHandleField.value);
  formData.append('jobBusiness', jobBusinessField.value);

  let attendanceValue;
  if (attendanceYesRadio.checked) {
    attendanceValue = 'yes';
  } else if (attendanceNoRadio.checked) {
    attendanceValue = 'no';
  } else if (attendanceMaybeRadio.checked) {
    attendanceValue = 'maybe';
    formData.append('maybeResponseTime', maybeResponseTimeField.value); // Only include if Maybe is selected
  }

  formData.append('attendance', attendanceValue);

    // Log the form data to the console
    console.log('Form Data:', formData);

  fetch(scriptURL, {method: 'POST', body: formData })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //return window.location.href = "google.com"; // Redirect to new page
  })
  .catch(error => console.error('Error!', error.message))


})