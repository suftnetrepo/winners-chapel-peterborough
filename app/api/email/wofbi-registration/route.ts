import { NextResponse } from 'next/server';
import { sendBrevoEmail } from '@/lib/mail';
import { emailTemplates } from '@/lib/email-templates';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, campus } = body ?? {};

    if (!firstName || !lastName || !email || !phone || !campus) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    await sendBrevoEmail({
      sender: { email: process.env.USER_NAME ?? '', name: 'Winners Chapel Peterborough website' },
      to: [{ email: process.env.CHURCH_INBOX_EMAIL ?? '' }],
      subject: `New WOFBI registration: ${firstName} ${lastName}`,
      textContent: `${firstName} ${lastName} (${email}, ${phone}) registered for WOFBI — ${campus}`,
      htmlContent: emailTemplates.wofbiRegistration({ firstName, lastName, email, phone, campus })
    });

    return NextResponse.json({ data: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
