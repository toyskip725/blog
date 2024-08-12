import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('top-navigation')
export class TopNavigation extends LitElement {
  static styles = css`
    header {
      padding: 20px 10px 0px 10px;
    }
    
    a {
      color: #000;
      text-decoration: none;
    }
  `;

  @property() title: string = "sumi blog";

  render() {
    return html`
      <header>
        <a href="${import.meta.env.BASE_URL}">${this.title}</a>
      </header>
    `;
  }
}