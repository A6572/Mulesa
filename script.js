     //Responsive menu bar
      var coll = document.getElementsByClassName("collapsible");
      var i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
          content.style.display = "block";
          }
        });
      }
      
   //Image transition
          var slideIndex = 0;
          var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
          var slideSpeed = 1500;
          // Set the slider speed in milliseconds (e.g., 2000 = 2 seconds)
          setInterval(function() {
            for (var i = 0; i < slides.length; i++) {
              slides[i].classList.remove("active", "next", "previous");
              slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex >= slides.length) {
              slideIndex = 0;
            }
            slides[slideIndex].classList.add("active");
            slides[(slideIndex + 1) % slides.length].classList.add("next");
            slides[(slideIndex - 1 + slides.length) % slides.length].classList.add("previous");
            slides[slideIndex].style.display = "block";
          }, slideSpeed);
        //
          function verifyPassword() {
            var password = parseInt(document.getElementById("password").value);
            var minRange = 2022;
            var maxRange = 2023; 
            var errorElement = document.getElementById("error");
            
            if (password >= minRange && password <= maxRange) {
              window.location.href = "Members.html"; 
            } else {
              errorElement.innerHTML = "Invalid Access Key. Please try again!";
            }
          }
    

    var countdownTimer = setInterval(countdown, 00);
    // Countdown timer logic
    function countdown() {
      var eventDate = new Date("2023-07-20T00:00:00").getTime(); // Replace with your event date
      var now = new Date().getTime();
      var distance = eventDate - now;
    
      // Time calculations
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the countdown
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
      // Check if the event has passed
      if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Welcome to our Website";
      }
    }
    
    // Close the popup
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }