import type { Root } from "mdast";
import { visit } from "unist-util-visit";

const remarkReplaceUrl = (replacer: (url: string) => string) => {
  return (tree: Root) => {
    visit(tree, "image", (node, _index, _parent) => {
      node.url = replacer(node.url);
    });
  };
};

export default remarkReplaceUrl;