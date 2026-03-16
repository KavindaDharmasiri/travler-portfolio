import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message, company } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with your CRM or email service
    console.log('Contact form submission:', { name, email, message, company });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
