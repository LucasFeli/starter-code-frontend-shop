// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  let fName = document.getElementById("fName");
  let fEmail = document.getElementById("fEmail");
  let fAddress = document.getElementById("fAddress");
  let fLastN = document.getElementById("fLastN");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  // Get the error elements
  let errorName = document.getElementById("errorName");
  let errorEmail = document.getElementById("errorEmail");
  let errorAddress = document.getElementById("errorAddress");
  let errorLastN = document.getElementById("errorLastN");
  let errorPassword = document.getElementById("errorPassword");
  let errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email

 
   // Validate fields entered by the name
 
   if (fName.value.length < 3) {
    error++;
    errorName = errorName.textContent;
    console.log(errorName);
  } else {
    errorName.textContent = "";
  }

  // Validate email format
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fEmail.value)) {
    error++;
    errorEmail = errorEmail.textContent;
  }else {
	errorEmail.textContent = ""; 
}

 // Validate address

  if (fAddress.value.length < 3) {
    error++;
    errorAddress = errorAddress.textContent;
    
  } else {
	errorAddress.textContent = ""; 
}

// Validate fields entered by the last name
if (fLastN.value.length < 3) {
	error++;
	errorLastN = errorLastN.textContent 
} else {
	errorLastN.textContent = ""; // Clear error message if last name is provided
}

 // Validate password format
 let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
 if (!passwordRegex.test(fPassword.value)) {
	 error++;
	 errorPassword =  errorPassword.textContent 
 } else {
	 errorPassword.textContent = ""; 
 }

  // Validate phone number
  var phoneRegex = /^\d{9}$/;
  if (!phoneRegex.test(fPhone.value)) {
	  error++;
	  errorPhone = errorPhone.textContent
  } else {
	  errorPhone.textContent = ""; 
  }

  
	if(error>0){
		alert("ErrorPlease fill in all required fields correctly.");
		return false;
	}else{
		alert("Success: Form submitted successfully.");
		return true;
	}

}
