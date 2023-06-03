//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function(event) {
  var video = document.getElementById("video");
  var audio = document.getElementById("audio");
  var soundBtns = document.getElementsByClassName("sound-btn");
  var timeSelect = document.getElementById("time-select");
  var timeDisplay = document.querySelector(".time-display");
  var playBtn = document.querySelector(".play");

  // Function to switch between sound options
  function switchSound(sound) {
    audio.src = "Sounds/" + sound + ".mp3";
    video.src = "Videos/" + sound + ".mp4";
    video.play();
    audio.play();
  }

  // Event listener for sound buttons
  for (var i = 0; i < soundBtns.length; i++) {
    soundBtns[i].addEventListener("click", function() {
      var sound = this.getAttribute("data-sound");
      for (var j = 0; j < soundBtns.length; j++) {
        soundBtns[j].classList.remove("active");
      }
      this.classList.add("active");
      switchSound(sound);
    });
  }

  // Event listener for time buttons
  timeSelect.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      var time = event.target.id;
      var mins = parseInt(time.split("-")[0]);
      var seconds = 0;
      if (mins > 0) {
        seconds = mins * 60;
      }
      timeDisplay.textContent = padTime(mins) + ":" + padTime(seconds);
    }
  });

  // Function to pad time with leading zero if needed
  function padTime(time) {
    return (time < 10 ? "0" : "") + time
