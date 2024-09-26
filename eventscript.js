// Event data structure
const events = [
    {
        name: "Bergen International Film Festival",
        date: "Today",
        time: "17:00",
        venue: "Bergen International Film Festival",
        description: "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival."
    },
    // Add more events here

        {
        name: "Bergen International Film Festival",
        date: "Today",
        time: "17:00",
        venue: "Bergen International Film Festival",
        description: "Films from all over the world gather."
    },
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
    rsvpButton.href = `event-details.html?name=${event.name}&date=${event.date}&time=${event.time}&venue=${event.venue}`;
    rsvpButton.textContent = 'RSVP →';

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

$(document).ready(function() {
    $('#carouselExampleIndicators').carousel({
        interval: 500 // Set the slide interval to 1.5 seconds
    });
});