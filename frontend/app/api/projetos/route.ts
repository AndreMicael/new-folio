import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const projects = await prisma.projetos.findMany();
  return NextResponse.json(projects);
}
