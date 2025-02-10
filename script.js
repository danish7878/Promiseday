function sendInstagram() {
    let promiseText = document.getElementById("aapi-promise").value.trim();

    if (promiseText === "") {
        alert("Please enter a promise!");
        return;
    }

    let instaMessage = `Hey Aapi! ❤️\n\nOn this special day, I want to make these promises to you:\n\n` + promiseText + `\n\nFrom your dear younger brother! 😊`;

    // Copy text to clipboard
    navigator.clipboard.writeText(instaMessage).then(() => {
        alert("Promise copied! Now opening Instagram...");

        // Open Instagram DM with your username
        let instaUsername = "chaos.7os";
        let instaAppURL = `https://instagram.com/direct/t/${instaUsername}`;
        
        // Redirect to Instagram DM
        window.location.href = instaAppURL;
    }).catch(err => {
        alert("Failed to copy text! Please copy manually.");
    });

    // Show Thank You Message
    document.getElementById("thank-you-message").style.display = "block";
    document.getElementById("aapi-promise").value = "";
}