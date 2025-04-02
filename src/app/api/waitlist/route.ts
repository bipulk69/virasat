import { NextRequest, NextResponse } from 'next/server';
import { 
  sendEmailWithAdminNotification, 
  waitlistEmailTemplate,
  adminWaitlistNotificationTemplate 
} from '@/utils/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Send confirmation email to user and notification to admin
    const emailResult = await sendEmailWithAdminNotification(
      waitlistEmailTemplate(email),
      adminWaitlistNotificationTemplate(email)
    );

    if (!emailResult.success) {
      console.error('Failed to send waitlist emails', emailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    // In a real application, you would save the email to a database here
    // For example: await db.collection('waitlist').insertOne({ email, joinedAt: new Date() });

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist',
    });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}