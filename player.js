document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

    
document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

function play(song, itemName) {
    const currentTime = document.querySelector('.current-time');
    const playPause = document.querySelector('.play-pause-image');
    const bottomRectangle = document.querySelector('.bottom-rectangle');
    const progressBarContainer = document.querySelector('.progress-bar-container');

    const audioPlayer = document.getElementById('audio-player');
    playingImage(song);
    updateFavicon(song);
    audioPlayer.src = song;
    audioPlayer.play();
    currentTime.style.opacity = 1;
    bottomRectangle.style.opacity = 1;
    progressBarContainer.style.opacity = 1;
    playPause.src = 'https://cheekyjmusic.github.io/music/assets/pause.svg';

    document.title = itemName + " - Cheeky J";
}


        function playingImage(song) {
    const playingImage = document.querySelector('.song-playing');

    switch (song) {
        case "https://cheekyjmusic.github.io/music/songs/Omelette.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/Scrambled.png";
            break;
        case "https://cheekyjmusic.github.io/music/songs/submarine.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/submarine.png";
            break;
        case "https://cheekyjmusic.github.io/music/songs/sbremix.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/sbremix.jpg";
            break;
        case "https://cheekyjmusic.github.io/music/songs/twinkie.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/twinkie.png";
            break;
        case "https://cheekyjmusic.github.io/music/songs/lincoln.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/lincoln.png";
            break;
        case "https://cheekyjmusic.github.io/music/songs/sumo.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/sumo.png";
            break;
        case "https://cheekyjmusic.github.io/music/songs/tacobell.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/tacobell.png";
            break;
        case "https://cheekyjmusic.github.io/music/songs/suburbsfreestyle.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/suburbsfreestyle.jpg";
            break;
        case "https://cheekyjmusic.github.io/music/songs/metro.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/cheekyboomin.png";
            break;
        case "https://cheekyjmusic.github.io/music/songs/hds.mp3":
            playingImage.src = "https://cheekyjmusic.github.io/music/assets/cheekyboomin.png";
            break;
        case "file:///media/removable/Samsung%20USB/spotyf/music/hammock.wav":
            playingImage.src = "covers/hammock.png";
            break;
        // Add cases for other songs as needed
        default:
            // Set a default image if the song doesn't match any cases
            playingImage.src = "default-image.png";
    }

    playingImage.style.opacity = 1;
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseImage = document.querySelector('.play-pause-container img');

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseImage.src = "https://raw.githubusercontent.com/cheekyjmusic/music/main/assets/pause.svg";
    } else {
        audioPlayer.pause();
        playPauseImage.src = "https://raw.githubusercontent.com/cheekyjmusic/music/main/assets/play.svg";
    }
}
function seek(event) {
    const progressBar = document.querySelector('.progress-bar-container');
    const audioPlayer = document.getElementById('audio-player');

    const clickX = event.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const duration = audioPlayer.duration;

    const newTime = (clickX / progressBarWidth) * duration;
    audioPlayer.currentTime = newTime;
}

// Add an onclick event to the progress bar container
document.querySelector('.progress-bar-container').addEventListener('click', seek);

//no right click
  document.addEventListener('contextmenu', function (event) {
      // Check if the right-clicked element is an image
      if (event.target.tagName === 'IMG') {
        // Prevent the default right-click behavior
        event.preventDefault();
      }
    });

    function updateFavicon(song) {
    const favicon = document.querySelector('link[rel="icon"]');

    if (song === "https://cheekyjmusic.github.io/music/songs/Omelette.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/Scrambled.png";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/submarine.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/submarine.png";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/sbremix.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/sbremix.jpg";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/twinkie.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/twinkie.png";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/lincoln.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/lincoln.png";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/sumo.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/sumo.png";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/tacobell.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/tacobell.png";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/suburbsfreestyle.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/suburbsfreestyle.jpg";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/metro.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/cheekyboomin.png";
    } else if (song === "file:///media/removable/Samsung%20USB/spotyf/music/hammock.wav") {
        favicon.href = "covers/hammock.png";
    } else if (song === "https://cheekyjmusic.github.io/music/songs/hds.mp3") {
        favicon.href = "https://cheekyjmusic.github.io/music/assets/cheekyboomin.png";
    } else {
        favicon.href = "https://raw.githubusercontent.com/cheekyjmusic/music/main/logo.png";
    }
 }
 function updateProgressBar() {
    const audioPlayer = document.getElementById('audio-player');
    const progressBar = document.querySelector('.progress-bar');
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const currentTimeElement = document.getElementById('current-time');

    if (!isNaN(duration)) {
        const progress = (currentTime / duration) * 100;
        progressBar.style.width = progress + '%';

        // Format the current time in minutes and seconds
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        currentTimeElement.textContent = formattedTime;
    }

    requestAnimationFrame(updateProgressBar);
}