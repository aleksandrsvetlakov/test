'use strict'

class Header {
  constructor(element) {
    this.el = element
    
    this.el.addEventListener('focusout', this.setHeader)
  }

  render() {
    this.el.innerHTML = this.createElement()
  }

  setHeader(e) {
    if (e.target.hasAttribute('data-input') && e.target.value !== '') {
      const h1 = this.querySelector('.title')

      h1.textContent = e.target.value
    }
  }

  createElement() {
    return `
      <h1 class="title">Header</h1>
      <form action="#">
        <input type="text" data-input>
      </form>
    `
  }
}

const element = document.querySelector('.container')
const header = new Header(element)

header.render()