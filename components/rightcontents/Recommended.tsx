import React from "react";
import Route from "../Route";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
  posts: Post[];
};

const Recommended = ({ posts }: Props) => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="flex-grow border-b border-[#e74a3f4f]"></div>
        <h2 className="px-4 py-2 text-center text-[#E7493F] font-semibold">
          Recommended
        </h2>
        <div className="flex-grow border-b border-[#e74a3f4f]"></div>
      </div>

      <div>
        {posts.slice(0, 3).map((post) => (
          <Route route="/blog/post1">
            <div key={post._id} className="flex border h-32 border-gray-200 rounded-lg mb-3">
              <div className="relative w-32 h-32 drop-shadow-xl basis-[40%]">
                <Image
                  fill
                  src={urlForImage(post.mainImage)}
                  alt="postImage"
                  className="object-cover object-left lg:object-center rounded-lg"
                />
              </div>

              <div className="mx-5 pb-4 basis-[60%] text-[12px]">
                <h1 className="text-[#E7493F] mt-2 mb-2 font-semibold ">
                  {post.title}
                </h1>
                <p className="line-clamp-3">{post.description}</p>
              </div>
            </div>
          </Route>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
