
    // Function to process payment
    function processPayment() {
      // Get the payment details
      var cardNumber = document.getElementById("card-number").value;
      var cardName = document.getElementById("card-name").value;
      var expMonth = document.getElementById("exp-month").value;
      var expYear = document.getElementById("exp-year").value;
      var cvv = document.getElementById("cvv").value;
      var amount = document.getElementById("amount").value;

      // Validate the payment details
      if (cardNumber === "" || cardName === "" || expMonth === "" || expYear === "" || cvv === "" || amount === "") {
        alert("Please fill all the fields!");
        return false;
      }

      // Send the payment request to the server
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "payment.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          alert(this.responseText);
        }
      };
      xhr.send("cardNumber=" + cardNumber + "&cardName=" + cardName + "&expMonth=" + expMonth + "&expYear=" + expYear + "&cvv=" + cvv + "&amount=" + amount);

      return true;
    }
 