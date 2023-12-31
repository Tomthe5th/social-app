
import { prisma } from "@/prisma/lib/route";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // scope: ["user:email"],
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
