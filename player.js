document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

    
document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

function play(itemName) {
    var songThatIsPlaying = itemName;
    const currentTime = document.querySelector('.current-time');
    const playPause = document.querySelector('.play-pause-image');
    const bottomRectangle = document.querySelector('.bottom-rectangle');
    const progressBarContainer = document.querySelector('.progress-bar-container');
    const songPlayingName = document.querySelector('.song-name');
    
    var songUrlInput = itemName.replace(/\s+/g, '');
    var songUrl = 'https://cheekyjmusic.github.io/music/songs/' + songUrlInput + '.mp3';

    const audioPlayer = document.getElementById('audio-player');
    updateFavicon(itemName);
    audioPlayer.src = songUrl;
    songPlayingName.textContent = itemName;
    audioPlayer.play();
    currentTime.style.opacity = 1;
    songPlayingName.style.opacity = 1;
    bottomRectangle.style.opacity = 1;
    progressBarContainer.style.opacity = 1;
    playPause.src = 'https://cheekyjmusic.github.io/music/assets/pause.svg';

    document.title = itemName + " - Cheeky J";
}

//script to pause with space key
document.addEventListener('keydown', function(event) {
    if (event.key === ' '){
        event.preventDefault();
        togglePlayPause();
    }
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

document.querySelector('.progress-bar-container').addEventListener('click', seek);

//no right click
  document.addEventListener('contextmenu', function (event) {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
      }
    });

    function updateFavicon(song) {
    const favicon = document.querySelector('link[rel="icon"]');
    const playingImage = document.querySelector('.song-playing');

    if (song === 'Metro Station' || song === 'Hotdog Stand' || song === 'Mr Clean' || song === 'Cheeky Boomin') {
        favicon.href = 'https://cheekyjmusic.github.io/music/assets/cheekyboomin.png';
        playingImage.src = 'https://cheekyjmusic.github.io/music/assets/cheekyboomin.png';
    } else {
        var songImgUrl = song.replace(/\s+/g, '');
        favicon.href = 'https://cheekyjmusic.github.io/music/assets/' + songImgUrl + '.png';
        playingImage.src = 'https://cheekyjmusic.github.io/music/assets/' + songImgUrl + '.png';
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

audioPlayer.addEventListener('ended', playNext);

function playNext() {
    const currentURL = window.location.href;

    if (currentURL.includes('https://cheekyjmusic.github.io/music/cheekyboomin.html')) {
        if(audioPlayer.src === 'https://cheekyjmusic.github.io/music/songs/CheekyBoomin.mp3'){
          play('Submarine');
     } else if(audioPlayer.src === 'https://cheekyjmusic.github.io/music/songs/Submarine.mp3'){
         play('Hotdog Stand');
     } else if(audioPlayer.src === 'https://cheekyjmusic.github.io/music/songs/HotdogStand.mp3'){
            play('Metro Station');
     } else if(audioPlayer.src === 'https://cheekyjmusic.github.io/music/songs/MetroStation.mp3'){
            play('Suburbs Freestyle Remix');
     } else if(audioPlayer.src === 'https://cheekyjmusic.github.io/music/songs/SuburbsFreestyleRemix.mp3'){
         play('Mr Clean');
     } else if(audioPlayer.src === 'https://cheekyjmusic.github.io/music/songs/MrClean.mp3'){
            play('Cheeky Boomin');
     }
}
}

function redirect(url){
    window.location.href = url;
}