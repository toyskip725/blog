import type { Post } from "../content/config";
import { DateUtility } from "../utils/date";
import "./PostPreviewCard.css";
import PostTag from "./PostTag";

type Props = {
  post: Post;
  slug: string;
  body: string;
};

const PostPreviewCard = ({ post, slug, body }: Props) => {
  const href = `post/${slug}`;
  const bodyPreview = `${body.substring(0, 100)}...`;

  return (
    <div class="post-preview-wrapper">
      <div class="post-preview-header">
        <p class="post-preview-header-published-at">{DateUtility.format(post.publishedAt)}</p>
        <a href={href} class="post-preview-link">
          <p>{post.title}</p>
        </a>
      </div>
      {/*<p class="post-preview-body">{bodyPreview}</p> */}
      <div class="post-preview-header-tags">
        {post.tags.map(tag => <PostTag tagName={tag} />)}
      </div>
    </div>
  );
};

export default PostPreviewCard;