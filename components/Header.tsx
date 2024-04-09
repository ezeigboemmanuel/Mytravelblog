import React from "react";
import Logo from "../public/assets/bloglogo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#1C252A] text-white py-3 md:py-5 px-5 md:px-10 lg:px-20 font-semibold text-[12px] md:text-[14px] lg:text-[16px] items-center">
      <Link href="/" className="flex items-center">
        <span>
          <Image src={Logo} alt="Logo" className="h-8 w-8 mx-2" />
        </span>
        <span className="hidden md:inline-block">MyTravelBlog</span>
      </Link>

      <div className="flex space-x-3">
        <Link href="/blog"><p>TRAVEL BLOG</p></Link>
        <p>TRAVEL REVIEWS</p>
        <p>ABOUT</p>
      </div>
    </nav>
  );
};

export default Header;
