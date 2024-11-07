// Set the target date to Christmas 2024
const christmasDate = new Date("December 25, 2024 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    let distance;

    // Check if remaining time is saved in localStorage
    if (localStorage.getItem("remainingTime")) {
        distance = parseInt(localStorage.getItem("remainingTime"), 10);
    } else {
        // If not, calculate the time remaining until Christmas
        distance = christmasDate - now;
    }

    // Show the countdown timer when it starts
    document.getElementById("countdown").classList.remove("hidden");

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Store the remaining time in localStorage
    localStorage.setItem("remainingTime", distance - 1000);

    // If the countdown is complete, clear the interval and display the message
    if (distance <= 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Merry Christmas!";
        localStorage.removeItem("remainingTime"); // Clear the storage after reaching zero
    }
}

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);
