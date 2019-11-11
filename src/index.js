export class Accordian extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.initShadowDom();
		this.initiateSetup();
		this.addEventListeners();
	}

	initiateSetup() {
		this.setAttribute('aria-expanded', 'false');
	}

	initShadowDom() {
		const template = document.createElement('template');
		const shadowRoot = this.attachShadow({ mode: 'open' });

		template.innerHTML = `
		<style>
			h2 {
				margin: 0;
			}

            :host .accordian {
				display: block;
				font-family: "Arial";
				margin-bottom: 1rem;
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

			.accordian__title {
				display: block;
				width: 100%;
				font-weight: bold;
				border: none;
				text-align: left;
			}

            .accordian__content {
                display: none;
            }
        </style>

        <div class="accordian">
			<h2>
				<button class="accordian__title">
					${this.title}
				</button>
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
	}

	toggleContent() {
		if (this.getAttribute('aria-expanded') == 'true') {
			this.setAttribute('aria-expanded', 'false');
			this.content.style.display = 'none';
		} else {
			this.setAttribute('aria-expanded', 'true');
			this.content.style.display = 'block';
		}
	}

	static get observedAttributes() {
		return ['title'];
	}

	get content() {
		return this.shadowRoot.querySelector('.accordian__content');
	}

	get title() {
		return this.getAttribute('title');
	}

	set title(title) {
		return this.setAttribute('title', title);
	}
}

customElements.define('jhwc-accordian', Accordian);
