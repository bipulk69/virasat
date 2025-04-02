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
export const waitlistEmailTemplate = (email: string) => {
  return {
    from: `"The Virasat" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Welcome to The Virasat Tourism Waitlist',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <img src="https://yourwebsite.com/images/logo.jpg" alt="The Virasat" style="max-width: 200px; margin-bottom: 20px;" />
        <h2 style="color: #ea580c;">Thank You for Joining Our Waitlist!</h2>
        <p>Dear Cultural Enthusiast,</p>
        <p>Thank you for joining The Virasat's tourism waitlist! We're thrilled to have you as part of our community.</p>
        <p>We're working hard to bring you authentic cultural experiences that will connect you with India's rich heritage. As soon as our tourism experiences are ready to launch, you'll be among the first to know.</p>
        <div style="background-color: #fff7ed; padding: 15px; border-left: 4px solid #ea580c; margin: 20px 0;">
          <p style="margin: 0; font-style: italic;">"The beauty of our culture lies not just in its preservation, but in experiencing it firsthand."</p>
        </div>
        <p>If you have any questions in the meantime, feel free to reply to this email.</p>
        <p>Warm regards,<br/>The Virasat Team</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777;">© 2025 The Virasat. All Rights Reserved.</p>
      </div>
    `,
  };
};

export const newsletterEmailTemplate = (email: string) => {
  return {
    from: `"The Virasat" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Welcome to The Virasat Newsletter',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <img src="https://yourwebsite.com/images/logo.jpg" alt="The Virasat" style="max-width: 200px; margin-bottom: 20px;" />
        <h2 style="color: #ea580c;">Thank You for Subscribing!</h2>
        <p>Dear Cultural Enthusiast,</p>
        <p>Thank you for subscribing to The Virasat newsletter! We're excited to share India's rich cultural heritage with you.</p>
        <p>You'll now receive regular updates about:</p>
        <ul>
          <li>Cultural insights and ancient wisdom</li>
          <li>Traditional practices for modern life</li>
          <li>Upcoming events and festivals</li>
          <li>New heritage products and experiences</li>
        </ul>
        <div style="background-color: #fff7ed; padding: 15px; border-left: 4px solid #ea580c; margin: 20px 0;">
          <p style="margin: 0; font-style: italic;">"Our heritage is not just about preservation—it's about living, breathing culture that evolves with us."</p>
        </div>
        <p>If you have any questions or suggestions for topics you'd like us to cover, feel free to reply to this email.</p>
        <p>Warm regards,<br/>The Virasat Team</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777;">© 2025 The Virasat. All Rights Reserved.</p>
        <p style="font-size: 12px; color: #777;">You can unsubscribe at any time by clicking the link in the footer of our emails.</p>
      </div>
    `,
  };
};

// Admin notification templates
export const adminWaitlistNotificationTemplate = (userEmail: string) => {
  return {
    from: `"The Virasat Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Send to admin email or default to the sender
    subject: 'New Tourism Waitlist Signup',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2 style="color: #ea580c;">New Tourism Waitlist Signup</h2>
        <p>You have a new signup to your tourism waitlist!</p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Source:</strong> Tourism Waitlist Page</p>
        </div>
        <p>You can respond to this user by emailing them directly.</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777;">This is an automated notification from your website.</p>
      </div>
    `,
  };
};

export const adminNewsletterNotificationTemplate = (userEmail: string) => {
  return {
    from: `"The Virasat Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Send to admin email or default to the sender
    subject: 'New Newsletter Subscription',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2 style="color: #ea580c;">New Newsletter Subscription</h2>
        <p>You have a new subscriber to your newsletter!</p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <p>Your subscriber list is growing. Keep creating great content!</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777;">This is an automated notification from your website.</p>
      </div>
    `,
  };
};

// Send email function
export async function sendEmail(options: nodemailer.SendMailOptions) {
  try {
    const info = await transporter.sendMail(options);
    console.log('Email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email: ', error);
    return { success: false, error };
  }
}

// Send email with admin notification
export async function sendEmailWithAdminNotification(
  userOptions: nodemailer.SendMailOptions, 
  adminOptions: nodemailer.SendMailOptions
) {
  try {
    // Send email to the user
    const userInfo = await transporter.sendMail(userOptions);
    console.log('User email sent: ', userInfo.messageId);
    
    // Send notification to admin
    const adminInfo = await transporter.sendMail(adminOptions);
    console.log('Admin notification sent: ', adminInfo.messageId);
    
    return { success: true, userMessageId: userInfo.messageId, adminMessageId: adminInfo.messageId };
  } catch (error) {
    console.error('Error sending emails: ', error);
    return { success: false, error };
  }
}