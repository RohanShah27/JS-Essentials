class Folders {
  constructor(props) {
    this.number = props.total;
    this.el = props.el;
    this.initialize();
  }
  initialize() {
    let fragment = document.createDocumentFragment();
    for (let i = 1; i <= this.number; i++) {
      let div = document.createElement("div");
      div.setAttribute("id", `folder-${i}`);
      div.setAttribute("class", "folder");
      div.innerHTML = `
        <div>
        Folder ${i}
        <div class="icon" id="icon-${i}"> > </div>
        <div id="content-${i}" style="display:none" class="content">Content of folder ${i}</div>
        </div>
        `;
      div.addEventListener("click", this.handleClick);
      fragment.appendChild(div);
    }
    this.el.appendChild(fragment);
  }
  handleClick(e) {
    const id = e.target.children[e.target.children.length - 1].id;
    let content = document.getElementById(id);
    let display = content.style.display == "none" ? "block" : "none";
    content.style.display = display;
    let span = e.target.children[0];
    let animation =
      content.style.display == "none"
        ? "close 0.2s linear"
        : "open 0.2s linear";
    let rotate =
      content.style.display == "none" ? `rotate(0deg)` : `rotate(90deg)`;
    span.style.animation = animation;
    span.style.transform = rotate;
    console.log(span.style.animation, "animation");
  }
}

new Folders({ total: 5, el: document.getElementById("root-path") });
