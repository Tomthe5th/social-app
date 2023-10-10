import { prisma } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { data: session, status } = useSession();

  console.log({ user: session.user });

  const currentUserEmail = session?.user?.email;

  const currentUserId = await prisma.user.findUnique({ //promise
    where: {
      email: currentUserEmail
    }
  }).then((user)=> user.id)

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
  const session = await getServerSession(authOptions.session);
  
  const currentUserEmail = session?.user?.email;

  const currentUserId = await prisma.user.findUnique({ //promise
    where: {
      email: currentUserEmail
    }
  }).then((user)=> user.id)


  //another way (searchparams) //can execute the same as POST
  const targetUserId = request.nextUrl.searchparams.get("targetUserId");

  await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerIdent: currentUserId,
        followingId: targetUserId,
      },
    },  
  });

  return NextResponse.json(record);
}
