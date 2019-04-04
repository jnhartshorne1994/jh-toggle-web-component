class ToggleBox extends HTMLElement {
    constructor() {
        super();
        this.initShadowDom();
        this.addClickListener();
    }

    initShadowDom() {
        const template = document.createElement("template");
        const shadowRoot = this.attachShadow({ mode: "open" });

        template.innerHTML = `
        <style>
            :host {
                padding: 10px 10px;
                display: inline-block;
                font-family: 'Arial';
            }

            .toggle-box__content {
                display: none;
            }
        </style>

        <div class="toggle-box">
            <div class="toggle-box__title">
                <slot name="title"></slot>
            </div>
            <div class="toggle-box__content">
                <slot name="content"></slot>
            </div>
        </div>`;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    addClickListener() {
        this.title.addEventListener("click", e => {
            this.toggleContent();
        });
    }

    toggleContent() {
        if (this.getAttribute("open") == "true") {
            this.setAttribute("open", "closed");
            this.content.style.display = "none";
        } else {
            this.setAttribute("open", "true");
            this.content.style.display = "block";
        }
    }

    get content() {
        return this.shadowRoot.querySelector(".toggle-box__content");
    }

    get title() {
        return this.shadowRoot.querySelector(".toggle-box__title");
    }
}

customElements.define("toggle-box", ToggleBox);
