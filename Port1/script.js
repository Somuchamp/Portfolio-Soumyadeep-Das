var typed = new Typed(".text", {
    strings: ["Coder.", "Upcoming Engineer.", "Badminton player."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("intro").style.display = "none";
    }, 3000); // 3 seconds for the entire animation
});
