import React from "react";
import Route from "./Route";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  posts: Post[];
  post: Post;
};

const MoreBlogs = ({ posts, post }: Props) => {
  const modifiedPosts = posts.slice(0, 3).filter((item) => item.title !== post.title);
  return (
    <div className="md:mx-14 my-10">
      <h2 className="text-2xl mt-5 mb-3 px-5 font-semibold">Read More Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5 pb-10">
        {modifiedPosts.map((post) => (
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
    </div>
  );
};

export default MoreBlogs;
