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

    const targetEmail = 'fistotech01@gmail.com';
    let emailSentSuccessfully = false;

    // ------------------------------------------------------------------
    // DISPATCH METHOD 1: FormSubmit Instant Mailer (Direct to fistotech01@gmail.com)
    // ------------------------------------------------------------------
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[MEATIN Careers] ${position} - ${fullName}`,
          _template: 'table',
          'Applied Position': position,
          'Full Name': fullName,
          'Email Address': email,
          'Mobile Number': mobile,
          'Experience Level': experience,
          'Resume File': resumeFile ? resumeFile.name : 'Not provided',
          'Cover Letter Note': coverLetter || 'None provided',
        }),
      });

      if (formSubmitRes.ok) {
        emailSentSuccessfully = true;
        console.log(`[FormSubmit Success] Application email delivered to ${targetEmail}`);
      }
    } catch (fsErr) {
      console.warn('FormSubmit API notice:', fsErr);
    }

    // ------------------------------------------------------------------
    // DISPATCH METHOD 2: Nodemailer SMTP (If GMAIL_APP_PASSWORD / SMTP set)
    // ------------------------------------------------------------------
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || 'fistotech01@gmail.com';
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '';

    if (smtpPass) {
      try {
        const attachments: Array<{ filename: string; content: Buffer }> = [];
        if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
          const arrayBuffer = await resumeFile.arrayBuffer();
          attachments.push({
            filename: resumeFile.name || 'Resume.pdf',
            content: Buffer.from(arrayBuffer),
          });
        }

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
            <div style="background-color: #153520; color: #ffffff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; font-size: 22px; text-transform: uppercase;">New Job Application</h2>
              <p style="margin: 5px 0 0 0; color: #D4A437; font-weight: bold;">MEATIN Careers Portal</p>
            </div>
            
            <div style="padding: 25px; color: #333333; line-height: 1.6;">
              <div style="background-color: #FAF6F0; padding: 15px; border-radius: 6px; border-left: 4px solid #D62828; margin-bottom: 20px;">
                <h3 style="margin: 0 0 5px 0; color: #153520;">Position: ${position}</h3>
                <p style="margin: 0; font-size: 14px; color: #555;">Experience: <strong>${experience}</strong></p>
              </div>

              <h4 style="margin: 15px 0 10px 0; color: #153520; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">Applicant Details</h4>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #555; width: 35%;">Name:</td>
                  <td style="padding: 6px 0;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #555;">Mobile:</td>
                  <td style="padding: 6px 0;">${mobile}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; color: #555;">Resume:</td>
                  <td style="padding: 6px 0; font-weight: bold; color: #153520;">${resumeFile ? resumeFile.name : 'No file attached'}</td>
                </tr>
              </table>

              ${coverLetter ? `
                <h4 style="margin: 20px 0 10px 0; color: #153520; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">Cover Letter</h4>
                <div style="background-color: #f9f9f9; padding: 12px; border-radius: 6px; font-style: italic; color: #444;">
                  "${coverLetter.replace(/\n/g, '<br/>')}"
                </div>
              ` : ''}
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"${fullName} (MEATIN Careers)" <${smtpUser}>`,
          to: targetEmail,
          replyTo: email,
          subject: `[Job Application] ${position} - ${fullName}`,
          html: htmlContent,
          attachments: attachments,
        });

        emailSentSuccessfully = true;
        console.log(`[SMTP Success] Application email delivered via Nodemailer to ${targetEmail}`);
      } catch (smtpErr) {
        console.error('SMTP Delivery Warning:', smtpErr);
      }
    }

    return NextResponse.json({
      success: true,
      delivered: emailSentSuccessfully,
      message: 'Resume application submitted successfully!',
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
