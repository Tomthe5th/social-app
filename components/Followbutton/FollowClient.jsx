"use client";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

export default function FollowClient({ isFollowing, targetUserId }) {
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
const isMutate = isFetching || isPending

  const router = useRouter();

  async function follow() {
    setIsFetching(true);
    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsFetching(false); //console.log(res);

    router.refresh();
  }

  async function unfollow() {
    setIsFetching(true);
    await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });
    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });

  }

  if (isFollowing) {
    return (
      <button onClick={unfollow}>{isMutate ? "..." : "unfollow"}</button>
    );
  } else {
    return <button onClick={follow}>{isMutate ? "..." : "follow"}</button>;
  }
}
