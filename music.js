document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio-player");

    function tryAutoplay() {
        audio.play().then(() => {
            console.log("Autoplay started successfully.");
        }).catch(error => {
            console.log("Autoplay blocked. Retrying in 2 seconds...");
            setTimeout(tryAutoplay, 2000); // Retry after 2 seconds
        });
    }

    tryAutoplay(); // Try autoplay immediately

    // Ensure playback after user interaction if autoplay fails
    document.addEventListener("click", function () {
        audio.play();
    }, { once: true });
});
