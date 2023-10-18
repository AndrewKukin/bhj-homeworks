const timer = document.getElementById("timer");

let counter = 0;
const intervalId = setInterval(() => {
  counter += 1;
  timer.textContent = 60 - counter;
  if (timer.textContent <= 0) {
    timer.textContent = 0;
    clearInterval(intervalId); 
    alert('Вы победили!')
  }
}, 1000);