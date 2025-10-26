import Title from "@/components/atoms/Title";
import { getLatestBlogs } from "@/sanity/queries";
import React from "react";
import { Blog } from "../../../../sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import dayjs from "dayjs";
const LatestBlogs = async () => {
  const blogs = await getLatestBlogs();
  console.log("blooooooooogs", blogs);
  return (
    <div className="w-full border rounded-md px-7 pt-7 pb-5 my-10">
      <Title>Latest Blogs</Title>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogs.map((blog: Blog) => {
          return (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug?.current || ""}`}
              className="overflow-hidden rounded-lg bg-gray-100 border hover:border-black hover-effect"
            >
              {blog.mainImage && (
                <div className="w-full h-36 relative">
                  <Image
                    src={urlFor(blog.mainImage).url()}
                    alt={`${blog.title}'s picture`}
                    fill={true}
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex justify-between items-center">
                  {blog.blogcategories?.map((item) => {
                    return (
                      <p
                        key={item._key}
                        className="pb-1 border-b-2 border-black/20 hover:border-shop-orange text-xs font-semibold text-shop-orange  hover-effect tracking-wider"
                      >
                        {item?.title}
                      </p>
                    );
                  })}
                  <p className="pb-1 border-b-2 border-black/20 hover:border-shop-orange text-xs text-black/50 hover:text-shop-orange hover-effect tracking-wider">
                    {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
                  </p>
                </div>
                <h3 className="text-g mt-3 font-semibold tracking-wider">
                  {blog.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LatestBlogs;
