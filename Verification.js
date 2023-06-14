//Admin verification page
  document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.querySelector("#content-iframe");
    const btns = document.querySelectorAll(".btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const src = this.dataset.src;
        iframe.src = src;
      });
    });

    const adminName = prompt("Please enter your Administration Username:");
    document.getElementById("admin-name").textContent = adminName;

    function verifyPassword() {
      const password = prompt("Welcome " + adminName + ". Please enter your password:");
      const validPassword = "123"; // Change this to your desired password

      if (password === validPassword) {
        document.getElementById("admin-password").textContent = password;
      } else {
        alert("Access denied! Invalid password.");
        window.location.href = "Verification.html"; // Redirect to the login page or any other URL
      }
    }

    // Time
    setInterval(function () {
      const now = new Date();
      const dateTimeString = now.toLocaleString();
      document.getElementById("date-time").textContent = dateTimeString;
    }, 1000);

    verifyPassword(); // Call the password verification function
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
