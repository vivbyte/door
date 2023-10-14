// script.js
function changeImage() {
    const clickableImage = document.getElementById("clickableImage");
    const overlay = document.getElementById("overlay");
    const sound = document.getElementById("sound");

    // Change the image
    clickableImage.src = "/assets/open.webp";

    // Display the overlay and play the sound
    overlay.style.opacity = 1;
    sound.play();

    // After a delay, redirect the user
    setTimeout(function () {
        window.location.href = "new-page.html";
    }, 5000); // Redirect after 5 seconds (adjust the delay as needed)
}
