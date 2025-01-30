// Initialize Lucide icons
lucide.createIcons();

// Function to update UTC time
function updateUTCTime() {
    const now = new Date();
    const utcTimeString = now.toISOString().split('.')[0] + 'Z';
    document.getElementById('utcTime').textContent = utcTimeString;
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);