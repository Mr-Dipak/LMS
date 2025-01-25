import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text hover:cursor-pointer transition-all hover:scale-105">
        Code Crafter
      </div>
    </Link>
  );
};

export default Logo;
