import { prisma } from "../../../prisma/lib/route";

export default async function PostDetails({ params }) {
  const post = await prisma.posts.findUnique({
    where: {
      slug: params.slug,
    },
  });

  // console.log({ post });

  return (
    <section>
      <article className=" h-[85vh]  flex justify-center items-center">
        <div className="container mt-4 py-6 mx-auto flex flex-col items-center justify-around border rounded-lg shadow-md ">
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </div>
      </article>
    </section>
  );
}
