export default async function PostDetails({ params }) {
  const posts = await fetch("http://localhost:3000/api/posts").then((res) =>
    res.json()
  );

  const post = posts.find((item) => item.id === Number(params.id));
  console.log({ post });

  return (
    <section>
      <article className=" h-[85vh]  flex justify-center items-center">
        <div className="container mt-4 py-6 mx-auto flex flex-col items-center justify-around border rounded-lg shadow-md ">
          <h3>{post.author}</h3>
          <p>{post.content}</p>
        </div>
      </article>
    </section>
  );
}
