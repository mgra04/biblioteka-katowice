"use client";

import { RiShareFill } from "react-icons/ri";
import Button from "./button";
import { toast, Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type ShareButtonProps = {
  slug: string;
  toastText: string;
  type: "wydarzenia" | "aktualnosci" | "katalog-glowny";
};

export default function ShareBtn({ slug, toastText, type }: ShareButtonProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleShareClick = () => {
    const origin = window.location.origin;
    const link = `${origin}/${type}/${slug}`;
    navigator.clipboard.writeText(link).then(() => {
      toast.success(toastText, {
        position: "bottom-right",
        duration: 3000,
      });
    });
  };

  return (
    <>
      <Button variant="outline" size="icon" onClick={handleShareClick}>
        <RiShareFill size={22} />
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
