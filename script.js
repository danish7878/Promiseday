document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("ayiLP8Vw0kAR4gV_M"); // Initialize EmailJS with Public Key
});

function sendPromise() {
    let promiseText = document.getElementById("aapi-promise").value;

    if (promiseText.trim() === "") {
        alert("Please enter a promise!");
        return;
    }

    emailjs.send("service_pjy6f0e", "template_yl869a9", {
        promise: promiseText
    })
    .then(response => {
        console.log("Email sent successfully!", response);
        document.getElementById("thank-you-message").style.display = "block";
        document.getElementById("aapi-promise").value = "";
    })
    .catch(error => {
        console.error("Error sending email:", error);
        alert("Failed to send! Try again.");
    });
}