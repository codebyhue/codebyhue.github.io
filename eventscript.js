

$(document).ready(function() {
    $('#carouselExampleIndicators').carousel({
        interval: 3000 // Set the slide interval to 3 seconds
    });
});


// Event data structure
const events = [
    {
        name: "Brielle Talks: Beauty Without Limits @ British Beauty Week",
        date: "October 24 2024",
        time: "6 PM – 10 PM",
        venue: "art’otel London Hoxton",
        description: "Join us for “Brielle Talks: Beauty Without Limits” during British Beauty Week—a special panel conversation celebrating our two-year anniversary and the launch of our newest products. Attendees will get exclusive early access to shop, enjoy exciting discounts, and watch the premiere of our product documentary.",
        image: "img/BBW-Events-Header-5.png",
    },
    // Add more events here

];

// Function to create an event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('col-md-6', 'col-lg-4', 'event-card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = event.name;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = event.description;

    const dateAndTime = document.createElement('p');
    dateAndTime.classList.add('card-text');
    dateAndTime.textContent = `${event.date}, ${event.time}`;

    const venue = document.createElement('p');
    venue.classList.add('card-text');
    venue.textContent = `${event.venue}`;

    const rsvpButton = document.createElement('button');
    rsvpButton.classList.add('btn', 'btn-primary');
    rsvpButton.href = `event-details.html?name=${event.name}&date=${event.date}&time=${event.time}&venue=${event.venue}&description=${event.description}&image=${event.image}`;
    rsvpButton.textContent = 'RSVP →';

    rsvpButton.addEventListener('click', () => {
        const url = `event-details.html?name=${event.name}&date=${event.date}&time=${event.time}&venue=${event.venue}&description=${event.description}&image=${event.image}`;
        window.location.href = url;
      });
    
    cardBody.appendChild(title);
    cardBody.appendChild(dateAndTime);
    cardBody.appendChild(venue);
    cardBody.appendChild(description);
    cardBody.appendChild(rsvpButton);
    card.appendChild(cardBody);

    return card;
}

// Populate the event list
const eventList = document.getElementById('eventList');
events.forEach(event => {
    eventList.appendChild(createEventCard(event));
});
