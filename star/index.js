class Star {
  constructor(ele, stars) {
    this.el = ele;
    this.stars = stars;
    this.rate = 0;
    if (window.location.hash) {
      const hashFunction = window.location.hash.split("#")[1];
      // eval(`this.${hashFunction}`);
      eval(`${hashFunction}`);
      // new Function(hashFunction);
    } else {
      this.initialize();
    }
  }
  initialize = () => {
    let fragment = document.createDocumentFragment();
    for (var i = 1; i <= this.stars; i++) {
      let iELem = document.createElement("i");
      iELem.classList.add("fa");
      iELem.classList.add("fa-star-o");
      iELem.dataset.rating = i;
      iELem.addEventListener("mouseover", this.mouseOver);
      iELem.addEventListener("mouseleave", this.mouseOut);
      iELem.addEventListener("click", this.handleClick);
      fragment.appendChild(iELem);
    }
    this.el.appendChild(fragment);
  };
  mouseOver = (e) => {
    let rating = parseInt(e.target.dataset.rating);
    this.fill(rating);
  };
  mouseOut = (e) => {
    let rating = parseInt(e.target.dataset.rating);
    this.fill(rating);
  };
  handleClick = (e) => {
    let rating = parseInt(e.target.dataset.rating);
    let count = document.getElementById("selected");
    this.rate = rating;
    this.fill(rating);
    count.innerHTML = rating;
  };
  fill = (pos) => {
    for (var i = 0; i < this.stars; i++) {
      if (i < pos) this.el.children[i].classList.add("fa-star");
      else this.el.children[i].classList.remove("fa-star");
    }
  };
}
new Star(document.getElementById("star-container"), 5);
