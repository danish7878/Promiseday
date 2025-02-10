function sendWhatsApp() {
    let promiseText = document.getElementById("aapi-promise").value.trim();

    if (promiseText === "") {
        alert("Please enter a promise!");
        return;
    }

    let waMessage = `Hey Aapi! ❤️\n\nOn this special day, I want to make these promises to you:\n\n` + promiseText + `\n\nFrom your dear younger brother! 😊`;

    // Copy text to clipboard
    navigator.clipboard.writeText(waMessage).then(() => {
        alert("Promise copied! Now opening WhatsApp...");

        // Open WhatsApp with pre-filled message
        let encodedMessage = encodeURIComponent(waMessage);
        let waNumber = "916203325372";
        let waURL = `https://wa.me/${waNumber}?text=${encodedMessage}`;
        
        // Redirect to WhatsApp chat
        window.location.href = waURL;
    }).catch(err => {
        alert("Failed to copy text! Please copy manually.");
    });

    // Show Thank You Message
    document.getElementById("thank-you-message").style.display = "block";
    document.getElementById("aapi-promise").value = "";
}