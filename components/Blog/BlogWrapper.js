import React from "react";
import { getBlogs } from "../../sanity/sanity-utils";
import { getBlog } from "@/sanity/sanity-utils";
import BlogComponent from "./BlogComponent";

const BlogWrapper = async ({ slug }) => {
  const blogs = await getBlogs();
  const blog = await getBlog(slug);
  return <BlogComponent blogs={blogs} blog={blog} currentSlug={slug} />;
};

export default BlogWrapper;
