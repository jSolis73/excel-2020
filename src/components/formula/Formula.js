import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
    <div class="formula__info"> fx</div>
    <div class="formula__input" contenteditable></div>
    `
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim())
    
  }

  onClick(event) {
    console.log('mk')
  }

}