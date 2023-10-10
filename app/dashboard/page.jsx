import React from "react";
import UserProfile from "./UserProfile";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function dashboard() {
  const session = await getServerSession(authOptions);
    // console.log({session});
  if (!session) {
    redirect("/api/auth/signin");
  }
  const user = session?.user;
  return (
    <section>
      <div className="container mx-auto">
        <UserProfile  />
      </div>
    </section>
  );
}
