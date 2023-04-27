 
  
  type="text/javascript">
      function validateForm() {
        var name = document.forms["signup"]["name"].value;
        var email = document.forms["signup"]["email"].value;
        var password = document.forms["signup"]["password"].value;
        if (name == "") {
          alert("Name must be filled out");
          return false;
        }
        if (email == "") {
          alert("Email must be filled out");
          return false;
        }
        if (password == "") {
          alert("Password must be filled out");
          return false;
        }
      }
    
   