import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { Category } from '../utils/category';

@customElement('category-label')
export class CategoryLabel extends LitElement {
  @property() category: Category = "booklog";

  private renderColor() {
    switch(this.category) {
      case "booklog":
        return "#0a214f";
      case "essay":
        return "#007989";
    }
  }

  render() {
    const wrapperStyle = {
      "padding": "1em 1em 0em 1em",
    };
    const labelStyle = {
      "width": "fit-content",
      "color": "#fafafa",
      "background-color": this.renderColor(),
      "font-size": "0.75rem",
      "padding": "0.25em 0.75em",
    };

    return html`
      <div style=${styleMap(wrapperStyle)}>
        <p style=${styleMap(labelStyle)}>${this.category}</p>
      </div>
    `;
  }
}