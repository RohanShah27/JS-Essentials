document.addEventListener('DOMContentLoaded', () => {
    var speed = prompt("Enter speed");
    const square = document.getElementById("square");
    switch (speed) {
      case "slow": {
        square.style.animation = 'move 10s infinite';
        break;
      }
      case "medium": {
        square.style.animation = 'move 5s infinite';
        break;
      }
      case "fast": {
        square.style.animation = 'move 2s infinite';
        break;
      }
    }
  });
  