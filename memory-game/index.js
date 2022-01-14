class Memory {
  constructor(element) {
    this.el = element;
    this.pattern = [];
    this.level = 1;
    this.play = false;
    this.counter = 0;
    this.score = 1;
    this.text = "";
    this.initialize();
  }
  initialize = async () => {
    let fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-item");
      div.setAttribute("id", `grid-${i}`);
      div.addEventListener("mousedown", this.handleClick);
      fragment.appendChild(div);
    }
    let status = document.createElement("div");
    status.classList.add("status");
    status.innerHTML = this.text;
    status.setAttribute("id", `status`);
    fragment.appendChild(status);
    this.el.appendChild(fragment);
    await this.showPattern();
    this.play = true;
  };
  handleClick = async (e) => {
    if (this.play) {
      let div = document.getElementById(`${e.target.id}`);
      console.log(e.target.id.split("-")[1] == this.pattern[this.counter]);
      if (e.target.id.split("-")[1] == this.pattern[this.counter]) {
        div.classList.add("selected");
        await new Promise((resolve) => setTimeout(resolve, 500));
        div.classList.remove("selected");
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (this.counter == this.pattern.length - 1) {
          this.play = false;
          this.level++;
          this.score++;
          this.counter++;
          document.getElementById(
            "score"
          ).innerHTML = ` Current Score - ${this.score}`;
          await this.showPattern();
          this.play = true;
        } else {
          this.counter++;
        }
      } else {
        div.classList.add("error");
        await new Promise((resolve) => setTimeout(resolve, 500));
        div.classList.remove("error");
        await new Promise((resolve) => setTimeout(resolve, 500));
        this.play = false;
        this.level = 1;
        this.score = 0;
        this.text = "Game over";
        document.getElementById("status").innerHTML = this.text;
      }
    }
  };

  showPattern = async () => {
    this.pattern = [];
    this.counter = 0;
    for (var i = 0; i < this.level; i++) {
      let random = Math.floor(Math.random() * 4);
      this.pattern.push(random);
      await this.toggleSelected(random);
    }
  };
  toggleSelected = async (position) => {
    let cell = document.getElementById(`grid-${position}`);
    cell.classList.add("selected");
    await new Promise((resolve) => setTimeout(resolve, 500));
    cell.classList.remove("selected");
    await new Promise((resolve) => setTimeout(resolve, 500));
  };
}
new Memory(document.getElementById("memory-container"));
