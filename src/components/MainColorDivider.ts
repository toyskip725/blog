import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('main-color-divider')
export class MainColorDivider extends LitElement {
  static styles = css`
    .divider {
      padding: 0px 0px 5px 0px;
    }
  `;

  render() {
    return html`
      <div style="divider">
        <svg width="120" height="10" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="0" width="10" height="10" stroke=#0a214f fill=#0a214f stroke-width="1"/>
          <rect x="40" y="0" width="10" height="10" stroke=#007989 fill=#007989 stroke-width="1"/>
          <rect x="70" y="0" width="10" height="10" stroke=#a22041 fill=#a22041 stroke-width="1"/>
          <rect x="100" y="0" width="10" height="10" stroke=#cd5e3c fill=#cd5e3c stroke-width="1"/>
        </svg>
      </div>
    `;
  }
}