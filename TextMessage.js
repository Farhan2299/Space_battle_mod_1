class TextMessage {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        // create the element
        this.element = document.createElement("div");
        this.element.classList.ass("TextMessage");

        this.element.innterHTML = (`
            <p class="TextMessage_p">${this.text}</p>
            <button class="TextMessage_button">Next</button>
        `)
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element)
    }
    

}