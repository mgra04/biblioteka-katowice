import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { type, id, userId } = await req.json();

  if (type === "event") {
    await prisma.userFavouriteEvent.deleteMany({
      where: {
        userId,
        eventId: id,
      },
    });
  } else if (type === "catalogItem") {
    await prisma.userFavouriteCatalogItem.deleteMany({
      where: {
        userId,
        catalogItemId: id,
      },
    });
  } else if (type === "news") {
    await prisma.userFavouriteNews.deleteMany({
      where: {
        userId,
        newsId: id,
      },
    });
  }

  return NextResponse.json({ message: "Unliked successfully" });
}
