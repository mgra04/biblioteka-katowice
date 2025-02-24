import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const userId = searchParams.get("userId");

  if (!type || !id || !userId) {
    return NextResponse.json({ liked: false });
  }

  let liked = false;

  if (type === "event") {
    liked =
      (await prisma.userFavouriteEvent.findFirst({
        where: {
          userId,
          eventId: id,
        },
      })) !== null;
  } else if (type === "catalogItem") {
    liked =
      (await prisma.userFavouriteCatalogItem.findFirst({
        where: {
          userId,
          catalogItemId: id,
        },
      })) !== null;
  } else if (type === "news") {
    liked =
      (await prisma.userFavouriteNews.findFirst({
        where: {
          userId,
          newsId: id,
        },
      })) !== null;
  }

  return NextResponse.json({ liked });
}
