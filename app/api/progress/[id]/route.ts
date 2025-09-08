// app/api/progress/[id]/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// PUT (update) an item
export async function PUT(request: Request, { params }: { params:Promise<{ id: string }>}) {
  const { id } = await params
  const data = await request.json();
  const updatedItem = await prisma.progressItem.update({
    where: { id },
    data: {
      name: data.name,
      startingPage: data.startingPage,
      currentPage: data.currentPage,
      targetPage: data.targetPage,
    },
  });
  return NextResponse.json(updatedItem);
}

// DELETE an item
export async function DELETE(request: Request, { params }: { params:Promise<{ id: string }>}) {
  const { id } = await params
  await prisma.progressItem.delete({
    where: { id },
  });
  return NextResponse.json({ message: 'Item deleted successfully' });
}