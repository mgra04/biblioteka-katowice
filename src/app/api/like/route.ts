import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { type, id, userId } = await req.json();

    if (!type || !id || !userId) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    if (type === "event") {
      await prisma.userFavouriteEvent.create({
        data: {
          userId,
          eventId: id,
        },
      });
    } else if (type === "catalogItem") {
      await prisma.userFavouriteCatalogItem.create({
        data: {
          userId,
          catalogItemId: id,
        },
      });
    } else if (type === "news") {
      await prisma.userFavouriteNews.create({
        data: {
          userId,
          newsId: id,
        },
      });
    }

    return NextResponse.json({ message: "Liked successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
