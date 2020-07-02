import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
    <input class="excel__input" type="text" value="Новая таблица">

    <div>

      <div class="excel__button">
        <span class="material-icons">
          delete
        </span>
      </div>

      <div class="excel__button">
        <span class="material-icons">
          cancel
        </span>
      </div>
    `
  }
}