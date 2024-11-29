import "./PostTag.css";

type Props = {
  tagName: string;
};

const PostTag = ({ tagName }: Props) => {
  return (
    <div class="post-tag">
      <span class="post-tag-text">{tagName}</span>
    </div>
  );
};

export default PostTag;