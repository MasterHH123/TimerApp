// ../../../../node_modules/@tauri-apps/api/tauri.js
function convertFileSrc(filePath, protocol = "asset") {
  return window.__TAURI__.convertFileSrc(filePath, protocol);
}

// ../../../../node_modules/@tauri-apps/api/notification.js
function sendNotification(options) {
  if (typeof options === "string") {
    new window.Notification(options);
  } else {
    new window.Notification(options.title, options);
  }
}

// src/static/bundle.js
window.sendNotification = sendNotification;
$(document).ready(() => {
  console.log("Tauri API:", window.__TAURI__);
  if (window.__TAURI__) {
    console.log("Tauri API is loaded");
  } else {
    console.log("Tauri API is not loaded");
  }

  $("#startTimer").click((e) => {
    e.preventDefault();
    let countdown;
    const hour = parseInt($("#hours").val());
    const minutes = parseInt($("#minutes").val());
    const seconds = parseInt($("#seconds").val());
    console.log("Hour:", hour, "Minute:", minutes, "Seconds:", seconds);
    let timeInSeconds = hour * 3600 + minutes * 60 + seconds;
    console.log("timeInSeconds:", timeInSeconds);
    const timerDisplay = $("#timer");
    const audio  = document.getElementById('alertSound');
    //only way I could it to play audio when the timer reached 0.
    $('#playAudio').click((e) => {
      e.preventDefault();
      if(audio){
        audio.muted = false;
        audio.volume = 1.0;
        audio.play().then(() => {
          console.log("Audio is playing");
        }).catch((error) => {
          console.error("Failed to play audio:", error);
        });
      } else {
        console.error("Audio element not found");
      }
    });
    console.log("Audio element:", audio);
    clearInterval(countdown);
    countdown = setInterval(() => {
      if (timeInSeconds > 0) {
        const hrs = Math.floor(timeInSeconds / 3600);
        const mins = Math.floor(timeInSeconds % 3600 / 60);
        const secs = Math.floor(timeInSeconds % 60);
        timerDisplay.text(`${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`);
        timeInSeconds--;
      } else {
        clearInterval(countdown);
        audio.play();
        sendNotification({
          title: "Timer",
          body: "Time's up!!!"
        });
        audio.onended = () => {
          audio.currentTime = 0;
        }
        timerDisplay.text("00:00:00");
      }
    }, 1000);
    $("#endTimer").click((e) => {
      e.preventDefault();
      clearInterval(countdown);
      $("#timer").text("00:00:00");
    });
  });
});
