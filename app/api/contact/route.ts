import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rate-limit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const rate = checkRateLimit(`contact-${ip}`, 5, 60 * 1000);
    if (!rate.success) {
      return NextResponse.json({ error: 'Too many messages. Please try again later.' }, { status: 429 });
    }

    const body = await req.json();
    if (body.honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { name, phone, message } = body;
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you. Our clinic representative will reach out shortly.',
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
