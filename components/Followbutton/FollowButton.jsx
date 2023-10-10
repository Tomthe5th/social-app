
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";
import FollowClient from "./FollowClient";

export default async function FollowButton({ targetUserId }) {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session?.user?.email;

  const currentUserId = await prisma.user
    .findUnique({
      //promise
      where: {
        email: currentUserEmail,
      },
    })
    .then((user) => user.id);

  const isFollowing = await prisma.follows.findFirst({
    where: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });
return <FollowClient targetUserId = {targetUserId} isFollowing={isFollowing}/>
}
