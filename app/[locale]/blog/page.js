import React from "react";
import BlogLandingWrapper from "@/components/Blog/BlogLandingWrapper";

const Blog = ({ params: { locale } }) => {
  return <BlogLandingWrapper locale={locale} />;
};

export default Blog;
