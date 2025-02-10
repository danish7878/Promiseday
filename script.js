function sendPromise() {
    let promiseText = document.getElementById("aapi-promise").value;

    if (promiseText.trim() === "") {
        alert("Please enter a promise!");
        return;
    }

    fetch("sent.php", {
        method: "POST",
        body: JSON.stringify({ promise: promiseText }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            document.getElementById("thank-you-message").style.display = "block";
            document.getElementById("aapi-promise").value = "";
        } else {
            alert("Failed to send! Try again.");
        }
    })
    .catch(err => console.error(err));
}