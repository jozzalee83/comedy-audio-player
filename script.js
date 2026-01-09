document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById('audio-player');
    const trackTitle = document.getElementById('track-title');
    const tracks = document.querySelectorAll('.track');

    tracks.forEach(track => {
        track.addEventListener('click', () => {
            // Remove active class from all
            tracks.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked track
            track.classList.add('active');

            // Change Source and Play
            const source = track.getAttribute('data-src');
            audioPlayer.src = source;
            trackTitle.innerText = track.innerText;
            audioPlayer.play();
        });
    });

    // Auto-play next track logic
    audioPlayer.onended = function() {
        let currentTrack = document.querySelector('.track.active');
        let nextTrack = currentTrack ? currentTrack.nextElementSibling : null;
        
        if (nextTrack) {
            nextTrack.click();
        }
    };
});
