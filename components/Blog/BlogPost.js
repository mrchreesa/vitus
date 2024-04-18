import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const BlogPost = ({ blog }) => {
  console.log(blog);
  const date = moment(blog._createdAt).format("MMMM Do, YYYY");
  return (
    <div className="container mx-auto px-5 text-green max-w-[1300px]">
      {/* <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          {settings?.title || demo.title}
        </Link>
      </h2> */}
      <article>
        <h1 className="text-balance mt-20 mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {blog.title}
        </h1>
        <div className="hidden md:mb-4 md:block">
          {blog.author && (
            <div className="flex items-center text-xl">
              <div className="mr-1">By </div>
              <div className="text-pretty text-xl font-bold">{blog.author}</div>
            </div>
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
            <Image
              className="h-auto w-full max-h-[500px] object-cover"
              width={2000}
              height={1000}
              alt={""}
              src={blog.image}
              // sizes="100vw"
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {/* {blog.author && (
              <Avatar name={blog.author.name} picture={blog.author.picture} />
            )} */}
          </div>
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">{date}</div>
          </div>
        </div>
        {blog.description?.length && (
          <div className="mx-auto max-w-2xl">{blog.description}</div>
        )}
      </article>
      <aside>
        <hr className="border-accent-2 mb-24 mt-28" />
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
          Recent Stories
        </h2>
      </aside>
    </div>
  );
};

export default BlogPost;
