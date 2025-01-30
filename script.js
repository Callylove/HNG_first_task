

// Initialize Lucide icons
lucide.createIcons();

// Function to update UTC time
function updateUTCTime() {
    const now = new Date();
    
    // Format the date in a more readable way
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };
    
    const formattedTime = now.toLocaleString('en-US', options) + ' UTC';
    document.getElementById('utcTime').textContent = formattedTime;
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);