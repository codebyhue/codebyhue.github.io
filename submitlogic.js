import { handleSubmit } from './form-handler';

const form = document.getElementById('rsvpForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // Submit data to Firebase
  handleSubmit(formData);
});