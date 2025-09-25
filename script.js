document.addEventListener('DOMContentLoaded', () => {
    // Get the main video player iframe element
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Get all elements with the class 'gallery-item'
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Attach a click listener to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the video URL from the 'data-video' attribute
            const videoLink = item.getAttribute('data-video');
            
            // If a link exists, update the iframe's src to load the new video
            if (videoLink) {
                videoPlayer.src = videoLink;
            }
        });
    });
});
