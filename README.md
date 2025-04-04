# vaultofcodes
for access in google sheets
sorry for this sir i can't you you the acces for my gmail account
so for this i did this js is connected with contact page only 
just you have to make google sheets
as per this instructions
thank you for your contributions and efforts.

🔹 Step 1: Prepare Your Google Sheet
Go to Google Sheets and create a new spreadsheet.

Rename it to ContactFormData (optional).

In the first row, add headers like:

Timestamp | First Name | Last Name | Email | Contact Number | Message

Create a sheet named FormResponses (or just rename the default one).

🔹 Step 2: Open Google Apps Script
From your spreadsheet, click on Extensions → Apps Script.

Delete any existing code and paste the following:

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FormResponses");

  sheet.appendRow([
    new Date(),
    e.parameter.firstName,
    e.parameter.lastName,
    e.parameter.email,
    e.parameter.contactNumber,
    e.parameter.message
  ]);

  return ContentService
    .createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}

Click the disk icon (💾) to save. Name it something like FormSubmission.

🔹 Step 3: Deploy as Web App
Click Deploy → Manage deployments

Click + New deployment

Click Select type → Web App

Set:

Description: Contact Form Handler

Execute as: Me

Who has access: Anyone (important!)

Click Deploy

Copy the Web App URL – you’ll need this in your JavaScript.

🔹 Step 4: Add the JavaScript (Frontend)
In your contact-script.js file (or in a <script> tag), paste:

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

📌 Replace:
https://script.google.com/macros/s/PASTE_YOUR_SCRIPT_URL_HERE/exec

with your actual Google Apps Script Web App URL.
