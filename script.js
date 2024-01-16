const button = document.querySelector(".personal-space-of-button");

const rect = button.getBoundingClientRect();
const maxX = window.innerWidth - rect.width - 20;
const maxY = window.innerHeight - rect.height -20;

const moveButton=()=> {
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}

const displayMessageInConsole=()=>{
    button.querySelector("button").textContent="check console"
    countdownTimer(5);
}

const countdownTimer=(durationInSeconds)=>{
    let timeRemaining = durationInSeconds;
    console.clear();
    const timerInterval = setInterval(function () {
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        console.clear();
        console.log("%cNothing, just wanted you to Open the console, thats all\n😁","font-size:30px;");
      } else {
        console.clear();
        console.log("%cplease wait " + timeRemaining + " seconds more 🙏","font-size:15px;");
        timeRemaining--;
      }
    }, 1000);
  }

