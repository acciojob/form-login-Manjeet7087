function getFormvalue() {
    //Write your code here
	// script.js
function getFormValue() {
  event.preventDefault(); // Prevents form submission

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Attach the form submission event handler
document.getElementById("myForm").addEventListener("submit", getFormValue);


}
