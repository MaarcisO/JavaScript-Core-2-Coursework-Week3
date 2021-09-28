
let setAlarmBtn = document.getElementById("set");
let stopBtn = document.getElementById("stop");
let timeRemainingText = document.getElementById("timeRemaining");

let intervalID;

function setAlarm() {
  let setTimeValue = document.getElementById("alarmSet").value;
  let count=setTimeValue;
  
  setAlarmBtn.addEventListener("click", function(){
    intervalID = setInterval(function() {
      
      count -= 1;
      
      if(count == 0){
        pauseAlarm();
        playAlarm();
        console.log("alarm!");
        clearInterval(intervalID); 
    }
      
      timeRemainingText.textContent = "Time Remaining: " + count;
    }, 1000);    
  })
}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
