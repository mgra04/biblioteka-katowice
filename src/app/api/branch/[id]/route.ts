import { NextResponse } from "next/server";
import { getBranchForMap } from "@/lib/server-utils";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await context.params;
  const branch = await getBranchForMap(id);

  if (!branch) {
    return NextResponse.json({ error: "Branch not found" }, { status: 404 });
  }
  return NextResponse.json(branch);
}
