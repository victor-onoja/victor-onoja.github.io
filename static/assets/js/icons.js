import python from '../icons/python.svg?raw ';
import javascript from '../icons/java-script.svg?raw ';

const icons = {
    "python": python,
    "javascript": javascript
}

class SVGIcon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = icons[this.getAttribute('source')];
    };
}

// for loop to register icons
customElements.define('svg-icon', SVGIcon);