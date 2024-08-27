import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import type { Size } from '../utils/size';

@customElement('static-tag')
export class StaticTag extends LitElement {
  static styles = css`
    .tag {
      width: fit-content;
      border: solid 1px #2a2a31;
      margin: 0.25em 1em 0.25em 0em;
    }
    .normal {
      color: #2a2a31;
      font-size: 0.875rem;
      display: inline-block;
      padding: 0.25em 0.75em;
    }
    .small {
      color: #2a2a31;
      font-size: 0.75rem;
      display: inline-block;
      padding: 0.25em 0.75em;
    }
  `;

  @property() tagName: string = "";
  @property() size: Size = "normal";

  render() {
    return html`
      <div class="tag">
        <span class=${this.size}>${this.tagName}</span>
      </div>
    `;
  }
}