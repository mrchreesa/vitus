import React from "react";
import { getBlogs } from "../../sanity/sanity-utils";
import BlogLanding from "./BlogLanding";

const BlogLandingWrapper = async () => {
  const blogs = await getBlogs();
  return <BlogLanding blogs={blogs} />;
};

export default BlogLandingWrapper;
