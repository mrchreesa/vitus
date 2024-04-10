import React from "react";
import Link from "next/link";
import Image from "next/image";

const MorePosts = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="mx-auto mb-32 grid text-green grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-4 lg:gap-x-32 max-w-[1200px]">
        {data?.map((post) => {
          const { _id, title, slug, image, description, author } = post;
          return (
            <article key={_id} className="flex flex-col mb-8 md:mb-16 lg:mb-32">
              <Link
                href={`/posts/${slug}`}
                className="group block shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="relative overflow-hidden w-full h-56 sm:h-72 md:h-96">
                  <Image
                    className="object-cover w-full h-full"
                    // width={2000}
                    // height={1000}
                    alt={title}
                    src={image}
                    layout="fill" // This is important to make the image fill the container
                  />
                </div>

                <h3 className="text-balance my-3 text-3xl leading-snug px-2">
                  <Link href={`/posts/${slug}`} className="hover:underline">
                    {title}
                  </Link>
                </h3>
                <div className="mb-4 text-lg">
                  {/* <DateComponent dateString={post.date} /> */}
                </div>
                {description && (
                  <p className="px-2 text-pretty mb-4 text-lg leading-relaxed line-clamp-5">
                    {description}
                  </p>
                )}
                {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default MorePosts;
