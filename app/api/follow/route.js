import { prisma } from "@/prisma/lib/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  console.log({ user: session.user });

  const currentUserEmail = session?.user?.email;

  const currentUserId = await prisma.user
    .findUnique({
      //promise
      where: {
        email: currentUserEmail,
      },
    })
    .then((user) => user.id);

  const { targetUserId } = await request.json();

  console.log({ currentUserId, targetUserId });

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });
  return NextResponse.json(record);
}

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  //another way (searchparams) //can execute the same as POST
  const targetUserId = request.nextUrl.searchParams.get("targetUserId");

  const currentUserEmail = session?.user?.email;

  const currentUserId = await prisma.user
    .findUnique({
      //promise
      where: {
        email: currentUserEmail,
      },
    })
    .then((user) => user.id);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId,
      },
    },
  });

  return NextResponse.json(record);
}
