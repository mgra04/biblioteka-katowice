"use client";

import { useSession } from "next-auth/react";
import React from "react";
import LikeBtn from "./like-btn";

type LikeBtnWrapperProps = {
  type: "news" | "event" | "catalogItem";
  id: string;
  text: string;
};

export default function LikeBtnWrapper({
  type,
  id,
  text,
}: LikeBtnWrapperProps) {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  if (!userId) return null;

  return <LikeBtn type={type} id={id} text={text} userId={userId} />;
}
