   // Admin verification page
     document.addEventListener("DOMContentLoaded", function() {
       const iframe = document.querySelector("#content-iframe");
       const btns = document.querySelectorAll(".btn");
       btns.forEach(function(btn) {
         btn.addEventListener("click", function() {
           const src = this.dataset.src;
           iframe.src = src;
         });
       });
  
       const adminCredentials = [
         { name: "Mary", password: "100" },
         { name: "Joseph", password: "200" },
           // Add more admin names and passwords as needed
         ];
  
       function verifyAdmin() {
         const adminName = prompt(" Administration Username:");
         const adminPassword = prompt("Hello " + adminName +". Please enter your password:");
  
         const admin = adminCredentials.find(function(admin) {
           return admin.name === adminName && admin.password === adminPassword;
         });
  
         if (admin) {
           document.getElementById("admin-name").textContent = adminName;
           document.getElementById("admin-email").textContent = adminName;
         } else {
           alert("Access denied! Invalid credentials.");
           window.location.href = "Verification.html"; // Redirect to the login page or any other URL
         }
       }
  
       // Time
       setInterval(function() {
         const now = new Date();
         const dateTimeString = now.toLocaleString();
         document.getElementById("date-time").textContent = dateTimeString;
       }, 1000);
  
       verifyAdmin(); // Call the admin verification function
     });
  
    // Replace the current page's URL with a new URL
    function closePreviousPages() {
     if (typeof history.pushState === "function") {
        history.pushState(null, "", location.href);
        window.addEventListener("popstate", function () {
          location.href = "index.html";
        });
      }
    }
