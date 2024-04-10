import React from "react";
import BlogWrapper from "@/components/Blog/BlogWrapper";

const Post = ({ params }) => {
  const slug = params.posts;
  return <BlogWrapper slug={slug} />;
};

export default Post;
