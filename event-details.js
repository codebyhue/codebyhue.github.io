
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
            option.value = country.cca3;
 // Use ISO 3166-1 alpha-3 code
            option.text = country.name.common;
            countryInput.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching countries:', error);
    });

