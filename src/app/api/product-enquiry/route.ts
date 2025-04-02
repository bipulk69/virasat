import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure mail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email templates
const userConfirmationTemplate = (email: string, productName: string) => {
  return {
    from: `"The Virasat" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank you for your enquiry about ${productName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <img src="https://yourwebsite.com/images/logo.jpg" alt="The Virasat" style="max-width: 200px; margin-bottom: 20px;" />
        <h2 style="color: #ea580c;">Thank You for Your Enquiry!</h2>
        <p>Dear Customer,</p>
        <p>Thank you for your interest in our <strong>${productName}</strong>. We've received your enquiry and will get back to you as soon as possible with more information.</p>
        <div style="background-color: #fff7ed; padding: 15px; border-left: 4px solid #ea580c; margin: 20px 0;">
          <p style="margin: 0; font-style: italic;">"Our authentic heritage products bring traditional elements into modern lifestyle."</p>
        </div>
        <p>If you have any other questions in the meantime, feel free to reply to this email.</p>
        <p>Warm regards,<br/>The Virasat Team</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777;">© 2025 The Virasat. All Rights Reserved.</p>
      </div>
    `,
  };
};

const adminNotificationTemplate = (userEmail: string, productName: string, message: string) => {
  return {
    from: `"The Virasat Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    subject: `New Product Enquiry: ${productName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2 style="color: #ea580c;">New Product Enquiry</h2>
        <p>You have received a new enquiry about <strong>${productName}</strong>!</p>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #ffffff; padding: 10px; border-left: 3px solid #ea580c;">${message}</p>
        </div>
        
        <p>You can respond directly to this customer by replying to this email.</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777;">This is an automated notification from your website.</p>
      </div>
    `,
  };
};

export async function POST(request: NextRequest) {
  try {
    const { email, message, productName } = await request.json();

    // Validate inputs
    if (!email || !message || !productName) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    const userEmailResult = await transporter.sendMail(
      userConfirmationTemplate(email, productName)
    );
    console.log('User confirmation email sent:', userEmailResult.messageId);

    // Send notification to admin
    const adminEmailResult = await transporter.sendMail(
      adminNotificationTemplate(email, productName, message)
    );
    console.log('Admin notification email sent:', adminEmailResult.messageId);

    // In a real application, you would save the enquiry to a database here

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been submitted successfully',
    });
  } catch (error) {
    console.error('Product enquiry API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}