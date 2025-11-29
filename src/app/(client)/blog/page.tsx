import Title from "@/components/atoms/Title";
import Container from "@/components/common/Container";
import { getAllBlogs } from "@/sanity/queries";
import React from "react";
import { Blog } from "../../../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Calendar } from "lucide-react";
import dayjs from "dayjs";
import Link from "next/link";
const BlogPage = async () => {
  const blogs = await getAllBlogs(5);
  return (
    <div>
      <Container className="py-10 md:py-16">
        <Title className="mb-5">Our Blogs</Title>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {blogs.map((blog: Blog) => (
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
                        key={item.title}
                        className="pb-1 border-b-2 border-black/20 hover:border-shop-orange text-xs font-semibold text-shop-orange  hover-effect tracking-wider"
                      >
                        {item?.title}
                      </p>
                    );
                  })}
                  <p className="flex items-center pb-1 border-b-2 border-black/20 hover:border-shop-orange text-[10px] text-black/50 hover:text-shop-orange hover-effect tracking-wider">
                    <Calendar className="mr-1" size={15} />
                    {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
                  </p>
                </div>
                <h3 className="text-g mt-3 font-semibold tracking-wider">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
