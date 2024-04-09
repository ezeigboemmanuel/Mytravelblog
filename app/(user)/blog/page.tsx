import Route from '@/components/Route';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { groq } from 'next-sanity';
import Image from 'next/image';

const query = groq`
*[_type == "post"] {
  ...,
  author->,
} | order(_createdAt desc)
`;

const page = async () => {
  const posts = await client.fetch(query);
  return (
    <div className="md:mx-14 my-5">
      <h2 className="text-2xl mt-2 mb-5 border-b-2 border-b-gray-400 pb-3 font-semibold mx-4">Recent travel blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5 pb-10">
        {posts.map((post:Post) => (
          <Route route={`/blog/${post.slug.current}`}>
            <div key={post._id} className="border border-gray-200 rounded mb-3">
              <div className="relative w-full h-80 drop-shadow-xl">
                <Image
                  fill
                  src={urlForImage(post.mainImage)}
                  alt="postImage"
                  className="object-cover object-left lg:object-center"
                />
              </div>
              <div className="mx-5 pb-4">
                <h1 className="mt-5 mb-2 font-semibold text-[#E7493F]">
                  {post.title}
                </h1>
                <p className="line-clamp-6">{post.description}</p>
              </div>
            </div>
          </Route>
        ))}
      </div>
    </div>
  )
}

export default page