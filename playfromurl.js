window.onload = loadUrlVar;

        function loadUrlVar(){
            const urlParams = new URLSearchParams(window.location.search);
            const loadInSong = urlParams.get("loadInSong");
            playLoad(loadInSong);
        }
        


function playLoad(songToPlay){
    if (songToPlay === 'Omelette'){
        play('https://cheekyjmusic.github.io/music/songs/Omelette.mp3', 'Omelette');
    } else if (songToPlay === 'Submarine'){
        play('https://cheekyjmusic.github.io/music/songs/submarine.mp3', 'Submarine');
    } else if (songToPlay === 'Suburbs Freestyle Remix'){
        play('https://cheekyjmusic.github.io/music/songs/sbremix.mp3', 'Suburbs Freestyle Remix');
    } else if (songToPlay === 'Corner Store Twinkie'){
        play('https://cheekyjmusic.github.io/music/songs/twinkie.mp3', 'Corner Store Twinkie');
    } else if (songToPlay === '1860s Lincoln'){
        play('https://cheekyjmusic.github.io/music/songs/lincoln.mp3', '1860s Lincoln');
    } else if (songToPlay === 'Sumo Wrestler'){
        play('https://cheekyjmusic.github.io/music/songs/sumo.mp3', 'Sumo Wrestler');
    } else if (songToPlay === 'Tacobell Diss'){
        play('https://cheekyjmusic.github.io/music/songs/tacobell.mp3', 'Tacobell Diss');
    } else if (songToPlay === 'Suburbs Freestyle'){
        play('https://cheekyjmusic.github.io/music/songs/suburbsfreestyle.mp3', 'Suburbs Freestyle');
    } else if (songToPlay === 'Cheeky Boomin'){
        play('https://cheekyjmusic.github.io/music/songs/Cheeky Boomin.mp3','Cheeky Boomin');
    } else if (songToPlay === 'Hotdog Stand'){
        play('https://cheekyjmusic.github.io/music/songs/hds.mp3','Hotdog Stand');
    } else if (songToPlay === 'Metro Station'){
        play('https://cheekyjmusic.github.io/music/songs/metro.mp3','Metro Station');
    } else if (songToPlay === 'Mr Clean'){
        play('https://cheekyjmusic.github.io/music/songs/mrclean.mp3','Mr Clean');
    } else if (songToPlay === 'Suburbs Freestyle Remix'){
        play('https://cheekyjmusic.github.io/music/songs/sbremix.mp3','Suburbs Freestyle Remix');
    } else if (songToPlay === 'Big Hippo'){
        playRelease('https://cheekyjmusic.github.io/music/songs/bighippo.mp3','Big Hippo');
    }
}