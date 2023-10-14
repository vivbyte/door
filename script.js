function changeImage() {
    const clickableImage = document.getElementById("clickableImage");
    const overlay = document.getElementById("overlay");
    const sound = document.getElementById("sound");

    // Change the image
    clickableImage.src = "assets/open.gif";

    // Display the overlay and play the sound
    overlay.style.opacity = 1;
    overlay.style.display = "block"; // Ensure the overlay is visible
    sound.play();

    // After a delay, redirect the user
    setTimeout(function () {
        window.location.href = "linked.html";
    }, 8000); // Redirect after 5 seconds (adjust the delay as needed)
}