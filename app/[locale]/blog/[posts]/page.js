import React from "react";
import BlogWrapper from "@/components/Blog/BlogWrapper";
import { getBlog } from "@/sanity/sanity-utils";

export const generateMetadata = async ({ params }) => {
  const slug = params.eventPost;
  const blog = await getBlog(slug);
  if (!blog) {
    return 
  }
  return {
    title: blog.title,
    description: blog.description.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.description.substring(0, 160),
      type: 'article',
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  }
}

const Post = ({ params }) => {
  const slug = params.posts;
  return <BlogWrapper slug={slug} />;
};

export default Post;
