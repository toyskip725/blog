import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { DateUtility } from '../utils/dateutil';
import './StaticTag';
import './CategoryLabel';

@customElement('link-card')
export class LinkCard extends LitElement {
  static styles = css`
    .link-card {
      text-decoration: none;
    }
    .link-card-wrapper {
      max-width: 400px;
      height: 200px;
      border: solid 1px #34343d;
      position: relative;
      margin: 0.5em;
    }
    .tag-wrapper {
      display: flex;
      padding: 0em 1em;
    }
    .link-card-title {
      color: #34343d;
      font-size: 1.2rem;
      padding: 0.5em 1em;
      margin: 0em;
    }
    .link-last-updated {
      color: #999;
      font-size: small;
      position: absolute;
      bottom: 0em;
      right: 1.5em;
    }
  `;

  @property() title: string = "";
  @property() category: string = "";
  @property() url: string = "";
  @property() lastUpdated: Date | null = null;
  @property() tags: string[] = ["aaa"];

  render() {
    const lastUpdatedHtml = this.lastUpdated ? DateUtility.format(this.lastUpdated) : "";

    return html`
      <div class="link-card-wrapper">
        <category-label category=${this.category}></category-label>
        <a href=${this.url} class="link-card">
          <p class="link-card-title">${this.title}</p>
        </a>
        <div class="tag-wrapper">
          ${this.tags.map((tag) => html`<static-tag tagName=${tag} size="small"></static-tag>`)}
        </div>
        <p class="link-last-updated">${lastUpdatedHtml}</p>
      </div>
    `;
  }
}