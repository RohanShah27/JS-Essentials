class TicTacToe {
  constructor(el) {
    this.el = el;
    this.winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.user = new Array(8).fill([]);
    this.computer = new Array(8).fill([]);
    this.playerTurn = true;
    this.initialize();
  }
  initialize = () => {
    let fragment = document.createDocumentFragment();
    for (var i = 0; i < 9; i++) {
      let div = document.createElement("div");
      div.setAttribute("id", `grid-item-${i}`);
      div.setAttribute("class", "grid-item");
      div.addEventListener("click", this.handleClick);
      div.innerHTML = `<span class="play">&nbsp</span>`;
      fragment.appendChild(div);
    }
    this.el.appendChild(fragment);
  };
  handleClick = (e) => {
    const id = e.target.id;
    let div = document.getElementById(id);
    console.log(e.target.id, "ID of element");
    div.innerHTML = `<span class="play"> ${
      this.playerTurn ? `O` : `X`
    } </span>`;
    div.removeEventListener("click", this.handleClick);
    let split = id.split("-");
    if (this.playerTurn) {
      for (var i = 0; i < this.user.length; i++) {
        if (this.user[i].length !== 3) {
          this.user[i].push(+split[split.length - 1]);
          break;
        }
      }
      this.playerTurn = false;
    } else {
      for (var i = 0; i < this.computer.length; i++) {
        if (this.computer[i].length !== 3) {
          this.computer[i].push(+split[split.length - 1]);
          break;
        }
      }
      this.playerTurn = true;
    }
    this.checkifWon();
  };
  checkifWon = () => {
    var winner;
    for (var i = 0; i < this.winning.length; i++) {
      console.log(
        JSON.stringify(this.winning),
        JSON.stringify(this.computer[i])
      );
      if (
        JSON.stringify(this.winning).includes(
          JSON.stringify(this.user[i].sort())
        )
      ) {
        winner = "player 1";
        break;
      } else if (
        JSON.stringify(this.winning).includes(
          JSON.stringify(this.computer[i].sort())
        )
      ) {
        winner = "player 2";
        break;
      }
    }
    if (winner) alert(`${winner} won`);
  };
  // computerPlay = () => {
  //   console.log("called");
  //   let random = Math.floor(Math.random() * 9);
  //   console.log(random, "Random number");
  //   if (!this.user.includes(random)) {
  //     this.computerPlay();
  //   }
  //   console.log(random, "random");
  //   let div = document.getElementById(`grid-item-${random}`);
  //   div.innerHTML = `<span class="play"> X </span>`;
  //   div.removeEventListener("click", this.handleClick);
  //   for (var i = 0; i < this.computer.length; i++) {
  //     if (this.computer[i].length !== 3) {
  //       this.computer[i].push(random);
  //     }
  //   }
  //   this.checkifWon();
  // };
}

new TicTacToe(document.getElementById("t-t-t"));
