export interface WhatsAppMessagePayload {
  patientName?: string;
  mobileNumber?: string;
  preferredDate?: string;
  preferredTime?: string;
  reasonForVisit?: string;
  serviceType?: string;
  patientType?: string;
}

export function generateWhatsAppBookingUrl(
  whatsappNumber: string = '919642002222',
  payload?: WhatsAppMessagePayload
): string {
  if (!payload || !payload.patientName) {
    const defaultText = 'Hello Rohith Reddy Hospitals, I would like to book an appointment with Dr. Rohith Reddy Yata.';
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines = [
    '🏥 *Appointment Request - Rohith Reddy Hospitals*',
    '',
    `*Patient Name:* ${payload.patientName}`,
    `*Mobile:* ${payload.mobileNumber || 'Not provided'}`,
    `*Service:* ${payload.serviceType || 'General Consultation'}`,
    `*Patient Type:* ${payload.patientType === 'existing' ? 'Follow-up Patient' : 'New Patient'}`,
    `*Preferred Date:* ${payload.preferredDate || 'Earliest available'}`,
    `*Preferred Time:* ${payload.preferredTime || 'Any convenient slot'}`,
  ];

  if (payload.reasonForVisit) {
    lines.push(`*Reason:* ${payload.reasonForVisit}`);
  }

  lines.push('');
  lines.push('Please confirm doctor availability and my appointment slot.');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}
