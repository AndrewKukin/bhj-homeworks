const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const holes = document.getElementsByClassName("hole");

let score = 0;
let losses = 0;

for (let i = 0; i < holes.length; i++) {
  holes[i].onclick = function() {
    const clickHole = holes[i];
    if (clickHole.classList.contains("hole_has-mole")) {
      score += 1;
      dead.textContent = score;
      
      if (score >= 10) {
        alert("Поздравляю! Вы победили!");
        
        dead.textContent = 0;
        lost.textContent = 0;

        score = 0;
        losses = 0;
      }
    } else {
      losses += 1;
      lost.textContent = losses;

      if (losses >= 5) {
        alert("Игра окончена. Вы проиграли!");
        
        dead.textContent = 0;
        lost.textContent = 0;

        score = 0;
        losses = 0;
      }
    }
  }
}