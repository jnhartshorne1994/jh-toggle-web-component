export class Accordian extends HTMLElement {
	constructor() {
		super();
		this.initShadowDom();
		this.addEventListeners();
	}

	connectedCallback() {
		this.initiateSetup();
	}

	initiateSetup() {
		this.setAttribute('tabindex', 0);
		this.setAttribute('aria-expanded', 'false');
		this.title.setAttribute('aria-label', 'Open toggle content');
	}

	initShadowDom() {
		const template = document.createElement('template');
		const shadowRoot = this.attachShadow({ mode: 'open' });

		template.innerHTML = `
        <style>
            :host .accordian {
                display: block;
            }

            :host([default]) .accordian__title {
                padding: 1rem 2rem;
                background: #F3F3F3;
                font-size: 1.25rem;
                margin-bottom: 0;
                margin-top: 0;
            }

            :host([default]) .accordian__content {
                padding: 1rem 2rem;
                background: #FAFAFA;
            }

            :host([bbc]) .accordian {
                display: inline-block;
            }

            :host([bbc]) .accordian__title {
                padding: 1rem 2rem;
                background: #FFD230;
                font-size: 1.25rem;
                color: #111111;
                margin-bottom: 0;
                margin-top: 0;
            }

            :host([bbc]) .accordian__content {
                padding: 1rem 2rem;
                background: #F7F7F5;
                color: #111111;
            }

            .accordian__content {
                display: none;
            }
        </style>

        <div class="accordian">
            <h2 class="accordian__title" aria-label="Open toggle content">
                <slot name="title"></slot>
            </h2>
            <div class="accordian__content">
                <slot name="content"></slot>
            </div>
        </div>`;

		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	addEventListeners() {
		this.addEventListener('click', e => {
			this.toggleContent();
		});

		this.addEventListener('keydown', e => {
			if (e.keyCode === 13 || e.keyCode === 32) {
				this.toggleContent();
			}
		});
	}

	toggleContent() {
		if (this.getAttribute('aria-expanded') == 'true') {
			this.setAttribute('aria-expanded', 'false');
			this.title.setAttribute('aria-label', 'Open toggle content');
			this.content.style.display = 'none';
		} else {
			this.setAttribute('aria-expanded', 'true');
			this.title.setAttribute('aria-label', 'Close toggle content');
			this.content.style.display = 'block';
		}
	}

	get content() {
		return this.shadowRoot.querySelector('.accordian__content');
	}

	get title() {
		return this.shadowRoot.querySelector('.accordian__title');
	}
}

customElements.define('jhwc-accordian', Accordian);
