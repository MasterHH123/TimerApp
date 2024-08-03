//import { sendNotification } from '@tauri-apps/api/notification';
//const { sendNotification } = window.__TAURI__.notification;
import { convertFileSrc } from '@tauri-apps/api/tauri';

$(document).ready(() => {

    console.log(window.__TAURI__);
    if(window.__TAURI__){
        console.log('Tauri API is loaded');
    } else {
        console.log('Tauri API is not loaded');
    }


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
        const audioSrc = convertFileSrc('static/alarm-clock-loop-90916.mp3');
        if(audioSrc){
            console.log('Found the file!!');
        }
        const audio = new Audio(audioSrc);
        //const audio = document.getElementById('alertSound');
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
                audio.play().then(() => {
                    console.log("Audio is playing");
                }).catch(error => {
                    console.error("Failed to play audio:", error);
                });
                sendNotification({
                    title: 'Timer',
                    body: "Time's up!!!"
                });
                audio.pause();
                audio.currentTime = 0;
                timerDisplay.text("00:00:00");
            }
        }, 1000)


        $('#endTimer').click((e) => {
            e.preventDefault();
            clearInterval(countdown);
            $('#timer').text("00:00:00");
        });
    });

})
 
