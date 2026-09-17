import { NextResponse } from 'next/server';
import { getCachedGoogleReviews } from '@/lib/google/reviews';

export async function GET() {
  try {
    const data = await getCachedGoogleReviews();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to retrieve reviews' },
      { status: 500 }
    );
  }
}
