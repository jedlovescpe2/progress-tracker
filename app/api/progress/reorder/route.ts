// app/api/progress/reorder/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { orderedIds } = await request.json();

  if (!orderedIds || !Array.isArray(orderedIds)) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    const transactions = orderedIds.map((id, index) =>
      prisma.progressItem.update({
        where: { id },
        data: { position: index },
      })
    );

    await prisma.$transaction(transactions);

    return NextResponse.json({ message: 'Order updated successfully' });
  } catch (error) {
    console.error("Failed to reorder items:", error);
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}