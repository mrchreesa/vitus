import React from "react";
import BlogPost from "./BlogPost";
import MorePosts from "./MorePosts";

const BlogComponent = ({ blogs, blog, currentSlug }) => {
  // console.log(blog);
  return (
    <>
      <BlogPost blog={blog} />
      <MorePosts data={blogs} currentSlug={currentSlug} />
    </>
  );
};

export default BlogComponent;
