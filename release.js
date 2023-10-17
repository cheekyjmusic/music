var targetDate = new Date('2023-10-20T14:00:00');

function checkUpcoming() {
    var currentDate = new Date();
    var upcoming = document.getElementById('upcoming');
    var announcement = document.getElementById('announcement');

    if (currentDate <= targetDate) {
        upcoming.style.display = 'none';
        upcoming.style.pointerEvents = 'none';

        var timeDifference = targetDate - currentDate;
        var daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var secondsLeft = Math.floor((timeDifference % (1000 * 60) / 1000));

        announcement.textContent = 'Hammock out in ' + daysLeft + ' days, ' + hoursLeft + ' hours, ' + minutesLeft + ' minutes, ' + secondsLeft + ' seconds';
    } else {
        upcoming.style.display = 'inline-block';
        upcoming.style.pointerEvents = 'auto';
        announcement.textContent = 'Hammock Out Now!';
    }
}

setInterval(checkUpcoming, 1000);
