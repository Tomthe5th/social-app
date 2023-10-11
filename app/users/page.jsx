import UserCard from "@/components/UserCard";
import { prisma } from "@/prisma/lib/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Users() {
  const users = await prisma.user.findMany();
  // console.log({ users });

  return (
    <section>
      <div className="container mx-auto flex items-center justify-center gap-4 ">
        {users.map((user) => (
         <UserCard  user={user}/>
        ))}
      </div>
    </section>
  );
}
