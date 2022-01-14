class Gridgame{
    constructor(element,size, cName) {
        this.size = size;
        this.className = cName;
        this.element = element;
        this.initialize();
        this.addButtons();
        this.x = 1;
        this.y = 1;
    }

    initialize = () => {
        this.element.style.gridTemplateColumns = "auto ".repeat(this.size); // repeat grid for n number of times
        // create individual grid items
        const fragment = document.createDocumentFragment();
        let div = document.createElement('div');
        div.classList.add('grid-item');
        for (var i = 1; i <= this.size; i++){
            for (var j = 1; j <= this.size; j++){
                if(i===1&&j===1) div.classList.add('selected') // show the first cell as selected always
                div.setAttribute('id', `item-${i}-${j}`);
                fragment.appendChild(div);
                div = document.createElement('div');
                div.classList.add('grid-item');
            }
        }
        this.element.appendChild(fragment);
    }

    addButtons = () => {
        const fragment = document.createDocumentFragment();
        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('id', 'button-container');
        let buttons = `
        <button id='up'>Up</button>
        <button id='down'>Down</button>
        <button id='left'>Left</button>
        <button id='right'>Right</button>
        `;
        buttonContainer.innerHTML = buttons;
        buttonContainer.style.margin='10px'
        fragment.appendChild(buttonContainer);
        document.getElementById('game').appendChild(fragment);
        // add event listner for buttons to handle on click events
        buttonContainer.addEventListener('click',this.handleButtonClick)
    }

    handleButtonClick = (event) => {
        let button = event.target.id;
        let selectedBox = document.getElementById(`item-${this.x}-${this.y}`);
        switch (button) {
            case 'up': {
                if (this.x !== 1) {
                    selectedBox.classList.remove('selected');
                    this.x --;
                }
                break;
            }
            case 'down': {
                if (this.x !== this.size) {
                    selectedBox.classList.remove('selected');
                    this.x ++;
                }
                break;
            }
            case 'left': {
                if (this.y !== 1) {
                    selectedBox.classList.remove('selected');
                    this.y --;
                }
                break;
            }
            case 'right': {
                if (this.y !== this.size) {
                    selectedBox.classList.remove('selected');
                    this.y ++;
                }
                break;
            }
        }
        document.getElementById(`item-${this.x}-${this.y}`).classList.add('selected');
    }
}

new Gridgame(document.getElementById("container"),4, "game");