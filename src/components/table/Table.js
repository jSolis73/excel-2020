import { ExcelComponent } from "../../core/ExcelComponent";

export class Table extends ExcelComponent {

  static className = 'excel__table'

  toHTML() {
    return `
      <div class="row">

      <div class="row-info">

      </div>

      <div class="row-data">

        <div class="column">
          A
        </div>

        <div class="column">
          B
        </div>
        
        <div class="column">
          C
        </div>
        
        <div class="column">
          D
        </div>
        <div class="column">
          D
        </div>
        <div class="column">
          D
        </div>
        <div class="column">
          D
        </div>
        <div class="column">
          D
        </div>
        <div class="column">
          D
        </div>
        <div class="column">
          D
        </div>
        <div class="column">
          D
        </div>

      </div>

    </div>

    <div class="row">

      <div class="row-info">
        1
      </div>

      <div class="row-data">

        <div class="cell selected" contenteditable="">EEE</div>
        <div class="cell" contenteditable>AA</div>
        <div class="cell" contenteditable>FFF</div>
        <div class="cell" contenteditable>GGG</div>

      </div>

    </div>
    
    <div class="row">

      <div class="row-info">
        1
      </div>

      <div class="row-data">

        <div class="cell" contenteditable>EEE</div>
        <div class="cell" contenteditable>AA</div>
        <div class="cell" contenteditable>FFF</div>
        <div class="cell" contenteditable>GGG</div>

      </div>

    </div>

    <div class="row">

      <div class="row-info">
        1
      </div>

      <div class="row-data">

        <div class="cell" contenteditable>EEE</div>
        <div class="cell" contenteditable>AA</div>
        <div class="cell" contenteditable>FFF</div>
        <div class="cell" contenteditable>GGG</div>

      </div>

    </div>

    <div class="row">

      <div class="row-info">
        1
      </div>

      <div class="row-data">

        <div class="cell" contenteditable>EEE</div>
        <div class="cell" contenteditable>AA</div>
        <div class="cell" contenteditable>FFF</div>
        <div class="cell" contenteditable>GGG</div>

      </div>

    </div>
    `
  }
}