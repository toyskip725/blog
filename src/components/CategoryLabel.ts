import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { Category } from '../utils/category';
import type { Size } from '../utils/size';

@customElement('category-label')
export class CategoryLabel extends LitElement {
  static styles = css`
    .label {
      width: fit-content;
      color: #fafafa;
      padding: 0.25em 0.75em;
    }
    .normal {
      font-size: 0.875rem;
    }
    .small {
      font-size: 0.75rem;
    }
    .booklog {
      background-color: #0a214f;
    }
    .essay {
      background-color: #007989;
    }
  `;
  @property() category: Category = "booklog";
  @property() size: Size = "normal";

  render() {
    return html`
      <div>
        <p class="label ${this.category} ${this.size}">${this.category}</p>
      </div>
    `;
  }
}