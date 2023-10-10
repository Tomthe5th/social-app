import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserCard({ user }) {
  const {id , name , bio , image} = user
  return (
    <article key={id} className="mt-4 flex  items-center justify-center shadow-md rounded-lg ">
      <Link href={`users/${id}`}>
        <div className="container flex  items-center justify-center ">
          <Image src={image} width={100} height={100}></Image>
          <article className="px-4 py-2">
            <h3>{name}</h3>
            <p>{user?.bio}</p>

          </article>
        </div>
      </Link>
    </article>
  );
}

export default UserCard;
