import { remark } from "remark";
import { fromMarkdown } from "mdast-util-from-markdown";
import { inspect } from "unist-util-inspect";
import remarkReplaceUrl from "../src/plugins/replacePlugin";

const target = "![alt text](/sample.png)";
const result = await remark()
  .use(remarkReplaceUrl, (url: string) => `/xxx${url}`)
  .run(fromMarkdown(target));

console.log(inspect(result));