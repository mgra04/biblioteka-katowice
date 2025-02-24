"use client";

import { useState, useEffect } from "react";
import Button from "./button";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { toast, Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";

type LikeBtnProps = {
  type: "news" | "event" | "catalogItem";
  id: string;
  text: string;
  userId: string;
};

export default function LikeBtn({ type, id, text, userId }: LikeBtnProps) {
  const [liked, setLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkIfLiked = async () => {
      try {
        const response = await fetch(
          `/api/check-like?type=${type}&id=${id}&userId=${userId}`
        );
        const data = await response.json();
        setLiked(data.liked);
      } catch (error) {
        console.error(error);
        toast.error("Coś poszło nie tak...");
      }
    };

    checkIfLiked();
  }, [type, id, userId]);

  const handleLike = async () => {
    setIsDisabled(true);
    const optimisticLiked = !liked;
    setLiked(optimisticLiked);

    if (optimisticLiked) {
      toast.success(`Dodano do listy: ${text}`);
    } else {
      toast.success(`Usunięto z listy: ${text}`);
    }

    try {
      if (optimisticLiked) {
        await fetch(`/api/like`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type, id, userId }),
        });
      } else {
        await fetch(`/api/unlike`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type, id, userId }),
        });
      }
    } catch (error) {
      console.error(error);
      setLiked(!optimisticLiked);
      toast.error("Coś poszło nie tak...");
    } finally {
      setTimeout(() => {
        setIsDisabled(false);
      }, 500);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={handleLike}
        disabled={isDisabled}
      >
        {liked ? <IoHeartSharp size={22} /> : <IoHeartOutline size={22} />}
      </Button>

      {isClient &&
        createPortal(
          <div style={{ fontSize: "16px" }}>
            <Toaster
              toastOptions={{
                className: "",
                style: {
                  background: "#21232d",
                  padding: "16px",
                  color: "#d9def5",
                },
              }}
              position="bottom-right"
            />
          </div>,
          document.body
        )}
    </>
  );
}
