var targetDate = new Date('2023-10-11T16:00:00');

        function checkUpcoming() {
         var currentDate = new Date();
         var upcoming = document.getElementById('upcoming');

        if (currentDate <= targetDate) {
            upcoming.style.display = 'none';
            upcoming.style.pointerEvents = 'none';
         } else {
            upcoming.style.display = 'inline-block';
            upcoming.style.pointerEvents = 'auto';
         }
        }

setInterval(checkUpcoming, 1000);