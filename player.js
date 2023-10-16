document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

    
document.getElementById('audio-player').addEventListener('timeupdate', updateProgressBar);

function play(itemName) {
    var songThatIsPlaying = itemName;
    const currentTime = document.querySelector('.current-time');
    const playPause = document.querySelector('.play-pause-image');
    const bottomRectangle = document.querySelector('.bottom-rectangle');
    const progressBarContainer = document.querySelector('.progress-bar-container');
    const songPlayingName = document.querySelector('.song-name');
    const saveButton = document.querySelector('.save-button');
    
    var songUrlInput = itemName.replace(/\s+/g, '');
    var songUrl = 'https://cheekyjmusic.github.io/music/songs/' + songUrlInput + '.mp3';

    updateHeart();

    const audioPlayer = document.getElementById('audio-player');
    updateFavicon(itemName);
    audioPlayer.src = songUrl;
    songPlayingName.textContent = itemName;
    audioPlayer.play();
    currentTime.style.opacity = 1;
    songPlayingName.style.opacity = 1;
    bottomRectangle.style.opacity = 1;
    saveButton.style.opacity = 1;
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

//only for cheeky boomin
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

function favorite(){
    var heart = document.querySelector('.save-button');

    if(heart.src === 'https://cheekyjmusic.github.io/music/assets/heartempty.png'){
        heart.src = 'https://cheekyjmusic.github.io/music/assets/heartselect.png';
        addItem(songThatIsPlaying);
    } else {
        heart.src = 'https://cheekyjmusic.github.io/music/assets/heartempty.png';
        removeItemByName(songThatIsPlaying);
    }
}
function updateHeart() {
    var heart = document.querySelector('.save-button');

    // Retrieve the list of saved songs
    var savedSongs = getSavedSongs();

    // Check if songThatIsPlaying is in the list of saved songs
    var songIsSaved = savedSongs.includes(songThatIsPlaying);

    if (songIsSaved) {
        heart.src = 'https://cheekyjmusic.github.io/music/assets/heartselect.png';
    } else {
        heart.src = 'https://cheekyjmusic.github.io/music/assets/heartempty.png';
    }
}

//saved songs script 
var dbName = "itemDB";
var request = indexedDB.open(dbName, 1);
var db;

request.onerror = function(event) {
    console.error("Failed to open database");
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("items", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("name", "name", { unique: false });
};

// Add a new item to the database
function addItem(newItemName) {
    var transaction = db.transaction(["items"], "readwrite");
    var objectStore = transaction.objectStore("items");

    var newItem = { name: newItemName };
    var request = objectStore.add(newItem);

    request.onsuccess = function(event) {
        // Item added to the database
    };
}

function getSavedSongs(callback) {
    var savedSongs = [];

    var transaction = db.transaction(["items"], "readonly");
    var objectStore = transaction.objectStore("items");

    objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            savedSongs.push(cursor.value.name);
            cursor.continue();
        } else {
            if (typeof callback === "function") {
                callback(savedSongs);
            }
        }
    };
}

// Remove an item from the database by its name
function removeItemByName(name) {
    var transaction = db.transaction(["items"], "readwrite");
    var objectStore = transaction.objectStore("items");
    
    var request = objectStore.index("name").get(name);
    
    request.onsuccess = function(event) {
        var result = event.target.result;
        if (result) {
            var itemId = result.id;
            var deleteRequest = objectStore.delete(itemId);
            
            deleteRequest.onsuccess = function(event) {
                // Item removed from the database
            };
        }
    };
}

