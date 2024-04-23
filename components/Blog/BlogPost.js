import React from "react";
import Image from "next/image";
import moment from "moment";
import { renderDescriptionWithLineBreaks } from "@/app/lib/funcs";

const BlogPost = ({ blog }) => {
  // console.log(blog);
  const date = moment(blog._createdAt).format("MMMM Do, YYYY");
  return (
    <div className="container mx-auto px-5 text-green max-w-[1300px]">
      <article>
        <h1 className="text-balance mt-20 mb-4 text-6xl font-bold leading-tight tracking-tighter md:text-6xl md:leading-none 2xl:text-7xl">
          {blog.title}
        </h1>

        <div className="mb-8 sm:mx-0 md:mb-16">
          <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
            <Image
              className="h-auto w-full max-h-[400px] md:max-h-[500px] object-cover"
              width={2000}
              height={1000}
              alt={""}
              src={blog.image}
              // sizes="100vw"
            />
          </div>
          <div className="hidden md:mt-4 md:block">
            {blog.author && (
              <div className="flex items-center text-xl">
                <div className="mr-1">By </div>
                <div className="text-pretty text-xl font-bold">
                  {blog.author}
                </div>
              </div>
            )}
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
          <div className="mx-auto max-w-2xl">
            {renderDescriptionWithLineBreaks(blog.description)}
          </div>
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
