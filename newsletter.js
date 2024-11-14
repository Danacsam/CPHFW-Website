function showPopup(event) {
    event.preventDefault();  // Prevent default behavior (e.g., form submission)
    
    // Get the popup element
    const popup = document.getElementById('popup');
    
    // Ensure popup element exists
    if (popup) {
        popup.style.display = 'block';  // Show the popup
        
        // Hide the popup after 3 seconds
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000); // Adjust duration as needed
    } else {
        console.error('Popup element not found!');
    }
}
