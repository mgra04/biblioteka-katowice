"use client";

import { SessionProvider } from "next-auth/react";
import LikeBtnWrapper from "./like-btn-wrapper";

type SessionLikeBtnWrapperProps = {
  type: "news" | "event" | "catalogItem";
  id: string;
  text: string;
};

export default function SessionLikeBtnWrapper({
  type,
  id,
  text,
}: SessionLikeBtnWrapperProps) {
  return (
    <SessionProvider>
      <LikeBtnWrapper type={type} id={id} text={text} />
    </SessionProvider>
  );
}
