import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locationName = searchParams.get('location');
  const owner = searchParams.get('owner');

  if (!locationName || !owner) {
    return NextResponse.json({ error: 'Missing location or owner' }, { status: 400 });
  }

  const storages = await prisma.storage.findMany({
    where: {
      location: {
        name: { equals: locationName, mode: 'insensitive' },
        owner: { equals: owner, mode: 'insensitive' },
      },
    },
    select: { name: true },
    orderBy: { name: 'asc' },
  });

  return NextResponse.json(storages.map((s: { name: string }) => s.name));
}