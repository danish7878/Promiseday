function sendInstagram() {
    let promiseText = document.getElementById("aapi-promise").value;

    if (promiseText.trim() === "") {
        alert("Please enter a promise!");
        return;
    }

    let instaMessage = `Hey Aapi! ❤️\n\nOn this special day, I want to make these promises to you:\n\n` + promiseText + `\n\nFrom your dear younger brother! 😊`;

    let encodedMessage = encodeURIComponent(instaMessage);
    let instaUsername = "chaos.7os";

    let instagramURL = `https://www.instagram.com/direct/t/${instaUsername}/?text=${encodedMessage}`;

    window.open(instagramURL, "_blank");

    document.getElementById("thank-you-message").style.display = "block";
    document.getElementById("aapi-promise").value = "";
}