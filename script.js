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
      
  //Popup Countdown on index file  
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
    //users
    var users = [
  { username: "Admin", password: "admin", email: "antonio@200labs.tech", phoneNumber: "+254111111" },
  { username: "Mary", password: "100", email: "marym@gmail.com", phoneNumber: "079234566" },
  { username: "Joseph", password: "200", email: "jkitonga@gmail.com", phoneNumber: "0794562649" }
];

       // Time
       setInterval(function() {
         const now = new Date();
         const dateTimeString = now.toLocaleString();
         document.getElementById("date-time").textContent = dateTimeString;
       }, 1000);
  
       verifyAdmin(); // Call the admin verification function
  
    // Replace the current page's URL with a new URL
    function closePreviousPages() {
     if (typeof history.pushState === "function") {
        history.pushState(null, "", location.href);
        window.addEventListener("popstate", function () {
          location.href = "index.html";
        });
      }
    }
