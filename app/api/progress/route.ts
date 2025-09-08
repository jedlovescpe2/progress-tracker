// app/api/progress/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all items
export async function GET() {
  const items = await prisma.progressItem.findMany({
    orderBy: {
      position: 'asc',
    },
  });
  return NextResponse.json(items);
}

// POST a new item
export async function POST(request: Request) {
  const data = await request.json();

   // Find the highest position value
  const maxPosition = await prisma.progressItem.aggregate({
    _max: {
      position: true,
    },
  });

  const newItem = await prisma.progressItem.create({
    data: {
      name: data.name,
      startingPage: data.startingPage,
      currentPage: data.currentPage,
      targetPage: data.targetPage,
      position: (maxPosition._max.position ?? -1) + 1,
    },
  });
  return NextResponse.json(newItem);
}