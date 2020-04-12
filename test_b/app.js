'use strict';

class Header {
  constructor(el) {
    this.el = el;

    this.el.addEventListener('click', this.setHeader);
  }

  render() {
    this.el.innerHTML = this.createElement();
  }

  setHeader(e) {
    if (e.target.hasAttribute('data-button')) {
      e.preventDefault();
      const title = this.querySelector('input').value;

      if (title) {
        const h1 = this.querySelector('h1');
        h1.textContent = title;
      }
    }
  }

  createElement() {
    return `
      <h1 class="title">Header</h1>
      <form action="#">
        <input type="text" data-input>
        <button data-button>Set Header</button>
      </form>
    `;
  }
}

const element = document.querySelector('.container');
const header = new Header(element);

header.render();