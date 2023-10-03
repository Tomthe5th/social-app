import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className=" "> 
    <article className="relative top-0 text-center text-sm text-white bg-black "> made with Next.js </article>

     <div className="container mx-auto flex justify-between items-center py-2  ">
     <Link href="/">
        <Image src="/next.svg" alt="Social-logo" width={200} height={30} />
      </Link>

      <ul className="flex items-center justify-between max-w-3xl gap-4 ">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
     </div>
    </nav>
  );
}

export default Nav;
