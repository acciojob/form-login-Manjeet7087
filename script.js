function getFormValue() {
  var formInput = document.getElementById('formInput').value;

  // Extracting the first and last name
  var firstName = formInput.split(' ')[0];
  var lastName = formInput.split(' ').slice(-1)[0];

  // Displaying the first and last name using alert()
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}



