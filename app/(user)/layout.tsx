import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Travel Blog",
  description: "This is a very nice travel blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <div className="hidden md:block">
          <Footer />
        </div>
        <div className="md:hidden">
          <FooterMobile />
        </div>
      </body>
    </html>
  );
}
