import { prisma } from "@/prisma/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email;
  const data = await request.json();

console.log({currentUserEmail , data , session})

  const user = await prisma.user.update({ //asyncronus
    where: {
      email: currentUserEmail,
    },
    data,
  });

  return NextResponse.json(user)
}

// export async function PUT(request) {
//   const session = await getServerSession(authOptions);
//   const currentUserName = session?.user?.name;

//   const currentUserId = await prisma.user.findUnique({
//       where: {
//         name: currentUserName,
//       },
//     }).then((user) => user.id);

//   const data = await request.json();

//   console.log({ currentUserName , currentUserId, data, session });

//   const user = await prisma.user.update({
//     //asyncronus
//     where: {
//       id: currentUserId,
//     },
//     data,
//   });

//   return NextResponse.json(user);
// }
