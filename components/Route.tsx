import Link from "next/link";
import React from "react";

const Route = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return (
    <Link key={route} href={route}>{children}</Link>
  );
};

export default Route;
