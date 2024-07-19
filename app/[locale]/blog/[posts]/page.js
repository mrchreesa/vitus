import React from "react";
import BlogWrapper from "@/components/Blog/BlogWrapper";
import { getBlog } from "@/sanity/sanity-utils";
export async function generateMetadata({ params }) {
  const slug = params.eventPost;
  const blog = await getBlog(slug);
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
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
