import React from "react";
import { getBlogs } from "../../sanity/sanity-utils";
import { getBlog } from "@/sanity/sanity-utils";
import BlogComponent from "./BlogComponent";

const BlogWrapper = async ({ slug }) => {
  const blogs = await getBlogs();
  const blog = await getBlog(slug);
  console.log(blogs);
  return <BlogComponent blogs={blogs} blog={blog} />;
};

export default BlogWrapper;
