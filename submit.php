<?php
$name = $_POST['name'];
$email = $_POST['email'];
$selectedOptions = $_POST['options[]']; // Assuming options array name

// Combine selected options into a string
$selectedOptionsString = implode(', ', $selectedOptions);

// Email content (replace with your email address)
$message = "We have a new entry🎉 Name: $name\nEmail: $email\nSelected Options: $selectedOptionsString";
$to = "brothersinhue@gmail.com";
$subject = "Form Submission - Selection Options";

// Send email using PHP mail function
if (mail($to, $subject, $message)) {
  echo 'Data submitted successfully! A confirmation email has been sent.';
} else {
  echo 'Error: There was a problem sending the email.';
}
?>