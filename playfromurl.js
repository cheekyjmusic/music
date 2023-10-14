window.onload = loadUrlVar;

        function loadUrlVar(){
            const urlParams = new URLSearchParams(window.location.search);
            const loadInSong = urlParams.get("loadInSong");
            play(loadInSong);
        }