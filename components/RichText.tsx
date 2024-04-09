import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";


export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-5 mx-auto">
          <Image
            className="object-contain"
            src={urlForImage(value)}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-3 list-disc space-y-2 font-normal leading-8 tracking-wide ">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal  font-normal leading-8 tracking-wide ">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-3 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-2 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-bold">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <div className="">
        <p className="font-normal leading-8 tracking-wide py-4 ">{children}</p>
      </div>
      
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-gray-700 border-l-4 pl-5 py-5 my-5 font-normal leading-8 tracking-wide ">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline text-[#E7493F] hover:text-white"
        >
          {children}
        </Link>
      );
    },
  },
};