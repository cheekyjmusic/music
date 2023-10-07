document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

    
document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

function play(song, itemName) {
    const currentTime = document.querySelector('.current-time');
    const playPause = document.querySelector('.play-pause-image');
    const bottomRectangle = document.querySelector('.bottom-rectangle');
    const progressBarContainer = document.querySelector('.progress-bar-container');

    const audioPlayer = document.getElementById('audio-player');
    updateFavicon(itemName);
    audioPlayer.src = song;
    audioPlayer.play();
    currentTime.style.opacity = 1;
    bottomRectangle.style.opacity = 1;
    progressBarContainer.style.opacity = 1;
    playPause.src = 'https://cheekyjmusic.github.io/music/assets/pause.svg';

    document.title = itemName + " - Cheeky J";
}

//script to pause with space key
document.addEventListener('keydown', function(event) {
    togglePlayPause();
});

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
    const playingImage = document.querySelector('.song-playing');

    if (song === "Omelette") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/Scrambled.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/Scrambled.png";
    } else if (song === "Submarine") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/submarine.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/submarine.png";
    } else if (song === "Suburbs Freestyle Remix") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/sbremix.jpg";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/sbremix.jpg";
    } else if (song === "Corner Store Twinkie") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/twinkie.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/twinkie.png";
    } else if (song === "1860s Lincoln") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/lincoln.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/lincoln.png";
    } else if (song === "Sumo Wrestler") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/sumo.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/sumo.png";
    } else if (song === "Tacobell Diss") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/tacobell.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/tacobell.png";
    } else if (song === "Suburbs Freestyle") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/suburbsfreestyle.jpg";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/suburbsfreestyle.jpg";
    } else if (song === "Big Hippo") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/bighippo.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/bighippo.png";
    } else if (song === "Hammock") {
        favicon.href = "covers/hammock.png";
    } else if (song === "Hotdog Stand" || song === "Metro Station" || song === "Cheeky Boomin" || song === "Mr Clean") {
        playingImage.src = "https://cheekyjmusic.github.io/music/assets/cheekyboomin.png";
        favicon.href = "https://cheekyjmusic.github.io/music/assets/cheekyboomin.png";
    } else {
        favicon.href = "https://raw.githubusercontent.com/cheekyjmusic/music/main/logo.png";
    }
    playingImage.style.opacity = 1;
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
