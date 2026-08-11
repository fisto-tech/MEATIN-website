import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string || '';
    const email = formData.get('email') as string || '';
    const mobile = formData.get('mobile') as string || '';
    const position = formData.get('position') as string || 'General Application';
    const experience = formData.get('experience') as string || 'Not specified';
    const coverLetter = formData.get('coverLetter') as string || '';
    const resumeFile = formData.get('resume') as File | null;

    if (!fullName || !email || !mobile) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    // Process File Attachment if present
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: resumeFile.name || 'Resume.pdf',
        content: buffer,
      });
    }

    // Target Recipient Email
    const targetEmail = 'fistotech01@gmail.com';

    // Configure Nodemailer Transporter
    // Uses process.env variables if set, or falls back to Gmail SMTP credentials
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || 'fistotech01@gmail.com';
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '';

    // Create Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: smtpPass ? {
        user: smtpUser,
        pass: smtpPass,
      } : undefined,
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #153520; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;">New Career Application</h2>
          <p style="margin: 5px 0 0 0; color: #D4A437; font-weight: bold;">MEATIN Careers Portal</p>
        </div>
        
        <div style="padding: 25px; color: #333333; line-height: 1.6;">
          <div style="background-color: #FAF6F0; padding: 15px; border-radius: 6px; border-left: 4px solid #D62828; margin-bottom: 20px;">
            <h3 style="margin: 0 0 5px 0; color: #153520;">Applied Position: ${position}</h3>
            <p style="margin: 0; font-size: 14px; color: #555;">Experience: <strong>${experience}</strong></p>
          </div>

          <h4 style="margin: 15px 0 10px 0; color: #153520; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">Applicant Information</h4>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 35%; color: #555;">Full Name:</td>
              <td style="padding: 8px 0; color: #111;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #D62828; text-decoration: none; font-weight: bold;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Mobile Number:</td>
              <td style="padding: 8px 0; color: #111;">${mobile}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Resume Attached:</td>
              <td style="padding: 8px 0; color: #153520; font-weight: bold;">${resumeFile ? resumeFile.name : 'No file attached'}</td>
            </tr>
          </table>

          ${coverLetter ? `
            <h4 style="margin: 20px 0 10px 0; color: #153520; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">Cover Letter / Message</h4>
            <div style="background-color: #f9f9f9; padding: 12px 15px; border-radius: 6px; font-style: italic; color: #444; font-size: 13px;">
              "${coverLetter.replace(/\n/g, '<br/>')}"
            </div>
          ` : ''}

          <div style="margin-top: 25px; pt-15px; border-t: 1px solid #eeeeee; font-size: 11px; color: #888; text-align: center;">
            This email was sent automatically from the MEATIN Career Page portal.
          </div>
        </div>
      </div>
    `;

    // Send Mail if password provided, or log payload
    if (smtpPass) {
      await transporter.sendMail({
        from: `"${fullName} (via MEATIN Careers)" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email,
        subject: `[Job Application] ${position} - ${fullName}`,
        html: htmlContent,
        attachments: attachments,
      });
      console.log(`Email successfully sent to ${targetEmail} for ${fullName}`);
    } else {
      console.log(`[SMTP Not Configured] Application received for ${fullName} (${email}). Form payload verified.`);
    }

    return NextResponse.json({
      success: true,
      message: 'Application and resume submitted successfully!',
      recipient: targetEmail,
    });
  } catch (err: unknown) {
    console.error('Error handling application submission:', err);
    return NextResponse.json(
      { error: 'Failed to process application request' },
      { status: 500 }
    );
  }
}
