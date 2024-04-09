import React from "react";
import Route from "../Route";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="md:mx-14 my-10">
      {posts.map((post) => (
        <Route route={`/blog/${post.slug.current}`}>
          <div key={post._id} className="border border-gray-200 rounded mb-3">
            <div className="relative w-full h-80">
              <Image
                fill
                src={urlForImage(post.mainImage)}
                alt="postImage"
                className="object-cover object-left lg:object-center"
              />
            </div>
            <div className="mx-5 pb-4">
              <h2 className="mt-5 mb-2 font-semibold text-[#E7493F]">
                {post.title}
              </h2>
              <p className="line-clamp-6">{post.description}</p>
            </div>
          </div>
        </Route>
      ))}
    </div>
  );
};

export default BlogList;
