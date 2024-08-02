$(document).ready(() => {
    $('#startTimer').click((e) => {
        e.preventDefault();
        let countdown;
        const hour = parseInt($('#hours').val());
        const minutes = parseInt($('#minutes').val());
        const seconds = parseInt($('#seconds').val());
        console.log('Hour:', hour, 'Minute: ', minutes, 'Seconds: ', seconds);
        let timeInSeconds = (hour * 3600) + (minutes * 60 ) + seconds;
        console.log('timeInSeconds: ', timeInSeconds);
        const timerDisplay = $('#timer');
        clearInterval(countdown);
        countdown = setInterval(() => {
            if(timeInSeconds > 0){
                const hrs = Math.floor(timeInSeconds / 3600);
                const mins = Math.floor((timeInSeconds % 3600) / 60);
                const secs = Math.floor(timeInSeconds % 60);

                timerDisplay.text(`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
                timeInSeconds--;
                
            } else {
                clearInterval(countdown);
                timerDisplay.text("00:00:00");
                alert("Time's up bucko!!!");
            }
        }, 1000)


        $('#endTimer').click((e) => {
            e.preventDefault();
            clearInterval(countdown);
            $('#timer').text("00:00:00");
        });
    });

})
 
