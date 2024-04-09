import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";

const query = groq`
*[_type == "post"] {
  ...,
  author->,
} | order(_createdAt desc)
`;

const page = async () => {
  const posts = await client.fetch(query);
  return (
    <div>
      <Hero />
      <Main posts={posts} />
    </div>
  );
};

export default page;
