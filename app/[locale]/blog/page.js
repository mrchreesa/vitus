import React from "react";
import BlogLandingWrapper from "@/components/Blog/BlogLandingWrapper";

export const metadata = {
  title: "Blog",
  description: "Blog Centre Vitus",

};

const Blog = ({ params: { locale } }) => {
  return <BlogLandingWrapper locale={locale} />;
};

export default Blog;
