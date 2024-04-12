import React from "react";
import MorePosts from "./MorePosts";
import BlogPost from "./BlogPost";

const BlogLanding = ({ blogs }) => {
  const postsMinusFirst = blogs.slice(1);
  console.log(postsMinusFirst);
  return (
    <>
      <BlogPost blog={blogs[0]} />

      <MorePosts data={postsMinusFirst} />
    </>
  );
};

export default BlogLanding;
