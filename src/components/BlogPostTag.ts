import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('blog-post-tag')
export class BlogPostTag extends LitElement {
  static styles = css`
    .tag {
      width: fit-content;
      border: solid 1px #2a2a31;
      margin-right: 1em;
    }
    span {
      color: #2a2a31;
      font-size: small;
      display: inline-flex;
      padding: 0.25em 0.75em;
    }
  `;

  @property() tagName: string = "";

  render() {
    return html`
      <div class="tag">
        <span>${this.tagName}</span>
      </div>
    `;
  }
}