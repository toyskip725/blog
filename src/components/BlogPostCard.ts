import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

interface FrontMatter {
  title: string;
  publishedAt: Date;
  tags: Array<string>;
}

@customElement('blog-post-card')
export class BlogPostCard extends LitElement {
  static styles = css`
    .container {
      border-bottom: solid 1px #34343d;
      margin: 1em 0em;
    }
    .title {
      color: #34343d;
      font-size: large;
      margin-top: 0em;
    }
    .title a {
      color: #34343d;
      text-decoration: none;
    }
    .published-at {
      color: #34343d;
      font-size: small;
      margin-bottom: 0em;
    }
  `;

  @property() href: string = "";
  @property() frontmatter?: FrontMatter = undefined;

  render() {
    if (this.frontmatter === undefined) return html`<div></div>`;

    return html`
      <div class="container">
        <p class="published-at">${this.frontmatter.publishedAt.toDateString()}</p>
        <p class="title">
          <a href=${this.href}>${this.frontmatter.title}</a>
        </p>
      </div>
    `;
  }
}
