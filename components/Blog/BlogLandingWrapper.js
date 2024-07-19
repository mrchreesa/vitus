import React from "react";
import { getBlogs } from "../../sanity/sanity-utils";
import BlogLanding from "./BlogLanding";
import { locale } from "moment";

const BlogLandingWrapper = async ({ locale }) => {
  const blogs = await getBlogs();
  if (!blogs.length) {
    return (
      <div className="font-mont flex h-screen w-full justify-center items-center text-green">
        No blogs available
      </div>
    );
  }
  return <BlogLanding blogs={blogs} />;
};

export default BlogLandingWrapper;
