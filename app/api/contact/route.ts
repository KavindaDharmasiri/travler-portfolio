import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, company } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Travler Contact Form" <${process.env.GMAIL_USER}>`,
      to: 'travlerofficial2025@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 0.5rem;">New Message from Travler Website</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
            <tr><td style="padding: 0.5rem; font-weight: bold; width: 120px;">Name</td><td style="padding: 0.5rem;">${name}</td></tr>
            <tr style="background:#f9fafb;"><td style="padding: 0.5rem; font-weight: bold;">Email</td><td style="padding: 0.5rem;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 0.5rem; font-weight: bold;">Company</td><td style="padding: 0.5rem;">${company || '—'}</td></tr>
          </table>
          <div style="margin-top: 1.5rem; background: #f9fafb; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #0f766e;">
            <p style="font-weight: bold; margin: 0 0 0.5rem;">Message</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 1.5rem; font-size: 0.75rem; color: #9ca3af;">Sent from travler.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
