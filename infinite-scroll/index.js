class Quotes {
  constructor(ele) {
    this.el = ele;
    this.page = 1;
    this.limit = 10;
    this.total = 0;
    this.initialize();
  }
  changeTheme = () => {
    let root = document.querySelector(":root");
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--font-color", "white");
  };
  initialize = async () => {
    const quotes = await this.getQuotes(this.page, this.limit);
    this.addEventListner();
    if (quotes.data.length > 0) {
      this.total = quotes.total;
      let fragment = document.createDocumentFragment();
      let button = document.createElement("div");
      button.innerHTML = `Change theme`;
      button.addEventListener("click", this.changeTheme);
      fragment.appendChild(button);
      for (var i = 0; i < quotes.data.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", `quote-${i}`);
        div.setAttribute("class", "quote-child");
        div.innerHTML = `
            <h3>${quotes.data[i]["quote"]}</h3>
            <span class="author">Author : ${quotes.data[i]["author"]}</span>
            `;
        fragment.appendChild(div);
      }
      this.el.appendChild(fragment);
    }
  };

  getQuotes = async (page, limit) => {
    const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const response = await fetch(API_URL);
    // handle 404
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
  };

  hideLoader = () => {
    document.getElementById("loader").classList.remove("show");
  };

  showLoader = () => {
    document.getElementById("loader").classList.add("show");
  };

  addEventListner = () => {
    window.addEventListener(
      "scroll",
      () => {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;

        if (
          scrollTop + clientHeight >= scrollHeight - 5 &&
          this.hasMoreQuotes(this.page, this.limit, this.total)
        ) {
          this.page++;
          this.loadQuotes(this.page, this.limit);
        }
      },
      {
        passive: true,
      }
    );
  };

  hasMoreQuotes = (page) => {
    if (page >= 10) return false;
    return true;
  };
  loadQuotes = async () => {
    this.showLoader();
    await this.sleep();
    this.initialize();
    this.hideLoader();
  };
  sleep = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    });
  };
}
new Quotes(document.getElementById("quotes-parent"));
