export const dynamic = "force-static";
export const revalidate = 60; //seconds

import Link from "next/link";
import { prisma } from "../prisma/lib/route";

export async function generateStaticParams() {
  const posts = await prisma.posts.findMany()
  return posts.map((post) => ({ id: post.id }));
}

export default async function Home() {
  const posts = await prisma.posts.findMany()
  return (
    <main>
      <section>
        <div className="container mt-4 py-6 mx-auto flex flex-col items-center justify-around  rounded-lg shadow-md space-y-2 ">
          <h2>User posts</h2>
          {posts.map((post) => (
            <article
              key={post.slug}
              className="py-4 px-2 flex flex-col items-center justify-around  rounded-lg shadow-md "
            >
              <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
