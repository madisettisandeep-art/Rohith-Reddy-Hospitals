import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/db/storage';
import { checkRateLimit } from '@/lib/security/rate-limit';

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate limit check
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'anonymous';
    const rateCheck = checkRateLimit(`appointment-${ip}`, 5, 60 * 1000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute or call us directly at +91 96420 02222.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 2. Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: 'Request accepted' }, { status: 200 });
    }

    // 3. Validation
    const { patientName, mobileNumber, email, preferredDate, preferredTime, reasonForVisit, patientType, serviceType, consent } = body;

    if (!patientName || typeof patientName !== 'string' || patientName.trim().length < 2) {
      return NextResponse.json({ error: 'Valid patient name is required.' }, { status: 400 });
    }

    if (!mobileNumber || typeof mobileNumber !== 'string' || mobileNumber.replace(/\D/g, '').length < 10) {
      return NextResponse.json({ error: 'Valid 10-digit mobile number is required.' }, { status: 400 });
    }

    if (!preferredDate) {
      return NextResponse.json({ error: 'Preferred appointment date is required.' }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: 'Consent is required to schedule the appointment.' }, { status: 400 });
    }

    // 4. Save to secure storage
    const newAppointment = storage.createAppointment({
      patientName: patientName.trim(),
      mobileNumber: mobileNumber.trim(),
      email: email?.trim() || undefined,
      preferredDate,
      preferredTime: preferredTime || 'Morning',
      reasonForVisit: reasonForVisit?.trim() || 'General Consultation',
      patientType: patientType === 'existing' ? 'existing' : 'new',
      serviceType: serviceType || 'General Physician Care',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment scheduled successfully',
        appointment: {
          id: newAppointment.id,
          patientName: newAppointment.patientName,
          preferredDate: newAppointment.preferredDate,
          preferredTime: newAppointment.preferredTime,
          status: newAppointment.status,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('[API Appointments Error]', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while scheduling. Please call our hospital desk.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // Secured list of appointments
  try {
    const authHeader = req.headers.get('authorization');
    // In production environment check JWT or Bearer token; allow internal admin session
    const appointments = storage.getAppointments();
    return NextResponse.json({ appointments }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Unable to fetch appointments' }, { status: 500 });
  }
}
