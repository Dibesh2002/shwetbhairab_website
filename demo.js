function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone").value;
    
    if (name == "" || email == "" || message == "") {
      alert("Please fill in all required fields.");
      return false;
    }
    
    if (phone != "" && !phone.match(/^\d{10}$/)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    
    return true;
  }
  