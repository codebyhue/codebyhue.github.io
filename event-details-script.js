// Get event details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const eventName = urlParams.get('name');
const eventDate = urlParams.get('date');
const eventTime = urlParams.get('time');
const eventVenue = urlParams.get('venue');
const eventDescription = urlParams.get('description'); // Assuming you added a description parameter

// Update the page title
document.title = `${eventName}`;

// Display event details on the page
document.getElementById('eventName').textContent = eventName;
document.getElementById('eventDate').textContent = eventDate;
document.getElementById('eventTime').textContent = eventTime;
document.getElementById('eventVenue').textContent = eventVenue;
document.getElementById('eventDescription').textContent = eventDescription;


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
            option.value = country.cca3;
 // Use ISO 3166-1 alpha-3 code
            option.text = country.name.common;
            countryInput.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching countries:', error);
    });


    
// Handle RSVP form submission
const rsvpForm = document.getElementById('rsvpForm');
rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const country = document.getElementById('country').value;
    const instagramHandle = document.getElementById('instagramHandle').value;
    const jobBusiness = document.getElementById('jobBusiness').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const maybeResponseTime = document.getElementById('maybeResponseTime').value;

    // Process RSVP data (e.g., send to a server, store locally)
    console.log('RSVP Data:', {
        fullName,
        email,
        phoneNumber,
        country,
        instagramHandle,
        jobBusiness,
        attendance,
        maybeResponseTime
    });

    // Redirect to confirmation page after successful RSVP
    window.location.href = 'confirmation.html';
});