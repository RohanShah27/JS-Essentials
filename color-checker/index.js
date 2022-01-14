class ColorGrid {
  constructor(el) {
    this.el = el;
    this.color = this.getRandomColor();
    this.size = 2;
    this.createGrid(this.size);
    this.current;
  }
  createGrid = (n) => {
    let fragment = document.createDocumentFragment();
    this.el.innerHTML = "";
    this.el.style.gridTemplateColumns = "auto ".repeat(n);
    this.el.style.gridTemplateRows = "auto ".repeat(n);
    this.el.style.width = `${5 * n}px`;
    let randomPosition = Math.floor(Math.random() * (n * n));
    if (randomPosition == 0) randomPosition++;
    this.current = randomPosition;
    for (var i = 1; i <= n * n; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("id", i);
      box.style.background = this.color;
      if (randomPosition === i) box.style.filter = "saturate(50%)";
      box.addEventListener("mousedown", this.handleClick);
      fragment.appendChild(box);
    }
    this.el.appendChild(fragment);
  };

  handleClick = (e) => {
    let pos = parseInt(e.target.id);
    if (pos == this.current) {
      this.color = this.getRandomColor();
      this.size++;
      this.createGrid(this.size);
    }
  };

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
}

new ColorGrid(document.getElementById("color-grid"));
