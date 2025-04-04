document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch("https://script.google.com/macros/s/PASTE_YOUR_SCRIPT_URL_HERE/exec", {
      method: "POST",
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        document.getElementById("response-message").innerText = "Message sent successfully!";
        form.reset();
      })
      .catch(error => {
        document.getElementById("response-message").innerText = "Something went wrong!";
        console.error("Error:", error);
      });
  });
  