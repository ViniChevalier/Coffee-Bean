
function validateEmail() {
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMsg = document.getElementById("emailError");

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return false;
  } else {
    errorMsg.textContent = "Sorry! try again later.";
    return true;
  }
}

function validateForm() {
  return validateEmail();
}