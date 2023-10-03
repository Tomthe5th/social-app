export const dynamic = "force-static";
export const revalidate = 60; //seconds

import Link from "next/link";

export async function generateStaticParams() {
  const posts = await fetch("http://localhost:3000/api/posts").then((res) =>
    res.json()
  );
  return posts.map((post) => ({ id: post.id }));
}

export default async function Home() {
  const posts = await fetch("http://localhost:3000/api/posts").then((res) =>
    res.json()
  );
  return (
    <main>
      <section>
        <div className="container mt-4 py-6 mx-auto flex flex-col items-center justify-around  rounded-lg shadow-md space-y-2 ">
          <h2>User posts</h2>
          {posts.map((post) => (
            <article
              key={post.id}
              className="py-4 px-2 flex flex-col items-center justify-around  rounded-lg shadow-md "
            >
              <Link href={`/posts/${post.id}`}>
                <h2>{post.author}</h2>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
