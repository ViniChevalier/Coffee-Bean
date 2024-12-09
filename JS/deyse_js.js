function validateForm() {
  const email = document.getElementById('email').value.trim(); // Trim whitespace
  const emailError = document.getElementById('emailError');
  const successMessage = document.getElementById('successMessage');
  
  // Reset previous messages
  emailError.textContent = '';
  successMessage.style.display = 'none';

  // Validate email contains "@" and a domain
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    return false; // Prevent form submission
  }
  
  // Show success message
  successMessage.textContent = 'Your message has been sent successfully. We will contact you soon.';
  successMessage.style.display = 'block';

  // Optional: Clear the form
  document.querySelector('form').reset();

  return false; // Prevent actual form submission
}