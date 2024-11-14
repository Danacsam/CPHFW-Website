
/* popup and video */

function showPopup(videoId) {
    const videoContainer = document.getElementById("popup-content");
    const youtubeURL = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;

    // Embed the YouTube frame with autoplay enabled
    videoContainer.innerHTML = `<iframe width="90%" height="90%" src="${youtubeURL}" 
                                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

    // Display the popup
    document.getElementById("popup").style.display = "flex";
}

// Close popup when clicking outside the content area
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

/* camera etc. */

// Get elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const photo = document.getElementById('photo');

// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera: ", err);
    });

// Trigger photo take
snap.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 640, 480);

    // Display the photo
    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
});

/* camera popup */

function showPopup2() {
    document.getElementById("popup2").style.display = "flex";
}

// Optional: Close popup when clicking outside the content area
window.onclick = function(event) {
    const popup = document.getElementById("popup2");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}