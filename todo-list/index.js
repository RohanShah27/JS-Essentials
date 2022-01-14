class Todo {
  constructor(el, items) {
    this.el = el;
    this.items = items;
    this.initialize();
  }
  initialize = () => {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    let fragment = document.createDocumentFragment();
    for (var i = 0; i < this.items.length; i++) {
      let div = document.createElement("div");
      div.setAttribute(`class`, "todo-item");
      div.setAttribute(`id`, `todo-item-${i}`);
      const { title, desc } = this.items[i];
      let innerHtml = `
            <h2>${title}</h2>
            <span class="item-desc">${desc}</span>
            `;
      div.innerHTML = innerHtml;
      let deleteBtn = document.createElement("div");
      deleteBtn.setAttribute(`class`, "delete-item");
      deleteBtn.setAttribute(`id`, `delete-item-${i}`);
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener("click", this.handleDelete);
      div.appendChild(deleteBtn);
      fragment.appendChild(div);
    }
    this.el.appendChild(fragment);
    let createBtn = document.getElementById(`create-button`);
    createBtn.innerHTML = `+`;
    createBtn.addEventListener("click", this.handleCreate);
  };
  handleDelete = (e) => {
    const itemPos = parseInt(e.target.id.split("-")[2]);
    this.items.splice(itemPos, 1);
    let div = document.getElementById(`todo-item-${itemPos}`);
    div.remove();
  };
  handleCreate = () => {
    document.getElementById("modal").style.display = "block";
    let fragment = document.createDocumentFragment();
    let div = document.createElement("div");
    div.innerHTML = "Add";
    div.setAttribute("id", "add-btn");
    div.addEventListener("click", this.handleAdd);
    fragment.appendChild(div);
    document.getElementById("modal").appendChild(fragment);
  };
  handleAdd = () => {
    let title = document.getElementById("mytext").value;
    const todo = { title, desc: "Some desc" };
    this.items.push(todo);
    let fragment = document.createDocumentFragment();
    let div = document.createElement("div");
    div.setAttribute(`class`, "todo-item");
    div.setAttribute(`id`, `todo-item-${this.items.length - 1}`);
    let innerHtml = `
            <h2>${this.items[this.items.length - 1].title}</h2>
            <span class="item-desc">${
              this.items[this.items.length - 1].desc
            }</span>
            `;
    div.innerHTML = innerHtml;
    let deleteBtn = document.createElement("div");
    deleteBtn.setAttribute(`class`, "delete-item");
    deleteBtn.setAttribute(`id`, `delete-item-${this.items.length - 1}`);
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", this.handleDelete);
    div.appendChild(deleteBtn);
    fragment.appendChild(div);
    this.el.appendChild(fragment);
    document.getElementById("modal").style.display = "none";
    document.getElementById("add-btn").remove();
  };
}

new Todo(document.getElementById("item-list"), [
  { title: "Get vegetables", desc: "Some desc" },
  { title: "Complete homeword", desc: "Some desc" },
]);
