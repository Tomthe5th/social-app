"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    //when loading login form
    return <p>...</p>;
  }

  if (status === "authenticated") {//if already logged in
    return ( <Link href={"/dashboard"}>
      <Image
        src={session.user?.image}
        alt={session.user.name}
        width={32}
        height={32}
      />
    </Link>)
   
  }
  if (status === "unauthenticated") {
    return <button onClick={() => signIn()}>Sign In</button>;
  }
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
