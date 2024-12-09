
function validateForm() {
  // Perform any custom validation here
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  
  // Example: Validate email contains "@" symbol
  if (!email.includes('@')) {
      emailError.textContent = 'Please enter a valid email address.';
      return false; // Prevent form submission
  } else {
      emailError.textContent = ''; // Clear any previous error
  }
  
  // If validation passes, show the success message
  document.getElementById('successMessage').style.display = 'block';
  
  // Optional: Clear the form
  document.querySelector('form').reset();
  
  return false; // Prevent actual form submission to allow the message display
}