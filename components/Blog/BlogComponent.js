import React from "react";
import BlogPost from "./BlogPost";
import MorePosts from "./MorePosts";

const BlogComponent = ({ blogs, blog, currentSlug }) => {
  let postsMinusCurrent;
  data.forEach((post, index) => {
    if (post.slug === currentSlug) {
      postsMinusCurrent = data.filter((_, i) => i !== index);
    }
  });
  return (
    <>
      <BlogPost blog={blog} />
      <MorePosts data={postsMinusCurrent} />
    </>
  );
};

export default BlogComponent;
