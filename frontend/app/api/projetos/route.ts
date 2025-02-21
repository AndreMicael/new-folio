export const dynamic = "force-static";
export const revalidate = 60; // Revalidate every 60 seconds

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projetos?populate=image`
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os projetos");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: (error as Error).message }),
      {
        status: 500,
      }
    );
  }
}
