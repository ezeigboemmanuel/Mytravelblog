import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import Route from "../Route";

type Props = {
  posts: Post[];
};

const Featured = ({ posts }: Props) => {
  const filteredPost = posts.filter(
    (post) => post.title === "Paris: The City of Lights"
  ); // Use the Exact title of the post you want to feature
  return (
    <div className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5">
      <div className="md:mx-6 lg:mx-14 mb-5">
        {filteredPost.map((post) => (
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

      <div className="p-2">
        <h2 className="font-extrabold font-sans text-4xl text-center mb-10 mr-2 bg-[url('../public/assets/bgimg.jpg')] bg-clip-text text-transparent">
          TRAIN <br />
          ADVENTURE <br />
          ROUTE
        </h2>
        <p>
          Imagine the thrill of boarding a train, setting off on an adventure
          where each clickety-clack of the tracks leads you to new horizons.
          With every twist and turn of the scenic route, there's a world of
          wonders waiting to be unveiled, promising excitement and discovery at
          every stop along the way.
        </p>
      </div>
    </div>
  );
};

export default Featured;
